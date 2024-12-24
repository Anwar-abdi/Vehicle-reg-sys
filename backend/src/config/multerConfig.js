const multer = require('multer');
const {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} = require('firebase/storage');
const { storage: firebaseStorage } = require('./firebaseConfig');

// Create multer storage configuration
const multerStorage = multer.memoryStorage();

// Create multer upload configuration
const uploadConfig = {
  storage: multerStorage,
  limits: {
    fileSize: 20 * 1024 * 1024, // 20MB limit
  },
  fileFilter: function (req, file, cb) {
    const allowedMimes = [
      'image/jpeg',
      'image/png',
      'image/jpg',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'), false);
    }
  },
};

// Create multer upload instance
const upload = multer(uploadConfig).fields([
  { name: 'proofOfOwnership', maxCount: 1 },
  { name: 'insurance', maxCount: 1 },
  { name: 'emissionTest', maxCount: 1 },
]);

// Firebase upload function
const uploadFileToFirebase = async (buffer, path, contentType) => {
  try {
    const storageRef = ref(firebaseStorage, path);
    const metadata = { contentType };
    const snapshot = await uploadBytesResumable(storageRef, buffer, metadata);
    return await getDownloadURL(snapshot.ref);
  } catch (error) {
    console.error('Firebase upload error:', error);
    throw new Error(`File upload failed: ${error.message}`);
  }
};

module.exports = {
  upload,
  uploadFileToFirebase,
};

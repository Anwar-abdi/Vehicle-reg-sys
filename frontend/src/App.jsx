import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/auth/loginForm";
import Signup from "./components/auth/SignupForm";
import Header from "./components/Ui/Header";
import Service from "./components/Ui/Service";
import System from "./components/Ui/System";
import About from "./components/Ui/About";
import Footer from "./components/Ui/Footer";
import UserPage from "./pages/UserPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./components/layouts/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Newsletter from "./components/Ui/Newsletter";

const App = () => {
  return (
    // <AuthProvider>
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/service" element={<Service />} />
          <Route path="/system" element={<System />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<UserPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
        {/* <VehicleForm /> */}
        <Footer />
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
    // </AuthProvider>
  );
};

export default App;

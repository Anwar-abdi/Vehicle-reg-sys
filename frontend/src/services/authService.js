class AuthService {
  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  register(username, email, password) {
    // This would typically make an API call to your backend
    return fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Registration failed');
    });
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  isAuthenticated() {
    const token = this.getToken();
    // Check if token exists and is not expired
    return !!token;
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

// Create the instance
const authService = new AuthService();

// Export the instance as default
export default authService;

// Export individual methods
export const getCurrentUser = authService.getCurrentUser.bind(authService);
export const register = authService.register.bind(authService);
export const logout = authService.logout.bind(authService);
export const isAuthenticated = authService.isAuthenticated.bind(authService);
export const getToken = authService.getToken.bind(authService);

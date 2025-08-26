import api from './api';

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  role: 'patient' | 'doctor';
  
  // Patient specific fields
  dateOfBirth?: string;
  gender?: 'male' | 'female' | 'other' | 'prefer-not-to-say';
  
  // Doctor specific fields
  licenseNumber?: string;
  specialization?: string;
  hospital?: string;
  yearsOfExperience?: number;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: 'patient' | 'doctor' | 'admin';
  isActive: boolean;
  isEmailVerified: boolean;
  fullName: string;
  createdAt: string;
  updatedAt: string;
  
  // Patient specific fields
  dateOfBirth?: string;
  gender?: string;
  age?: number;
  
  // Doctor specific fields
  licenseNumber?: string;
  specialization?: string;
  hospital?: string;
  yearsOfExperience?: number;
  consultationFee?: number;
  isVerified?: boolean;
}

export interface AuthResponse {
  success: boolean;
  token: string;
  data: {
    user: User;
  };
}

export interface ApiError {
  success: boolean;
  message: string;
  errors?: string[];
}

class AuthService {
  // Register new user
  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      const response = await api.post('/auth/register', data);
      
      // Store token and user data
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
      }
      
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  // Login user
  async login(data: LoginData): Promise<AuthResponse> {
    try {
      const response = await api.post('/auth/login', data);
      
      // Store token and user data
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
      }
      
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  // Get current user profile
  async getProfile(): Promise<{ success: boolean; data: { user: User } }> {
    try {
      const response = await api.get('/auth/me');
      
      // Update stored user data
      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
      }
      
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  // Update password
  async updatePassword(currentPassword: string, newPassword: string): Promise<AuthResponse> {
    try {
      const response = await api.put('/auth/updatepassword', {
        currentPassword,
        newPassword
      });
      
      // Update token
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
      }
      
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  // Logout user
  async logout(): Promise<void> {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      // Even if logout fails on server, clear local data
      console.error('Logout error:', error);
    } finally {
      // Clear local storage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  // Get stored user data
  getCurrentUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Get stored token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Clear authentication data
  clearAuth(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // Handle API errors
  private handleError(error: any): ApiError {
    if (error.response?.data) {
      return error.response.data;
    } else if (error.request) {
      return {
        success: false,
        message: 'Network error. Please check your connection and try again.'
      };
    } else {
      return {
        success: false,
        message: 'An unexpected error occurred. Please try again.'
      };
    }
  }
}

// Create and export service instance
const authService = new AuthService();
export default authService;

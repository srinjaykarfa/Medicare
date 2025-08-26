import api from './api';
import { User } from './authService';

export interface UpdateProfileData {
  firstName?: string;
  lastName?: string;
  phone?: string;
  
  // Patient specific
  dateOfBirth?: string;
  gender?: 'male' | 'female' | 'other' | 'prefer-not-to-say';
  
  // Doctor specific
  hospital?: string;
  consultationFee?: number;
  
  // Address
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
}

export interface DoctorsQuery {
  specialization?: string;
  page?: number;
  limit?: number;
}

export interface DoctorsResponse {
  success: boolean;
  count: number;
  total: number;
  page: number;
  pages: number;
  data: User[];
}

class UserService {
  // Get all doctors
  async getDoctors(query: DoctorsQuery = {}): Promise<DoctorsResponse> {
    try {
      const params = new URLSearchParams();
      
      if (query.specialization) params.append('specialization', query.specialization);
      if (query.page) params.append('page', query.page.toString());
      if (query.limit) params.append('limit', query.limit.toString());
      
      const response = await api.get(`/users/doctors?${params.toString()}`);
      return response.data;
    } catch (error: unknown) {
      throw this.handleError(error);
    }
  }

  // Get single user
  async getUser(userId: string): Promise<{ success: boolean; data: User }> {
    try {
      const response = await api.get(`/users/${userId}`);
      return response.data;
    } catch (error: unknown) {
      throw this.handleError(error);
    }
  }

  // Update user profile
  async updateProfile(userId: string, data: UpdateProfileData): Promise<{ success: boolean; data: User }> {
    try {
      const response = await api.put(`/users/${userId}`, data);
      
      // Update stored user data if updating own profile
      const currentUser = localStorage.getItem('user');
      if (currentUser) {
        const user = JSON.parse(currentUser);
        if (user._id === userId) {
          localStorage.setItem('user', JSON.stringify(response.data.data));
        }
      }
      
      return response.data;
    } catch (error: unknown) {
      throw this.handleError(error);
    }
  }

  // Get user statistics (admin only)
  async getStats(): Promise<{ 
    success: boolean; 
    data: {
      totalUsers: number;
      totalPatients: number;
      totalDoctors: number;
      verifiedDoctors: number;
      activeUsers: number;
      inactiveUsers: number;
    }
  }> {
    try {
      const response = await api.get('/users/stats/overview');
      return response.data;
    } catch (error: unknown) {
      throw this.handleError(error);
    }
  }

  // Handle API errors
  private handleError(error: unknown) {
    if (error && typeof error === 'object' && 'response' in error) {
      const axiosError = error as { response?: { data?: unknown } };
      if (axiosError.response?.data) {
        return axiosError.response.data;
      }
    }
    
    if (error && typeof error === 'object' && 'request' in error) {
      return {
        success: false,
        message: 'Network error. Please check your connection and try again.'
      };
    }
    
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.'
    };
  }
}

// Create and export service instance
const userService = new UserService();
export default userService;

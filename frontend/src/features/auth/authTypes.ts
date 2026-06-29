export interface User {
  _id: string;
  name: string;
  email: string;
  role: "user" | "owner" | "admin";
  isVerified: boolean;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  authLoading: boolean;
  authChecked: boolean;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface LoginData {
  email: string;
  password: string;
}

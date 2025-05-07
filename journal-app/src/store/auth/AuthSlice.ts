import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  status: string; // 'checking', 'authenticated', 'no-authenticated'
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  errorMessage: string | null;
  isLoggedIn: boolean | null;
}

const initialState: AuthState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
  isLoggedIn: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Partial<AuthState>>) => {
      state.status = "authenticated";
      state.uid = action.payload.uid || null;
      state.email = action.payload.email || null;
      state.displayName = action.payload.displayName || null;
      state.photoURL = action.payload.photoURL || null;
      state.errorMessage = null;
      state.isLoggedIn = true;
    },
    logout: (state, action: PayloadAction<{ errorMessage?: string }>) => {
      state.status = "no-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = action.payload.errorMessage || null;
      state.isLoggedIn = false;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
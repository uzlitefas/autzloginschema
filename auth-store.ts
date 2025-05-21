import { create } from 'zustand';

type AuthState = 'register' | 'login';

interface IAuthStateStore {
	authState: AuthState;
	setAuth: (state: AuthState) => void;
}

export const useAuthState = create<IAuthStateStore>(set => ({
	authState: 'login',
	setAuth: state => set({ authState: state }),
}));

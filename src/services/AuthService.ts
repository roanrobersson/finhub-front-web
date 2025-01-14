import { AxiosResponse } from "axios";

import api from "./api";

type ProfileResponse = {
	id: number;
	name: string;
	email: string;
	roles: string[];
	permissions: string[];
	picture: string | null;
};

type SignUpParams = {
	name: string;
	email: string;
	password: string;
	picture?: string | null;
};

class AuthService {
	static signIn = async (params: { email: string; password: string }): Promise<AxiosResponse<void>> => {
		return api.auth.post<void>(`/auth/signin`, {
			username: params.email,
			password: params.password
		});
	};

	static signInWithGoogle = async (params: { token: string }): Promise<AxiosResponse<void>> => {
		return api.auth.post<void>(`/auth/google`, {
			token: params.token
		});
	};

	static signUp = async (params: SignUpParams): Promise<AxiosResponse<ProfileResponse>> => {
		return api.auth.post<ProfileResponse>(`/auth/signup`, params);
	};

	static signOut = async (): Promise<AxiosResponse<void>> => {
		return api.auth.post<void>(`/auth/signout`);
	};

	static getProfile = async (): Promise<AxiosResponse<ProfileResponse>> => {
		return api.get<ProfileResponse>(`/auth/profile`);
	};
}

export default AuthService;

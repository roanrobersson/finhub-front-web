import { AxiosResponse } from "axios";

import api from "./api";

type GetProfileResponse = {
	id: number;
	name: string;
	email: string;
	roles: string[];
	permissions: string[];
	picture: string | null;
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

	static signOut = async (): Promise<AxiosResponse<void>> => {
		return api.auth.post<void>(`/auth/signout`);
	};

	static getProfile = async (): Promise<AxiosResponse<GetProfileResponse>> => {
		return api.get<GetProfileResponse>(`/auth/profile`);
	};
}

export default AuthService;

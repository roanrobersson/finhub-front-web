import { AxiosResponse } from "axios";

import api from "./api";

type GetByIdResponse = {};

class UserService {
	static getById = async (id: number): Promise<AxiosResponse<GetByIdResponse>> => {
		return api.get<GetByIdResponse>(`/users/${id}`);
	};
}

export default UserService;

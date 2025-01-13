import axios from "axios";
import { LOCAL_STORAGE_API_DELAY_KEY } from "lib/constants";
import { getEnvVariable } from "lib/utils";

const API_BASE_URL = getEnvVariable("API_BASE_URL");

const REQUEST_DELAY_HEADER = "x-delay";

let responseDelay = Number(localStorage.getItem(LOCAL_STORAGE_API_DELAY_KEY));

export const setResponseDelay = (value: number) => {
	responseDelay = value;
};

const createPrivateApi = (baseURL: string) => {
	const instance = axios.create({ baseURL, withCredentials: true });

	instance.interceptors.request.use((config) => {
		config.headers[REQUEST_DELAY_HEADER] = responseDelay;
		return config;
	});

	return instance;
};

const createAuthApi = (baseURL: string) => {
	const instance = axios.create({ baseURL, withCredentials: true });

	instance.interceptors.request.use((config) => {
		config.headers[REQUEST_DELAY_HEADER] = responseDelay;
		return config;
	});

	return instance;
};

const createPublicApi = (baseURL: string) => {
	const instance = axios.create({ baseURL });

	instance.interceptors.request.use((config) => {
		config.headers[REQUEST_DELAY_HEADER] = responseDelay;
		return config;
	});

	return instance;
};

const authApi = createAuthApi(API_BASE_URL);

const privateApi = createPrivateApi(API_BASE_URL);

const publicApi = createPublicApi(API_BASE_URL);

export default Object.assign(privateApi, {
	auth: authApi,
	public: publicApi
});

export { API_BASE_URL };

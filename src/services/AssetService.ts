import { AxiosResponse } from "axios";

import api from "./api";

type GetUploadSignatureResponse = {
	signature: string;
	timestamp: number;
	folder: string;
};

class AssetService {
	static getUserPictureUploadSignature = async (): Promise<AxiosResponse<GetUploadSignatureResponse>> => {
		return api.get<GetUploadSignatureResponse>(`/assets/signature/user-picture`);
	};
}

export default AssetService;

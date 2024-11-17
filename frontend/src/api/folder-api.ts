import { AxiosInstance } from "axios";

export const fetchFolders = async (axiosPrivate: AxiosInstance, folderId: string) => {
    const response = await axiosPrivate.get(`/folders/${folderId}`);
    const folders = await response.data;
    return folders;
}

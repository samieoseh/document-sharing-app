import { LoginResponse } from "@/types/User";
import axios from "./axios"

export const loginUser = async (username:string, password: string): Promise<LoginResponse> => {
  const response = await axios.post("/auth/login", { username, password }, {withCredentials: true});
  const user = await response.data;
  return user;
};

import { LoginUser, RegisterUser, RegisterUserPlatforms } from "@/types";
import axios, { AxiosResponse } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export class AuthServices {
  static async register(data: RegisterUser): Promise<AxiosResponse> {
    return await axios.post(`${BASE_URL}/api/auth/register`, data);
  }

  static async login(data: LoginUser): Promise<any> {
    const user: AxiosResponse = await axios.post(
      `${BASE_URL}/api/auth/login`,
      data
    );
    return user.data;
  }

  static async createIfNotExists(data: RegisterUserPlatforms) {
    const user = await axios.post(
      `${BASE_URL}/api/auth/registerAuthenticationProvider`,
      data
    );
    return user.data;
  }
}

import { TeamMember } from "@/types";
import { HTTPRequests } from "@/config/axios.config";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type CreationMember = Omit<Omit<TeamMember, "_id">, "__v">;

export class Memberservices {
  static async getAllMembers(): Promise<TeamMember[]> {
    const response = await HTTPRequests.get(`${BASE_URL}/api/members`);
    return response.data;
  }

  static async getOneMember(id: TeamMember["_id"]): Promise<TeamMember> {
    const response = await HTTPRequests.get(`${BASE_URL}/api/members/${id}`);
    return response.data;
  }

  static async createMember(data: CreationMember): Promise<TeamMember> {
    const response = await HTTPRequests.post(`${BASE_URL}/api/members`, data);
    return response.data;
  }

  static async updateMember(
    id: TeamMember["_id"],
    data: Partial<CreationMember>
  ): Promise<TeamMember> {
    const response = await HTTPRequests.put(
      `${BASE_URL}/api/members/${id}`,
      data
    );
    return response.data;
  }

  static async deleteMember(id: TeamMember["_id"]): Promise<TeamMember> {
    const response = await HTTPRequests.delete(`${BASE_URL}/api/members/${id}`);
    return response.data;
  }
}

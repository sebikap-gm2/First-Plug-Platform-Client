import { TeamMember } from "@/types";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type CreationMember = Omit<Omit<TeamMember, "_id">, "__v">;

export class Memberservices {
  static async getAllMembers(): Promise<TeamMember[]> {
    const response = await axios.get(
      `${BASE_URL}/api/members`
    );
    return response.data;
  }

  static async getOneMember(id: TeamMember["_id"]): Promise<TeamMember> {
    const response = await axios.get(
      `${BASE_URL}/api/members/${id}`
    );
    return response.data;
  }

  static async createMember(data: CreationMember): Promise<TeamMember> {
    const response = await axios.post(
      `${BASE_URL}/api/members`,
      data
    );
    return response.data;
  }

  static async updateMember(
    id: TeamMember["_id"],
    data: CreationMember
  ): Promise<TeamMember> {
    const response = await axios.put(
      `${BASE_URL}/api/members/${id}`,
      data
    );
    return response.data;
  }

  static async deleteMember(id: TeamMember["_id"]): Promise<TeamMember> {
    const response = await axios.delete(
      `${BASE_URL}/api/members/${id}`
    );
    return response.data;
  }
}

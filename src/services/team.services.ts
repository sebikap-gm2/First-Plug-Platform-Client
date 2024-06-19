import { Team } from "@/types";
import { BASE_URL, HTTPRequests } from "@/config/axios.config";

type TeamCreation = { name: string };

const http = new HTTPRequests();

export class TeamServices {
  static async getAllTeams(): Promise<Team[]> {
    const response = await HTTPRequests.get(`${BASE_URL}/api/teams`);
    return response.data;
  }

  static async createTeam(team: TeamCreation): Promise<Team> {
    const response = await HTTPRequests.post(`${BASE_URL}/api/teams`, team);
    return response.data;
  }

  static async deleteTeam(_id: string): Promise<Team[]> {
    const response = await HTTPRequests.get(`${BASE_URL}/api/teams`);
    return response.data;
  }

  static async addToTeam(teamId: string, memberId: string): Promise<Team> {
    const response = await HTTPRequests.put(
      `${BASE_URL}/api/teams/${teamId}/members/${memberId}`,
      {}
    );
    return response.data;
  }

  static async removeFromTeam(teamId: string, memberId: string): Promise<Team> {
    const response = await HTTPRequests.put(
      `${BASE_URL}/api/teams/change-member/${memberId}`,
      { teamId: null }
    );
    return response.data;
  }
  static async bulkDeleteTeams(teamIds: string[]): Promise<void> {
    await HTTPRequests.delete(`${BASE_URL}/api/teams/bulk-delete`, {
      data: { ids: teamIds },
    });
  }
}

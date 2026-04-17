import { Journey } from "../types/journeyTypes";
import { Project } from "../types/projectsType";
import { SkillsResponse } from "../types/skillsType";
import { apiClient } from "./apiCore";

export const getSkills = async () => {
  return await apiClient<SkillsResponse>("/skills", { revalidate: 60 });
};

export async function getJourney(): Promise<Journey[]> {
  return apiClient<Journey[]>("/journey/", { revalidate: 60 });
}

export async function getProjects(): Promise<Project[]> {
  return apiClient<Project[]>("/projects/", { revalidate: 60 });
}

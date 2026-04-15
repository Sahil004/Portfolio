import { SkillsResponse } from "../types/skillsType";
import { apiClient } from "./apiCore";

export const getSkills = async () => {
  return await apiClient<SkillsResponse>("/skills");
};

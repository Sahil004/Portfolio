import { SkillsResponse } from "../types/skillsType";
import { apiClient } from "./apiCore";

export const getSkills = async () => {
  return await apiClient<SkillsResponse>("/skills", {
    revalidate: 60, // re-fetch from Django every 60 seconds
  });
};

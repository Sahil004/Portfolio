export type Badge = {
  label: string;
  color: string;
};

export type Skill = {
  name: string;
  icon: string | null;
  iconClass: string;
  badge: Badge | null;
};

export type SkillsResponse = Record<string, Skill[]>;

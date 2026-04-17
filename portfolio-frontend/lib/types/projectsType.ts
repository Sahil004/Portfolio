import { Journey } from "./journeyTypes";

export interface ProjectTag {
  id: number;
  label: string;
  color: string;
}

export interface Icon {
  icon_key: string;
  icon_class: string;
}

export interface Badge {
  label: string;
  color: string;
}

export interface Technology {
  id: number;
  name: string;
  icon: Icon | null;
  badge: Badge | null;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  tags: ProjectTag[];
  category: "company" | "college" | "self";
  associated_with: Journey | null;
  technologies: Technology[];
  github_url: string;
  live_url: string;
  image: string;
  featured: boolean;
  order: number;
  created_at: string;
}

export type JourneyType = "company" | "education" | "certification";

export type JourneyPoint = {
  text: string;
};

export type Journey = {
  id: number;
  type: JourneyType;
  role: string;
  organization: string;
  start_date: string;
  end_date: string | null;
  image?: string | null;
  points: JourneyPoint[];
};

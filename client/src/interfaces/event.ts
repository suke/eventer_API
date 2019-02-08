import { Category } from "./category";

export interface Event {
  id: number;
  name: string;
  company_id: number;
  site_url?: string;
  categories?: Array<Category>;
}

export interface EventSchedule {
  id: number;
  started_at: Date;
  ended_at: Date;
  venue?: string;
  zip_code?: string;
  address?: string;
}

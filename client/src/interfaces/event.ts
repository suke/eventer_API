export interface Event {
  id: number
  name: string
  company_id: number
  site_url: string
}

export interface EventSchedule {
  id: number
  started_at: Date
  ended_at: Date
  address: string
}

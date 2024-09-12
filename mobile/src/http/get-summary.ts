import { env } from '@/env'

export interface GetSummaryResponse {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export async function getSummary(): Promise<GetSummaryResponse> {
  const response = await fetch(`${env.EXPO_PUBLIC_API_URL}/summary`)
  const data = await response.json()

  return data.summary
}

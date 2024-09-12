import { env } from '@/env'

export interface GetPendingGoalsResponse {
  pendingGoals: {
    id: string
    title: string
    desiredWeeklyFrequency: number
    completionCount: number
  }[]
}

export async function getPendingGoals(): Promise<GetPendingGoalsResponse> {
  const response = await fetch(`${env.EXPO_PUBLIC_API_URL}/pending-goals`)
  const data = await response.json()

  return data
}

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
  > | null
}

export async function getSummary(): Promise<GetSummaryResponse> {
  const response = await fetch('http://localhost:3333/summary')
  const data = await response.json()

  return data.summary
}

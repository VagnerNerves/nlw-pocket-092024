import { env } from '@/env'

export interface DeleteGoalCompletionRequest {
  id: string
}

export async function deleteGoalCompletion({
  id,
}: DeleteGoalCompletionRequest): Promise<void> {
  const response = await fetch(`${env.EXPO_PUBLIC_API_URL}/completions/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Error while delete the goal completion')
  }
}

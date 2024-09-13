import { eq } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions } from '../db/schema'

interface DeleteGoalCompletionRequest {
  id: string
}

export async function deleteGoalCompletion({
  id,
}: DeleteGoalCompletionRequest) {
  await db.delete(goalCompletions).where(eq(goalCompletions.id, id))
}

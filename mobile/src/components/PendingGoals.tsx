import { View } from 'react-native'

import { useQuery, useQueryClient } from '@tanstack/react-query'

import { getPendingGoals } from '@/http/get-pending-goals'
import { createGoalCompletion } from '@/http/create-goal-completion'

import { OutlineButton } from '@/components/ui/OutlineButton'

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
  })

  if (isLoading || !data) {
    return null
  }

  async function handleCreateGoalCompletion(goalId: string) {
    await createGoalCompletion({ goalId })

    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
    queryClient.invalidateQueries({ queryKey: ['summary'] })
  }

  return (
    <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap' }}>
      {data.pendingGoals.map(goal => {
        return (
          <OutlineButton
            key={goal.id}
            buttonProps={{
              disabled: goal.completionCount >= goal.desiredWeeklyFrequency,
              onPress: () => handleCreateGoalCompletion(goal.id),
            }}
            text={goal.title}
          />
        )
      })}
    </View>
  )
}

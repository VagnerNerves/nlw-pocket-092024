import { ScrollView } from 'react-native'

import { EmptyGoals } from '@/components/EmptyGoals'

export default function Home() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <EmptyGoals />
    </ScrollView>
  )
}

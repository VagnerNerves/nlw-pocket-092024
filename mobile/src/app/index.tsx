import { ScrollView } from 'react-native'

import { useQuery } from '@tanstack/react-query'

import { getSummary } from '@/http/get-summary'

import { EmptyGoals } from '@/components/EmptyGoals'
import { Summary } from '@/components/Summary'
import { Loading } from '@/components/ui/Loading'

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, //60 seconds
  })

  if (isLoading) {
    return <Loading />
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}
    </ScrollView>
  )
}

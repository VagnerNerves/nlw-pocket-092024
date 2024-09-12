import { Text, View } from 'react-native'

import { useRouter } from 'expo-router'

import { CircleCheck } from 'lucide-react-native'

import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'

import { useQuery } from '@tanstack/react-query'
import { getSummary } from '@/http/get-summary'

import LogoSVG from '@/assets/logo.svg'

import { THEME } from '@/theme/theme'

import { Button } from '@/components/ui/Button'
import { Progress } from '@/components/ui/Progress'
import { PendingGoals } from '@/components/PendingGoals'

dayjs.locale(ptBR)

export function Summary() {
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, //60 seconds
  })

  if (!data) {
    return null
  }

  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

  const completePercentage = Math.round((data?.completed * 100) / data?.total)

  return (
    <View
      style={{
        flex: 1,
        gap: 24,
        paddingHorizontal: 16,
        paddingVertical: 32,
      }}
    >
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            gap: 12,
            alignItems: 'center',
          }}
        >
          <LogoSVG />
          <Text
            style={{
              flex: 1,
              fontFamily: THEME.FONTS.INTER_SEMIBOLD,
              fontSize: THEME.FONTS.SIZE.LG,
              color: THEME.COLORS.ZINC[50],
            }}
          >
            {firstDayOfWeek} - {lastDayOfWeek}
          </Text>
        </View>

        <Button
          icon="plus"
          text="Cadastrar meta"
          size="sm"
          buttonProps={{
            style: { width: 'auto' },
            onPress: () => router.navigate('/creategoal'),
          }}
        />
      </View>

      <View style={{ width: '100%', gap: 12 }}>
        <Progress completePercentage={completePercentage} />

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            gap: 12,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: THEME.FONTS.INTER_REGULAR,
              fontSize: THEME.FONTS.SIZE.XS,
              color: THEME.COLORS.ZINC[400],
            }}
          >
            Você completou{' '}
            <Text style={{ color: THEME.COLORS.ZINC[100] }}>
              {data?.completed}
            </Text>{' '}
            de{' '}
            <Text style={{ color: THEME.COLORS.ZINC[100] }}>{data?.total}</Text>{' '}
            metas nessa semana.
          </Text>

          <Text
            style={{
              fontFamily: THEME.FONTS.INTER_REGULAR,
              fontSize: THEME.FONTS.SIZE.XS,
              color: THEME.COLORS.ZINC[400],
            }}
          >
            {completePercentage}%
          </Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: THEME.COLORS.ZINC[900],
        }}
      />

      <PendingGoals />

      <View style={{ width: '100%', gap: 24 }}>
        <Text
          style={{
            fontFamily: THEME.FONTS.INTER_MEDIUM,
            fontSize: THEME.FONTS.SIZE.XL,
            color: THEME.COLORS.ZINC[100],
          }}
        >
          Sua semana
        </Text>

        {Object.entries(data.goalsPerDay).map(([date, goals]) => {
          const weekDAy = dayjs(date).format('dddd')
          const formattedDate = dayjs(date).format('D[ de ]MMMM')

          return (
            <View key={date} style={{ width: '100%', gap: 16 }}>
              <Text
                style={{
                  fontFamily: THEME.FONTS.INTER_MEDIUM,
                  fontSize: THEME.FONTS.SIZE.BASE,
                  color: THEME.COLORS.ZINC[50],
                  textTransform: 'capitalize',
                }}
              >
                {weekDAy}{' '}
                <Text
                  style={{
                    fontFamily: THEME.FONTS.INTER_REGULAR,
                    fontSize: THEME.FONTS.SIZE.XS,
                    color: THEME.COLORS.ZINC[400],
                  }}
                >
                  ({formattedDate})
                </Text>
              </Text>

              <View style={{ width: '100%', gap: 12 }}>
                {goals.map(goal => {
                  const parsedTime = dayjs(goal.completedAt).format('HH:mm[h]')

                  return (
                    <View
                      key={goal.id}
                      style={{
                        flexDirection: 'row',
                        gap: 8,
                        alignItems: 'center',
                      }}
                    >
                      <CircleCheck size={16} color={THEME.COLORS.PINK[400]} />
                      <Text
                        style={{
                          fontFamily: THEME.FONTS.INTER_REGULAR,
                          fontSize: THEME.FONTS.SIZE.SM,
                          color: THEME.COLORS.ZINC[400],
                        }}
                      >
                        Você completou "
                        <Text style={{ color: THEME.COLORS.ZINC[100] }}>
                          {goal.title}
                        </Text>
                        " às{' '}
                        <Text style={{ color: THEME.COLORS.ZINC[100] }}>
                          {parsedTime}
                        </Text>
                      </Text>
                    </View>
                  )
                })}
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

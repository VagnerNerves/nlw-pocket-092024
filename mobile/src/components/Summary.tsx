import { Text, View } from 'react-native'

import { useRouter } from 'expo-router'

import { CircleCheck } from 'lucide-react-native'

import LogoSVG from '@/assets/logo.svg'

import { THEME } from '@/theme/theme'

import { Button } from '@/components/ui/Button'
import { Progress } from '@/components/ui/Progress'
import { PendingGoals } from '@/components/PendingGoals'

export function Summary() {
  const router = useRouter()

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
            05 a 12 de Novembro
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
        <Progress completePercentage={50} />

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
            <Text style={{ color: THEME.COLORS.ZINC[100] }}>8</Text> de{' '}
            <Text style={{ color: THEME.COLORS.ZINC[100] }}>15</Text> metas
            nessa semana.
          </Text>

          <Text
            style={{
              fontFamily: THEME.FONTS.INTER_REGULAR,
              fontSize: THEME.FONTS.SIZE.XS,
              color: THEME.COLORS.ZINC[400],
            }}
          >
            58%
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

        <View style={{ width: '100%', gap: 16 }}>
          <Text
            style={{
              fontFamily: THEME.FONTS.INTER_MEDIUM,
              fontSize: THEME.FONTS.SIZE.BASE,
              color: THEME.COLORS.ZINC[50],
            }}
          >
            Hoje{' '}
            <Text
              style={{
                fontFamily: THEME.FONTS.INTER_REGULAR,
                fontSize: THEME.FONTS.SIZE.XS,
                color: THEME.COLORS.ZINC[400],
              }}
            >
              (06 de Agosto)
            </Text>
          </Text>

          <View style={{ width: '100%', gap: 12 }}>
            <View
              style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}
            >
              <CircleCheck size={16} color={THEME.COLORS.PINK[400]} />
              <Text
                style={{
                  fontFamily: THEME.FONTS.INTER_REGULAR,
                  fontSize: THEME.FONTS.SIZE.SM,
                  color: THEME.COLORS.ZINC[400],
                }}
              >
                Você completou “Acordar cedo” às 08:13h
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}
            >
              <CircleCheck size={16} color={THEME.COLORS.PINK[400]} />
              <Text
                style={{
                  fontFamily: THEME.FONTS.INTER_REGULAR,
                  fontSize: THEME.FONTS.SIZE.SM,
                  color: THEME.COLORS.ZINC[400],
                }}
              >
                Você completou “Acordar cedo” às 08:13h
              </Text>
            </View>
          </View>
        </View>

        <View style={{ width: '100%', gap: 16 }}>
          <Text
            style={{
              fontFamily: THEME.FONTS.INTER_MEDIUM,
              fontSize: THEME.FONTS.SIZE.BASE,
              color: THEME.COLORS.ZINC[50],
            }}
          >
            Hoje{' '}
            <Text
              style={{
                fontFamily: THEME.FONTS.INTER_REGULAR,
                fontSize: THEME.FONTS.SIZE.XS,
                color: THEME.COLORS.ZINC[400],
              }}
            >
              (06 de Agosto)
            </Text>
          </Text>

          <View style={{ width: '100%', gap: 12 }}>
            <View
              style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}
            >
              <CircleCheck size={16} color={THEME.COLORS.PINK[400]} />
              <Text
                style={{
                  fontFamily: THEME.FONTS.INTER_REGULAR,
                  fontSize: THEME.FONTS.SIZE.SM,
                  color: THEME.COLORS.ZINC[400],
                }}
              >
                Você completou “Acordar cedo” às 08:13h
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}
            >
              <CircleCheck size={16} color={THEME.COLORS.PINK[400]} />
              <Text
                style={{
                  fontFamily: THEME.FONTS.INTER_REGULAR,
                  fontSize: THEME.FONTS.SIZE.SM,
                  color: THEME.COLORS.ZINC[400],
                }}
              >
                Você completou “Acordar cedo” às 08:13h
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

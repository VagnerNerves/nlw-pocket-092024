import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { useRouter } from 'expo-router'

import { ChevronLeft } from 'lucide-react-native'

import { THEME } from '@/theme/theme'

import { Button } from '@/components/ui/Button'
import { Check } from '@/components/ui/Check'
import { Input } from '@/components/ui/Input'

export default function CreateGoal() {
  const router = useRouter()

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 32,
      }}
    >
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={28} color={THEME.COLORS.ZINC[600]} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: THEME.FONTS.INTER_SEMIBOLD,
            fontSize: THEME.FONTS.SIZE.LG,
            color: THEME.COLORS.ZINC[50],
          }}
        >
          Cadastrar meta
        </Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            width: '100%',
            gap: 24,
            paddingVertical: 12,
          }}
        >
          <Text
            style={{
              fontFamily: THEME.FONTS.INTER_REGULAR,
              fontSize: THEME.FONTS.SIZE.SM,
              color: THEME.COLORS.ZINC[400],
            }}
          >
            Adicione atividades que{' '}
            <Text style={{ textDecorationLine: 'underline' }}>
              te fazem bem
            </Text>{' '}
            e que você quer continuar praticando toda semana.
          </Text>

          <View style={{ width: '100%', gap: 8 }}>
            <Text
              style={{
                fontFamily: THEME.FONTS.INTER_MEDIUM,
                fontSize: THEME.FONTS.SIZE.SM,
                color: THEME.COLORS.ZINC[100],
              }}
            >
              Qual a atividade?
            </Text>

            <Input
              inputProps={{
                placeholder: 'Praticar exercícios, meditar, etc...',
              }}
              errorMessage=""
            />
          </View>

          <View style={{ width: '100%', gap: 8 }}>
            <Text
              style={{
                fontFamily: THEME.FONTS.INTER_MEDIUM,
                fontSize: THEME.FONTS.SIZE.SM,
                color: THEME.COLORS.ZINC[100],
              }}
            >
              Quantas vezes na semana?
            </Text>

            <Check isCheck text="1x na semana" icon="sleepy" />
            <Check isCheck={false} text="2x na semana" icon="smile" />
            <Check isCheck={false} text="3x na semana" icon="glasses" />
            <Check isCheck={false} text="4x na semana" icon="tongue-out" />
            <Check isCheck={false} text="5x na semana" icon="incredible" />
            <Check
              isCheck={false}
              text="6x na semana"
              icon="out-of-the-curve"
            />
            <Check isCheck={false} text="Todos dias da semana" />
          </View>

          <Button text="Salvar" />
        </View>
      </ScrollView>
    </View>
  )
}

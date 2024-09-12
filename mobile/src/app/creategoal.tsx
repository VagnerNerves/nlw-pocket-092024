import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { useRouter } from 'expo-router'

import { useQueryClient } from '@tanstack/react-query'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { ChevronLeft } from 'lucide-react-native'

import { THEME } from '@/theme/theme'

import { createGoal } from '@/http/create-goal'

import { Button } from '@/components/ui/Button'
import { Check } from '@/components/ui/Check'
import { Input } from '@/components/ui/Input'

const createGoalForm = z.object({
  title: z
    .string({ required_error: 'Informe a atividade que deseja realizar.' })
    .min(1, 'Informe a atividade que deseja realizar.'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

type CreateGoalSchema = z.infer<typeof createGoalForm>

export default function CreateGoal() {
  const router = useRouter()

  const queryClient = useQueryClient()

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateGoalSchema>({
    resolver: zodResolver(createGoalForm),
  })

  async function handleCreateGoal({
    title,
    desiredWeeklyFrequency,
  }: CreateGoalSchema) {
    await createGoal({
      title,
      desiredWeeklyFrequency,
    })

    reset()

    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
    queryClient.invalidateQueries({ queryKey: ['summary'] })

    router.back()
  }

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

            <Controller
              control={control}
              name="title"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  inputProps={{
                    placeholder: 'Praticar exercícios, meditar, etc...',
                    onBlur: onBlur,
                    onChangeText: onChange,
                    value: value,
                  }}
                  errorMessage={errors.title?.message}
                />
              )}
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

            <Controller
              control={control}
              name="desiredWeeklyFrequency"
              defaultValue={3}
              render={({ field: { onChange, value } }) => (
                <>
                  <Check
                    onPress={() => onChange(1)}
                    isCheck={value === 1}
                    text="1x na semana"
                    icon="sleepy"
                  />
                  <Check
                    onPress={() => onChange(2)}
                    isCheck={value === 2}
                    text="2x na semana"
                    icon="smile"
                  />
                  <Check
                    onPress={() => onChange(3)}
                    isCheck={value === 3}
                    text="3x na semana"
                    icon="glasses"
                  />
                  <Check
                    onPress={() => onChange(4)}
                    isCheck={value === 4}
                    text="4x na semana"
                    icon="tongue-out"
                  />
                  <Check
                    onPress={() => onChange(5)}
                    isCheck={value === 5}
                    text="5x na semana"
                    icon="incredible"
                  />
                  <Check
                    onPress={() => onChange(6)}
                    isCheck={value === 6}
                    text="6x na semana"
                    icon="out-of-the-curve"
                  />
                  <Check
                    onPress={() => onChange(7)}
                    isCheck={value === 7}
                    text="Todos dias da semana"
                  />
                </>
              )}
            />
          </View>

          <Button
            text="Salvar"
            buttonProps={{ onPress: handleSubmit(handleCreateGoal) }}
          />
        </View>
      </ScrollView>
    </View>
  )
}

import { Text, View } from 'react-native'

import { useRouter } from 'expo-router'

import LogoSVG from '@/assets/logo-in-orbit.svg'
import LetStartIllustrationSVG from '@/assets/lets-start-illustration.svg'

import { THEME } from '@/theme/theme'
import { Button } from '@/components/ui/Button'

export function EmptyGoals() {
  const router = useRouter()

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        paddingHorizontal: 16,
        paddingVertical: 32,
      }}
    >
      <LogoSVG />

      <LetStartIllustrationSVG />

      <View
        style={{
          width: '100%',
          maxWidth: 350,
          alignItems: 'center',
          gap: 20,
        }}
      >
        <Text
          style={{
            fontFamily: THEME.FONTS.INTER_REGULAR,
            fontSize: THEME.FONTS.SIZE.BASE,
            color: THEME.COLORS.ZINC[300],
            textAlign: 'center',
            lineHeight: 25.6,
          }}
        >
          Você ainda não cadastrou nenhuma meta, que tal{' '}
          <Text style={{ textDecorationLine: 'underline' }}>cadastrar um</Text>{' '}
          agora mesmo?
        </Text>

        <Button
          text="Cadastrar meta"
          icon="plus"
          buttonProps={{
            style: { width: 'auto' },
            onPress: () => router.navigate('/creategoal'),
          }}
        />
      </View>
    </View>
  )
}

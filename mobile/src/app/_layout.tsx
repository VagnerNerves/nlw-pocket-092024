import { View } from 'react-native'

import { SplashScreen, Stack } from 'expo-router'
import {
  ThemeProvider,
  DefaultTheme,
  type Theme,
} from '@react-navigation/native'

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter'
import { useEffect } from 'react'

import { THEME } from '@/theme/theme'

import { Loading } from '@/components/ui/Loading'

SplashScreen.preventAutoHideAsync()

export default function layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  })

  const themeProvider: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: THEME.COLORS.ZINC[950],
    },
  }

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  return (
    <ThemeProvider value={themeProvider}>
      <View style={{ flex: 1, backgroundColor: THEME.COLORS.ZINC[950] }}>
        {fontsLoaded ? (
          <Stack screenOptions={{ headerShown: false }} />
        ) : (
          <Loading />
        )}
      </View>
    </ThemeProvider>
  )
}

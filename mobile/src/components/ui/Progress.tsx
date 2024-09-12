import { THEME } from '@/theme/theme'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, View } from 'react-native'

type ProgressProps = {
  completePercentage: number
}
export function Progress({ completePercentage }: ProgressProps) {
  return (
    <View
      style={{
        width: '100%',
        height: 8,
        backgroundColor: THEME.COLORS.ZINC[900],
        borderRadius: 8,
        overflow: 'hidden',
      }}
    >
      <LinearGradient
        colors={[THEME.COLORS.PINK[400], THEME.COLORS.VIOLET[500]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          position: 'absolute',
          height: 8,
          backgroundColor: THEME.COLORS.PINK[500],

          width: `${completePercentage}%`,
        }}
      />
    </View>
  )
}

import {
  View,
  ActivityIndicator,
  type ColorValue,
  type ViewProps,
} from 'react-native'

import { THEME } from '@/src/theme/theme'

type LoadingProps = {
  color?: ColorValue
  viewProps?: ViewProps
}
export function Loading({ color, viewProps }: LoadingProps) {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      {...viewProps}
    >
      <ActivityIndicator
        testID="loading-activity-indicator"
        color={color ? color : THEME.COLORS.ZINC[50]}
      />
    </View>
  )
}

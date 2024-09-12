import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'

import { Loading } from '@/components/ui/Loading'

import { THEME } from '@/theme/theme'
import { Plus } from 'lucide-react-native'

type ButtonProps = {
  text?: string
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'sm'
  icon?: 'plus'
  isLoading?: boolean
  buttonProps?: TouchableOpacityProps
}
export function Button({
  text,
  variant = 'primary',
  size = 'default',
  icon,
  isLoading = false,
  buttonProps,
}: ButtonProps) {
  const { style, ...restButtonProps } = buttonProps || {}

  const bgColor = {
    primary: THEME.COLORS.VIOLET[500],
    secondary: THEME.COLORS.ZINC[900],
  }
  const textColor = {
    primary: THEME.COLORS.VIOLET[50],
    secondary: THEME.COLORS.ZINC[400],
  }

  return (
    <TouchableOpacity
      style={[
        {
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
          paddingLeft: size === 'default' ? 16 : 12,
          paddingRight: size === 'default' ? 16 : 12,
          paddingTop: size === 'default' ? 10 : 6,
          paddingBottom: size === 'default' ? 10 : 6,
          backgroundColor: bgColor[variant],
          borderRadius: 8,
          opacity: isLoading ? 0.7 : 1,
        },
        style,
      ]}
      disabled={isLoading}
      {...restButtonProps}
    >
      {isLoading ? (
        <Loading color={textColor[variant]} />
      ) : (
        <>
          {icon === 'plus' && <Plus size={16} color={textColor[variant]} />}

          {text && (
            <Text
              style={{
                fontFamily: THEME.FONTS.INTER_MEDIUM,
                fontSize: THEME.FONTS.SIZE.SM,
                color: textColor[variant],
              }}
            >
              {text}
            </Text>
          )}
        </>
      )}
    </TouchableOpacity>
  )
}

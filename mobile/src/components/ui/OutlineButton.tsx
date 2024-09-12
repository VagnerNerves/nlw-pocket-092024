import { THEME } from '@/theme/theme'
import { Plus } from 'lucide-react-native'
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'

type OutlineButtonProps = {
  text: string
  buttonProps?: TouchableOpacityProps
}

export function OutlineButton({ text, buttonProps }: OutlineButtonProps) {
  const isButtonDisable = buttonProps?.disabled || false

  return (
    <TouchableOpacity
      {...buttonProps}
      style={{
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,

        alignItems: 'center',

        borderRadius: 58,
        borderWidth: 1,
        borderColor: isButtonDisable
          ? THEME.COLORS.ZINC[900]
          : THEME.COLORS.ZINC[800],
        borderStyle: 'dashed',
      }}
    >
      <Plus
        size={16}
        color={
          isButtonDisable ? THEME.COLORS.ZINC[600] : THEME.COLORS.ZINC[300]
        }
      />

      <Text
        style={{
          fontFamily: THEME.FONTS.INTER_REGULAR,
          fontSize: THEME.FONTS.SIZE.SM,
          color: isButtonDisable
            ? THEME.COLORS.ZINC[600]
            : THEME.COLORS.ZINC[300],
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

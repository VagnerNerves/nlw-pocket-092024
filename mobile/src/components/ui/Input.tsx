import { forwardRef, type ForwardedRef } from 'react'
import {
  View,
  Text,
  TextInput,
  type TextInputProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native'

import { CircleAlert } from 'lucide-react-native'

import { THEME } from '@/theme/theme'

type InputProps = {
  errorMessage?: string | null
  styleViewContainer?: StyleProp<ViewStyle>
  inputProps?: TextInputProps
}

export const Input = forwardRef(function Input(
  { errorMessage = null, styleViewContainer, inputProps }: InputProps,
  ref: ForwardedRef<TextInput>
) {
  const invalid = !!errorMessage

  return (
    <View style={[{ width: '100%', gap: 8 }, styleViewContainer]}>
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: THEME.COLORS.BLACK,
          borderWidth: 1,
          borderColor: invalid ? THEME.COLORS.RED[300] : THEME.COLORS.ZINC[800],
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        <TextInput
          ref={ref}
          placeholderTextColor={THEME.COLORS.ZINC[400]}
          selectionColor={THEME.COLORS.ZINC[50]}
          {...inputProps}
          style={[
            {
              flex: 1,
              fontFamily: THEME.FONTS.INTER_REGULAR,
              fontSize: THEME.FONTS.SIZE.BASE,
              color: THEME.COLORS.ZINC[50],
              backgroundColor: THEME.COLORS.BLACK,

              paddingTop: 14,
              paddingBottom: 14,
              paddingRight: 16,
              paddingLeft: 16,
            },
            inputProps?.style,
          ]}
        />
      </View>

      {invalid && (
        <View
          style={{
            gap: 4,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <CircleAlert size={18} color={THEME.COLORS.RED[500]} />
          <Text
            style={{
              flex: 1,
              fontFamily: THEME.FONTS.INTER_REGULAR,
              fontSize: THEME.FONTS.SIZE.SM,
              color: THEME.COLORS.RED[500],
            }}
          >
            {errorMessage}
          </Text>
        </View>
      )}
    </View>
  )
})

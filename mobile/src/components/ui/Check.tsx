import { THEME } from '@/theme/theme'
import { Circle, CircleCheck } from 'lucide-react-native'
import { Text, TouchableOpacity, View } from 'react-native'

type CheckProps = {
  isCheck: boolean
  text: string
  icon?:
    | 'sleepy'
    | 'smile'
    | 'glasses'
    | 'tongue-out'
    | 'incredible'
    | 'out-of-the-curve'

  onPress: () => void
}
export function Check({ isCheck, text, icon, onPress }: CheckProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,

        paddingHorizontal: 16,
        paddingVertical: 10,

        backgroundColor: isCheck ? THEME.COLORS.PINK[970] : THEME.COLORS.BLACK,

        borderRadius: 8,
        borderWidth: 1,
        borderColor: isCheck ? THEME.COLORS.PINK[500] : THEME.COLORS.ZINC[800],
      }}
    >
      {isCheck ? (
        <CircleCheck size={16} color={THEME.COLORS.PINK[400]} />
      ) : (
        <Circle size={16} color={THEME.COLORS.ZINC[600]} />
      )}

      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: THEME.FONTS.INTER_MEDIUM,
            fontSize: THEME.FONTS.SIZE.SM,
            color: THEME.COLORS.ZINC[300],
          }}
        >
          {text}
        </Text>
      </View>

      {icon ? (
        <Text
          style={{
            fontFamily: THEME.FONTS.INTER_MEDIUM,
            fontSize: THEME.FONTS.SIZE.LG,
          }}
        >
          {icon === 'sleepy' && '🥱'}
          {icon === 'smile' && '🙂'}
          {icon === 'glasses' && '😎'}
          {icon === 'tongue-out' && '😜'}
          {icon === 'incredible' && '🤨'}
          {icon === 'out-of-the-curve' && '🤯'}
        </Text>
      ) : (
        <View style={{ width: 18 }} />
      )}
    </TouchableOpacity>
  )
}

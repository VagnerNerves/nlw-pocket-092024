import { View } from 'react-native'

import { OutlineButton } from '@/components/ui/OutlineButton'

export function PendingGoals() {
  return (
    <View style={{ flexDirection: 'row', gap: 12, flexWrap: 'wrap' }}>
      <OutlineButton buttonProps={{ disabled: false }} text="Meditar" />
      <OutlineButton
        buttonProps={{ disabled: false }}
        text="Praticar exercício"
      />
      <OutlineButton buttonProps={{ disabled: false }} text="Nadar" />
      <OutlineButton buttonProps={{ disabled: true }} text="Acordar cedo" />
    </View>
  )
}

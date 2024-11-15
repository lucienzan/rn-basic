import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommImage from '@/components/commImge'
import CommCard from '@/components/commCard'
import { COLORS } from '@/constants/theme'

const home = () => {
  return (
    <SafeAreaView>
      <View>
        <CommImage title={"Daniel"} />
        <CommCard color={COLORS.success}/>
      <Text>This is home</Text>
      </View>
      </SafeAreaView>
  )
}

export default home
import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { DrawerProvider } from '@/context/DrawerContext'

const _layout = () => {
  return (
    <DrawerProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      </DrawerProvider>
  )
}

export default _layout
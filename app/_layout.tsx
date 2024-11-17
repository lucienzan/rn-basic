import React from 'react'
import { Stack } from 'expo-router'
import { DrawerProvider } from '@/context/DrawerContext'

const _layout = () => {
  return (
    <DrawerProvider>
    <Stack initialRouteName="(tabs)">
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name='(posts)' options={{ headerBackTitle:"home", headerTitle:"" }} />
      </Stack>
    </DrawerProvider>
  )
}

export default _layout
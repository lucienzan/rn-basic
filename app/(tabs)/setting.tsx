import { View, Text, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const setting = () => {
  const textBtnFn = () => {
    console.log("hello daniel")
  }

  return (
    <SafeAreaView>
    <View style={{ padding:10, paddingTop:0 }}>
        <Text>setting</Text>
        <Pressable onPressIn={()=>console.log("hello")} style={{ width: 200, padding: 20, backgroundColor: "teal" }}>
          <Text style={{ textAlign: "center" }}>Pressable</Text>
        </Pressable>
        <View style={{ marginTop: 30 }}></View>
        <TouchableOpacity onPressIn={textBtnFn} style={{ width: 200, padding: 20, backgroundColor: "teal", borderRadius: 10 }} >
          <Text style={{ textAlign: "center" }}>TouchableOpacity</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
  )
}

export default setting
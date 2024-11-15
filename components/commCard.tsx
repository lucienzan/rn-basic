import { View, Text, StyleSheet, ColorValue, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS, SIZES } from '@/constants/theme'
interface Props{
  color: ColorValue | undefined
}
const CommCard: React.FC<Props> = ({ color }) => {
const date = new Date();
const formattedDate = date.toLocaleDateString('en-GB', {
  day: '2-digit',
  month: 'short',
});

  return (
    <View style={[style.card, { backgroundColor: color }]}>
      <View style={style.cardHearder}>
         <TouchableOpacity style={style.dateContainer}>
          <MaterialIcons name="today" size={24} color={COLORS.black} />
          <Text style={style.date}>{formattedDate}</Text>
          </TouchableOpacity>
        <View style={style.btnContainer}>
          <TouchableOpacity style={[style.btn,{backgroundColor: "rgba(242, 244, 243, 0.50)", marginRight: 10 }]}>
            <MaterialIcons name="share" size={24} color={COLORS.black} />
          </TouchableOpacity>
          <TouchableOpacity style={[style.btn]}>
            <MaterialIcons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
      <Text style={style.currentTask}>Current Tasks</Text>
        <Text style={[style.task, {paddingTop: 18}]}>You have 3</Text>
        <View style={{ flexDirection: "row", gap: 6 }}>
        <Text style={style.task}>tasks</Text>
          <Text style={style.taskType}>High
            <MaterialIcons name='show-chart' />
        </Text>
        <Text style={style.task}>for today</Text>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  card: {
    padding: 20,
    paddingTop: 35,
    paddingBottom: 35,
    borderRadius: 30,
    margin: 10,
  },
  cardHearder: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateContainer: {
    flexDirection: "row",
    alignSelf: "flex-start"
  },
  date: {
    fontSize: SIZES.small,
    fontWeight: "600",
    color: COLORS.grey
  },
  btnContainer: {
    flexDirection: "row",
  },
  btn: {
    backgroundColor: COLORS.black,
    width: 50,
    height: 50,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  currentTask: {
    fontSize: SIZES.medium,
    fontWeight: "600"
  },
  task: {
    lineHeight: 36,
    fontSize: SIZES.xLarge,
    fontWeight: "600",
    textAlign: "left"
  },
  taskType: {
    fontSize: SIZES.medium,
    color: COLORS.error,
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 5,
    paddingVertical: 4,
    padding: 20,
    width: 80,
    lineHeight: 25
  }
})

export default CommCard
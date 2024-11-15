import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name="home" size={24} />,
        }}
      />
      <Tabs.Screen name="setting" options={{ headerShown: false, tabBarIcon: () => <MaterialIcons name="settings" size= {24} />}} />
    </Tabs>
  );
};

export default _layout;

import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useDrawerContext } from "@/context/DrawerContext";

const _layout = () => {
  const {drawerOpen} = useDrawerContext();

  return (
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: () => <MaterialIcons name="home" size={24} />,
            tabBarStyle: { display: drawerOpen ? "none" : "flex" }, // Hide tabs when drawer is open
          }}
        />
        <Tabs.Screen
        name="setting"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: () => <MaterialIcons name="settings" size={24} />,
            tabBarStyle: { display: drawerOpen ? "none" : "flex" }, // Hide tabs when drawer is open
          }}
        />
      </Tabs>
  );
};

export default _layout;

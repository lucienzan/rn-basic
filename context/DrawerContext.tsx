import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface DrawerType {
  drawerOpen: boolean,
  setDrawerOpen: Dispatch<SetStateAction<boolean>>,
  isDrawerToggle: () => void
}

const DrawerContext = createContext<DrawerType | undefined>(undefined);

export const DrawerProvider = ({ children }:{ children: ReactNode}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isDrawerToggle = () => setDrawerOpen(prev => !prev);

  return (
    <DrawerContext.Provider value={{ drawerOpen, setDrawerOpen ,isDrawerToggle }}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawerContext must be used within a DrawerProvider');
  }
  return context;
};
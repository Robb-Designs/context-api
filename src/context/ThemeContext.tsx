import { createContext, useState, ReactNode } from "react";

// Type definition for the theme context
// This defines the shape of the context value, which includes the current theme and a function to toggle it.
type ThemeContextType = {
  theme: "light" | "dark"; 
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

// Create the ThemeContext with an initial value of undefined.
//This allows us to provide a default value for the context, which can be used when a component takes the context without a provider.
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


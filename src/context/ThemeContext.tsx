import { createContext, useState } from "react";

// Type definition for the theme context
// This defines the shape of the context value, which includes the current theme and a function to toggle it.
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};
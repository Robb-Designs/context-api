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

// ThemeProvider component that will wrap the application and provide the theme context to its children.
// its purpose is to manage the theme state and provide a function to toggle between light and dark themes.
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

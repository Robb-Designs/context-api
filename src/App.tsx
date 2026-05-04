import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import './App.css'

function App() {
  // Access the theme context using the useContext hook. This allows me to get the current theme and the function to toggle it.
  // this variable will hold the value of the theme context, which includes the current theme and the toggle function. I can use this variable to apply styles or functionality based on the current theme.
  const context = useContext(ThemeContext);
  // Destructure the theme and toggleTheme from the context. 
  const {theme, toggleTheme} = context;

  // If the context is undefined, it means that the component is not wrapped in a ThemeProvider. In this case, we throw an error to inform the developer that they need to wrap their component tree with a ThemeProvider to use the theme context.
  if (!context) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  return (
    <>
   
    </>
  )
}

export default App

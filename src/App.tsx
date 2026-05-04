import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import './App.css'

function App() {
  // Access the theme context using the useContext hook. This allows me to get the current theme and the function to toggle it.
  const context = useContext(ThemeContext);

  return (
    <>
   
    </>
  )
}

export default App

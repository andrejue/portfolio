import { useState } from "react";
import Header from "./components/header/Header"
import { Main } from "./components/main/Main";
import "./styles/App.css";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    console.log(isDarkMode)
  };

  return (

    <div className={isDarkMode ? 'dark' : 'light-mode'}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Main />
    </div>

  )
}

export default App;

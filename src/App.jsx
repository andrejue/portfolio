import { useState } from "react";
import Header from "./components/header/Header";
import { Main } from "./components/main/Main";
import "./styles/App.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    console.log(isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : "light-mode"}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Main />
      <Analytics />
    </div>
  );
}

export default App;

import './App.css';
import React, {useState}from "react";
import Home from "./Home";
import Details from "./Details";
import Header from "./Header";
import { Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';


function App() {
  const[theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeProvider theme ={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    <button className="mode" onClick = {toggleTheme}>Light/Dark Mode</button>
    <div className="App">
      <Header />
      <Route exact path = "/">
      <Home />
      </Route>
      <Route exact path = "/:country">
      <Details />
      </Route>
    </div>
    </ThemeProvider>
  );
}
export default App;

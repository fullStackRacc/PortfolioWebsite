import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss'
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js"

const StyledApp = styled.div;

const App = () => {
  const [theme, setTheme] = useState('light')

  const themeToggler = _ => {
    theme === "light" ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <h1>Hello World</h1>
        <button onClick={() =>themeToggler()}>Change Theme</button>
      </StyledApp>

      {/* <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer /> */}
    </ThemeProvider>

  )
}

export default App
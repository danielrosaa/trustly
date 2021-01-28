import React from 'react'
import Header from './components/Header'
import MainContainer from "./components/MainContainer"
import { MainWrapper } from './style/mainStyle'

const App = () => {
  return (
    <MainWrapper>
      <Header />
      <MainContainer />
    </MainWrapper>
  );
}

export default App;

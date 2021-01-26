import React from 'react'
import Header from './components/Header'
import Container from './components/Container'
import { MainWrapper } from './style/mainStyle'

const App = () => {
  return (
    <MainWrapper>
      <Header />
      <Container />
    </MainWrapper>
  );
}

export default App;

import React from 'react'
import styled from 'styled-components'

const HeaderTag = styled.header`
  height: 87px;
  background-color: #F1F1F1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`

const Title = styled.div`
  font-weight: 500;
`
const Header = () => {
  return (
    <HeaderTag>
      <div>Button</div>
      <Title>Sneakers</Title>
      <div>Avatar</div>
    </HeaderTag>
  )
}

export default Header
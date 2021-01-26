import React, { useState, useEffect } from 'react'
import api from './../services/api'
import styled from 'styled-components'
import SneakerCard from './SneakerCard'

const SectionTag = styled.section`
	padding: 10%;
	display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10%;
  justify-content: center;
`


const Container = () => {
  const [sneakers, setSneakers] = useState(null)

  useEffect(() => {
    api.get('/sneakers').then(response => {
      setSneakers(response.data)
    })
  }, [])
  
  return (
    <SectionTag>
      {sneakers && sneakers.map((sneaker) => (
        <SneakerCard key={sneaker.id} sneaker={sneaker} />
      ))}
    </SectionTag>
  )
}

export default Container
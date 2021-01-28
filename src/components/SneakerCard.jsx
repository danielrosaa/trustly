import React from "react"
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Card = styled.div`
	width: 297px;
	height: 373px;
	box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.05);
	border-radius: 5px;
`
const ImgHeader = styled.div`
	height: 45%;
	background-size: cover;
	background-position: center;
`
const CardInfo = styled.div`
	height: 55%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
  padding: 10px;
  padding-top: 15px;
	box-sizing: border-box;
	position: relative;
`
const CardTitle = styled.div`
	font-weight: 400;
	font-size: 1.2rem;
`
const CardInputs = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  label {
    color: #8d8d8d;
    font-size: 12px;
    font-weight: 400px;
  }
`
const CardSelect = styled.select`
  color: #808080;
  border: 1px solid #e8e8e8;
  border-radius: 100px;
  width: 70px;
  height: 27px;
  padding: 0 5px;
  outline: none;
`
const CardPrice = styled.div`
  font-weight: 600;
  font-size: 21px;
`
const CardButton = styled.button`
  color: #fff;
  font-weight: 700;
  font-size: 14px;
	background: #6b8067;
  border-radius: 5px;
  border: 0;
  padding: 15px 40px;
  width: 100%;
  outline: none;
  transition: all 300ms;

  :hover {
    background: #5a7968;
  }
`

const SneakerCard = props => {
	return (
		<Card>
			<ImgHeader>
				<img
					src={props.sneaker.thumbnailURL}
					alt={"Imagem do tênis" + props.sneaker.description}
				/>
			</ImgHeader>
			<CardInfo>
				<CardTitle>{props.sneaker.description}</CardTitle>
        <CardInputs>
          <label>Size</label>
          <CardSelect>
            <option>39</option>
            <option defaultValue>41</option>
            <option>42</option>
          </CardSelect>
          <label>Quantity</label>
          <CardSelect>
            <option>39</option>
            <option defaultValue>41</option>
            <option>42</option>
          </CardSelect>
        </CardInputs>
				<CardPrice>$ {props.sneaker.price}</CardPrice>
        <Link to={`/product/${props.sneaker.id}`} style={{width: '100%'}}>
				  <CardButton>Add to cart</CardButton>
        </Link>
			</CardInfo>
		</Card>
	)
}

export default SneakerCard

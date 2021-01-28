import React from "react"
import styled from 'styled-components'

const Card = styled.div`
	background: #f7f7f7;
	padding: 24px 48px;
	border-radius: 8px;
`
const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`
const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 10px;
  `
const Subtitle = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  `
const Text = styled.div`
  font-size: 0.7rem;
  color: #a5a5a5;
  `
const Price = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  `
const Costs = styled.div`
  margin-top: 10px;
  display: grid;
  grid-column-gap: 10px;
  
  ${Subtitle} {
    grid-column: 1 / span 2;
    grid-row: 1;
  }
  ${Text} {
    grid-column: 1 / span 2;
    grid-row: 2
  }
  ${Price} {
    grid-column: 3;
    grid-row: 1 / span 2;
  }
  `
const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Method = styled.div`
	padding: 16px;
	background: #fff;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  color: #535353;
  font-size: 16px;
	&:not(:last-child) {
		margin-bottom: 10px;
	}

	&.selected {
    border: 1px solid #5dac50;
		&::before {
      content: 'SAVE $10';
      text-align: center;
      position: absolute;
      top: -8px;
      font-size: 0.5rem;
      border-radius: 3px;
      min-width: 50px;
			padding: 3px 8px;
			background: #fc0;
			color: #9e7d27;
		}
	}
`

const CTA = styled.button`
	color: #fff;
	font-weight: 700;
	font-size: 14px;
	background: #6b8067;
	border-radius: 5px;
	border: 0;
	padding: 10px 40px;
	min-width: 45%;
	outline: none;
  transition: all 300ms;

	:hover {
		background: #5a7968;
	}
`


const PaymentCardInfo = (props) => {
	return (
		<Card>
			<CardDetails>
				<div>
					<Title>Cart total</Title>
					<div style={{ marginLeft: "10px" }}>
						<Subtitle>{props.product.description}</Subtitle>
						<Text>1x Green Size 41</Text>
						<Text>Item #{props.product.id}</Text>
					</div>
				</div>
				<div>
					<Title>Delivery details</Title>
					<Text>John Smith</Text>
					<Text>Phone no: 43274398743</Text>
					<Text>Address: Redwood City, 2000</Text>
					<Costs>
						<Subtitle>Total cost</Subtitle>
						<Text>Delivery included</Text>
						<Price>${props.product.price}</Price>
					</Costs>
				</div>
			</CardDetails>
			<PaymentMethods>
				<Title>Select your payment method</Title>
				<Method className={"selected"}>
					Online Banking
				</Method>
				<Method>
					Card payment
				</Method>
				<Method>
					Apple Pay
				</Method>
			</PaymentMethods>
      <div style={{marginTop: '10px', textAlign: 'right'}}>
        <CTA>Continue</CTA>
      </div>
		</Card>
	)
}

export default PaymentCardInfo
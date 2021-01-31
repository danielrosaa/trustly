import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUniversity } from "@fortawesome/free-solid-svg-icons"

const Card = styled.div`
	background: #f7f7f7;
	padding: 64px 48px;
	border-radius: 8px;
  min-height: 500px;
`
const CardDetails = styled.div`
	display: grid;
  grid-template-columns: auto auto;
	margin-bottom: 15%;
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
const Review = styled.div`
	display: grid;
  grid-template-columns: auto auto;
  align-items: center;
`
const Costs = styled.div`
	margin-top: 10px;
	display: grid;

	${Subtitle} {
		grid-column: 1 / span 2;
		grid-row: 1;
	}
	${Text} {
		grid-column: 1 / span 2;
		grid-row: 2;
	}
	${Price} {
		grid-column: 3;
		grid-row: 1 / span 2;
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
const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
`

const PaymentCardInfo = props => {
	return (
		<Card>
			<CardDetails>
				<div>
					<Title>Order summary</Title>
					<div>
						<Subtitle>{props.product.description}</Subtitle>
						<Text>1x Green Size 41</Text>
						<Text>Item #{props.product.id}</Text>
					</div>
				</div>
				<div>
					<Title>Payment Method</Title>
					<PaymentMethod>
						<FontAwesomeIcon
							icon={faUniversity}
							color={"#6B8067"}
							className="fa-3x"
						/>
						<Subtitle style={{ marginLeft: "10px" }}>Online Banking</Subtitle>
					</PaymentMethod>
				</div>
			</CardDetails>
			<Review>
				<Costs>
					<Subtitle>Total cost</Subtitle>
					<Text>Delivery included</Text>
					<Price>${props.product.price}</Price>
				</Costs>
        <CTA>Place order</CTA>
			</Review>
		</Card>
	)
}

export default PaymentCardInfo

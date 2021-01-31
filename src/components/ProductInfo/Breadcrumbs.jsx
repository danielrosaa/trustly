import React from "react"
import styled from "styled-components"

const Line = styled.div`
	width: 70%;
	height: 1px;
	background: lightgray;
	margin: 0 auto;
	margin-bottom: 10%;
`
const Steps = styled.div`
	display: flex;
	justify-content: space-between;
`
const Status = styled.div`
	font-size: 16px;
	color: #000;
	position: relative;
	display: flex;
	justify-content: center;
	margin-top: 18px;

	&.disabled {
		color: lightgrey;

		&::before {
			background: lightgrey;
		}
	}

	&:first-child {
		transform: translateX(-50%);
	}
	&:last-child {
		transform: translateX(50%);
	}

	&::before {
		content: "";
		position: absolute;
		top: -22px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #61cb46;
	}
`
const Breadcrumbs = (props) => {
	return (
		<Line>
			<Steps>
				<Status>Cart</Status>
				<Status>Payment options</Status>
				<Status className={props.status || 'disabled'}>Receipt</Status>
			</Steps>
		</Line>
	)
}

export default Breadcrumbs

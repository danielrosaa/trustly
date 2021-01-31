import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { InnerWrapper } from "./../style/mainStyle"
import { Product } from "./../services/Sneakers"
import Breadcrumbs from "../components/ProductInfo/Breadcrumbs"
import PaymentCardInfo from "../components/ProductInfo/PaymentCardInfo"
import Receipt from "../components/Receipt/Receipt"

const PaymentInfo = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1.5fr 1.8fr;
	grid-gap: 3%;
`
const ProductImage = styled.div`
	background-image: url("${props => props.image}");
	background-size: cover;
	background-position: center;
	border-radius: 8px;
`

const ProductInfo = ({ match }) => {
  const [productInfo, setProducInfo] = useState({})
  const [renderReceipt, setRenderReceipt] = useState(false)

	useEffect(() => {
		Product(match.params.id).then(info => setProducInfo(info))
		window.PayWithMyBank.addPanelListener(function (command, event) {
			if (command === "event" && event.type === "new_location") {
				if (event.data.indexOf("#success") === 0) {
          setRenderReceipt(true)
          console.log(event.data)
				} else {
          setRenderReceipt(false)
          console.log(event.data)
				}
				return false
			}
    })
  }, [match.params.id])

	return (
		<InnerWrapper>
			<Breadcrumbs status={renderReceipt} />
			<PaymentInfo>
				<ProductImage image={productInfo.maxresURL}></ProductImage>
				<div>
					{!renderReceipt ? (
						<PaymentCardInfo product={productInfo} />
					) : (
						<Receipt product={productInfo} />
					)}
				</div>
			</PaymentInfo>
		</InnerWrapper>
	)
}

export default ProductInfo

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { InnerWrapper } from './../style/mainStyle'
import { Product } from './../services/Sneakers'
import Breadcrumbs from '../components/ProductInfo/Breadcrumbs'
import PaymentCardInfo from "../components/ProductInfo/PaymentCardInfo"

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

  useEffect(() => {
    Product(match.params.id).then(info => setProducInfo(info))
  })

  return (
		<InnerWrapper>
			<Breadcrumbs />
			<PaymentInfo>
				<ProductImage image={productInfo.maxresURL}></ProductImage>
				<div>
          <PaymentCardInfo product={productInfo} />
        </div>
			</PaymentInfo>
		</InnerWrapper>
	)
}

export default ProductInfo
import React, { useState, useEffect } from "react"
import api from "../services/api"
import styled from "styled-components"
import SneakerCard from "./SneakerCard"

const SectionTag = styled.section`
	display: grid;
	grid-template-columns: auto auto auto;
  grid-gap: 10%;
  justify-content: center;
  min-width: 100%;
`

const SneakersList = (props) => {
  const [sneakers, setSneakers] = useState(null)

	useEffect(() => {
		api.get("/sneakers").then(response => {
			setSneakers(response.data)
		})
  }, [])

  function renderList() {
    return sneakers
			.filter(
				filtered =>
					filtered.description.match(new RegExp(props.search, "gi")) ||
					props.search === ""
			)
			.map(sneaker => <SneakerCard key={sneaker.id} sneaker={sneaker} />)
  }

	return (
		<span>
			<SectionTag>
				{sneakers && renderList() }
			</SectionTag>
		</span>
	)
}

export default SneakersList

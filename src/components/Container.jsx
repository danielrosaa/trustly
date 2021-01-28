import React, { useState, useEffect } from "react"
import api from "./../services/api"
import styled from "styled-components"
import SneakerCard from "./SneakerCard"
import SearchBar from "./SearchBar"

const SectionTag = styled.section`
	display: grid;
	grid-template-columns: auto auto auto;
  grid-gap: 10%;
	justify-content: center;
`

const Container = () => {
  const [sneakers, setSneakers] = useState(null)
  const [searchText, setSearchText] = useState('')

	useEffect(() => {
		api.get("/sneakers").then(response => {
			setSneakers(response.data)
		})
  }, [])

	return (
		<span>
			<SectionTag>
				<SearchBar searchInput={setSearchText} />
				{sneakers &&
					sneakers
						.filter(
							filtered =>
								filtered.description.match(new RegExp(searchText, 'gi')) || searchText === ""
						)
						.map((sneaker) => <SneakerCard key={sneaker.id} sneaker={sneaker} />)}
				{/* <SneakerCard key={sneaker.id} sneaker={sneaker} /> */}
			</SectionTag>
		</span>
	)
}

export default Container

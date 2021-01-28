import React, { useState } from "react"
import styled from "styled-components"
import SearchBar from "./SearchBar"
import SneakersList from "./SneakersList"

const Wrapper = styled.div`
  padding: 10%;
`

const MainContainer = () => {
  const [searchText, setSearchText] = useState("")

  return (
		<Wrapper>
			<SearchBar searchInput={setSearchText} />
      <SneakersList search={searchText} />
		</Wrapper>
	)
}

export default MainContainer

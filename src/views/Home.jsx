import React, { useState } from "react"
import { InnerWrapper } from '../style/mainStyle'
import SearchBar from "../components/SearchBar"
import SneakersList from "../components/SneakersList"

const Home = () => {
  const [searchText, setSearchText] = useState("")

  return (
		<InnerWrapper>
			<SearchBar searchInput={setSearchText} />
      <SneakersList search={searchText} />
		</InnerWrapper>
	)
}

export default Home

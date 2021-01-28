import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const InputSearch = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  margin-top: 10%;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
`

const InputElement = styled.input`
  background: transparent;
  border: 0;
  width: 100%;
  height: auto;
  text-align: center;
  position: relative;
  outline: none;
  font-size: 1.5rem;
  color: lightgray;

  ::placeholder {
    color: lightgray;
    font-size: 1.5rem;
  }
`

const iconStyle = {
  position: `absolute`
}

const SearchBar = (props) => {
  return (
		<InputSearch>
			<FontAwesomeIcon
				style={iconStyle}
				icon={faSearch}
				color={`lightgrey`}
				size="lg"
			/>
			<InputElement
				placeholder="Search for your sneaker"
				onChange={text => props.searchInput(text.target.value)}
			/>
		</InputSearch>
	)
}

export default SearchBar
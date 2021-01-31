import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'
import avatar from './../assets/avatar.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const HeaderTag = styled.header`
  height: 87px;
  background-color: #F1F1F1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`

const Title = styled.div`
  font-weight: 500;
`
const Avatar = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-image: url("${avatar}");
  background-size: cover;
  background-position: center;
  float: right;
`
const GoBackButton = styled.button`
  border-radius: 100px;
  border: 0;
  background: rgba(0, 0, 0, 0.05);
  padding: 5px 15px;
  outline: 0;
  transition: all 300ms;

  &:hover {
    background: rgba(0, 0, 0, 0.09)
  }
`

const Header = ({ match }) => {
  // let history = useHistory()
  let location = useLocation()

  return (
		<HeaderTag>
      <div style={{flex: 1, textAlign: 'left'}}>
        {location.pathname !== "/" ? (
          <Link to="/">
            <GoBackButton>
              <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faArrowLeft} />
              <span>Back</span>
            </GoBackButton>
          </Link>)
          : <div></div>
        }
      </div>
      <div style={{flex: 2, textAlign: 'center'}}>
			  <Title>Sneakers</Title>
      </div>
      <div style={{flex: 1}}>
			  <Avatar />
      </div>
		</HeaderTag>
	)
}

export default Header
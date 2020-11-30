import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Team = props => {
  return (
    <TeamStyle>
      <TeamName>{props.data.name}</TeamName>
      <Logo src={props.data.thumbnail}></Logo>
      <Stadium>{props.data.Stadium}</Stadium>
    </TeamStyle>
  )
}

Team.propTypes = {
  data: PropTypes.any
}

const TeamStyle = styled.div`
  background: white;
  text-decoration: none;
  color: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  border-radius: 5%;

  position: relative;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 230px;
  margin: 20px;

  @media (max-width: 768px) {
    height: 160px;
  }
`

const TeamName = styled.h1`
  font-size: 20px;
  color: #333;
  text-align: center;
`

const Logo = styled.img`
  margin: 50px;
  width: 128px;
  height: 128px;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;

  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
  }
`

const Stadium = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 5px 0;
  text-align: center;
`

export default Team

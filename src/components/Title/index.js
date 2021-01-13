import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import { RowFixed } from '../Row'
import Logo from '../../assets/logo.png'

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`

export default function Title() {
  const history = useHistory()

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="center">
        <RowFixed>
          <div id="link" onClick={() => history.push('/')}>
            <img width={'150px'} src={Logo} alt="logo" />
          </div>
        </RowFixed>
      </Flex>
    </TitleWrapper>
  )
}

import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import { RowFixed } from '../Row'
import LogoDark from '../../assets/logo.png'
import LogoLight from '../../assets/logo_light.png';
import {useDarkModeManager} from "../../contexts/LocalStorage";

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`

const Title = () => {
  const history = useHistory()

  //const [darkMode] = useDarkModeManager();
  //const Logo = darkMode ? LogoDark : LogoLight;
  const Logo = LogoDark;

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
};

export default Title;
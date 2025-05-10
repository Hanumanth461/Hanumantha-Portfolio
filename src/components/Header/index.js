"use client"

import styled from 'styled-components'

const HeaderWrapper = styled.div`
    padding:1.5rem .2rem;
    border-bottom: 1px solid var(--primary-glow);
    background-color: var(--primary-glow);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`
const Logo = styled.div`
font-size: 1.2rem;
background-color:  rgba(38, 38, 123, 0.25);
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
align-items:center;
justify-content: center;
`

const Header = () => {
  return (
    <HeaderWrapper>
        <Logo>
          HT
        </Logo>
    </HeaderWrapper>
  )
}

export default Header
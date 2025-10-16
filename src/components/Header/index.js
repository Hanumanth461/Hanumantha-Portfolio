"use client"

import { HeaderConfig, poppins } from '@/constant'
import { Box, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import MobileHeader from './MobileHeader'
import { DarkMode, LightMode } from '@mui/icons-material'

const HeaderWrapper = styled.div`
  position: fixed;
  max-width: 1440px;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
              rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin: 0 auto;
`;

const Logo = styled.div`
font-size: 1.5rem;
background-color: gray;
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
color: black;
font-style: italic;
margin-right: 10px;
`

const ListItem = styled(Link)`
  margin: 0 5px;
  padding: 5px;
  font-weight: 400;
  font-size: .9rem;
`
const ULBlock = styled.div`
width: calc(100% - 110px);
margin-left: auto;
text-align: right;
`

const LogoWrapper = styled(Box)`
width: 100px;
display: flex;
align-items: center;
`

const Header = ({mode,setMode}) => {
  const [showContent, setShowContent] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  const toggleTheme = () => {
 const newMode = mode === 'light' ? 'dark' : 'light';
  setMode(newMode);
  localStorage.setItem("theme", newMode);
  };


  return (
    <>
      {showContent &&
        <HeaderWrapper>
         <LogoWrapper >
           <Logo className={`${poppins.className}`}>
              HT
            {/* <Image src="/assets/HTLogo.png" alt='logo' width={50} height={50} style={{objectFit:"cover"}}/> */}
          </Logo>
          
          <span onClick={()=>toggleTheme()}>{mode === "light" ? <DarkMode/> : <LightMode/>}</span>
         </LogoWrapper>
          {!isMobile ?
                   <ULBlock className={poppins.className}>
                   {HeaderConfig?.map((item,index) => {
                     return (
                       <ListItem key={index} href={`#${item.name}`}>{item.name}</ListItem>
                     )
                   })}
                 </ULBlock>
                 :<MobileHeader/> 
        }
        </HeaderWrapper>
      }
    </>
  )
}

export default Header
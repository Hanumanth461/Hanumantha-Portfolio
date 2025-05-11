"use client"

import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import Experiance from '@/components/Experiance'
import Projects from '@/components/Projects'
import SkillsSets from '@/components/SkillsSets'
import { Backdrop, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
max-width: 1000px;
margin: 0 auto;
`

const HomeWrapper = () => {
    const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
    return (
        <HomeContainer style={{marginTop:"6rem"}}>
            {showContent ?
          <>
            <Banner />
            <SkillsSets />
            <Experiance />
            <Projects/>
            <Contact/>
          </>
            : 
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
                <div style={{width:"90px",height:"90px", margin:"0 auto"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="#1976D2"></stop><stop offset=".3" stop-color="#1976D2" stop-opacity=".9"></stop><stop offset=".6" stop-color="#1976D2" stop-opacity=".6"></stop><stop offset=".8" stop-color="#1976D2" stop-opacity=".3"></stop><stop offset="1" stop-color="#1976D2" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a12)" stroke-width="15" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#1976D2" stroke-width="15" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>

                </div>
            </div>
            }
        </HomeContainer>
    )
}

export default HomeWrapper
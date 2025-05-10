"use client"

import Banner from '@/components/Banner'
import Experiance from '@/components/Experiance'
import Projects from '@/components/Projects'
import SkillsSets from '@/components/SkillsSets'
import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
max-width: 1000px;
margin: 0 auto;
`

const HomeWrapper = () => {
    return (
        <HomeContainer>
            <Banner />
            <SkillsSets />
            <Experiance />
            <Projects/>
        </HomeContainer>
    )
}

export default HomeWrapper
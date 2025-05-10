"use client"

import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const BannerWrapper = styled.div`
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    max-width: 1000px;
    margin: 0 auto;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
    flex-wrap: wrap;
`
const ProfileImage = styled(Image)`
border-radius: 50%;
`
const ProfileImageBlock = styled.div`
  padding: 10px;
  background-color: purple;
  border-radius: 50%;
  overflow: hidden;
  width: 250px;
height: 250px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`
const ProfileInfoBlock = styled.div`
    width: calc(100% - 270px);
`
const ProfileDesignation = styled.div`  
font-size: 2rem;
font-weight: 600;
`
const ProfileName = styled.div`
    font-size: 2.5rem;
    margin-bottom: 1rem;

`
const ProfileSummary = styled.div`
line-height: 1.5;

`

const Banner = () => {
  return (
    <BannerWrapper>
      <ProfileImageBlock>
        <ProfileImage src="/test.jpg" alt='profile-pic' width={240} height={240} />
      </ProfileImageBlock>
      <ProfileInfoBlock>
        <ProfileName>
          <div>Hanumantha T</div>
          <ProfileDesignation>Front End Developer</ProfileDesignation>
        </ProfileName>
        <ProfileSummary>
          I'm a Creative and detail-oriented front-end developer with a passion for building responsive,
          user-friendly web interfaces. Proficient in modern HTML, CSS, and JavaScript frameworks like ReactJS, NextJS and Redux, with a strong understanding of UI/UX principles and cross-browser compatibility. Experienced in collaborating with designers and back-end developers to bring digital products to life.
          Adept at turning complex problems into elegant, accessible solutions.
        </ProfileSummary>
      </ProfileInfoBlock>

    </BannerWrapper>
  )
}

export default Banner
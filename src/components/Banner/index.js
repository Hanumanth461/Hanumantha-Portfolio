"use client"

import { poppins } from '@/constant'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const BannerWrapper = styled.div`
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    max-width: 1000px;
    margin: 0 auto;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width:768px){
      display: block;
    }
`
const ProfileImage = styled(Image)`
border-radius: 50%;
object-fit: cover;
@media screen and (max-width:768px){
      width: 150px;
      height: 150px;
    }
`
const ProfileImageBlock = styled.div`
  padding: 10px;
  background-color: #2A2E38;
  border-radius: 50%;
  overflow: hidden;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
@media screen and (max-width:768px){
      margin: 0 auto;
      width: 170px;
  height: 170px;
    }
`
const ProfileInfoBlock = styled.div`
    width: calc(100% - 270px);
    @media screen and (max-width:768px){
      width:100%;
      margin-top: 1rem;
      text-align: center;
    }
`
const ProfileDesignation = styled.div`  
font-size: 1.5rem;
font-weight: 600;
font-family: 'Courier New', Courier, monospace;
@media screen and (max-width:768px){
  font-size: 1.2rem;

    }
`
const ProfileName = styled.div`
    font-size: 2rem;
    margin-bottom: 1rem;
    font-family: 'Courier New', Courier, monospace;
    @media screen and (max-width:768px){
     font-size: 1.2rem;
    }

`
const ProfileSummary = styled.div`
line-height: 1.5;
font-size: .9rem;

`

const Banner = () => {
  return (
    <BannerWrapper className={poppins.className} id='About'>
      <ProfileImageBlock>
        <ProfileImage src="/assets/Hanumanth_img.jpg" alt='profile-pic' width={240} height={240} />
      </ProfileImageBlock>
      <ProfileInfoBlock>
        <ProfileName>
          <div>Hanumantha T</div>
          <ProfileDesignation>Front End Developer</ProfileDesignation>
        </ProfileName>
        <ProfileSummary>
          I am a Creative front-end developer with a passion for building responsive,
          user-friendly web interfaces. Proficient in modern HTML, CSS, and JavaScript frameworks like ReactJS, NextJS and Redux, with a strong understanding of UI/UX principles and cross-browser compatibility. Experienced in collaborating with designers and back-end developers to bring digital products to life.
          Adept at turning complex problems into elegant, accessible solutions.
        </ProfileSummary>
        <Button style={{ background: "#2A2E38", textTransform: "capitalize", marginTop: "1rem" }}>
          <Link
            target='_blank'
            href="/Hanumantha_SE.pdf"
            download="/Hanumantha_SE.pdf">
            Download CV
          </Link>
        </Button>
      </ProfileInfoBlock>

    </BannerWrapper>
  )
}

export default Banner
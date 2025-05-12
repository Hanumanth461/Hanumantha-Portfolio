"use client"

import { poppins, SkillsImages, ToolsImages } from '@/constant';
import Image from 'next/image';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const revscroll = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

const Slider = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 1rem auto;
`;

const SlideTrack = styled.div`
  display: flex;
  width: calc(150px * ${SkillsImages.length * 2}); /* Double the width for duplicated images */
  animation: ${scroll} 30s linear infinite;
`;

const ReverseSlideTrack = styled.div`
  display: flex;
  width: calc(150px * ${ToolsImages.length * 2}); /* Double the width for duplicated images */
  animation: ${revscroll} 25s linear infinite;
`;

// const Slide = styled.div`
//   width: 90px;
//   height: auto;
//   margin-right: 10px;
//   background: black;
// `;

const Slide = styled.div`
  width: 150px;
  height: auto;
  margin-right: 10px;
  /* background: black; */
  text-align: center;
  font-size: .9rem;
  padding:1rem 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: .5rem 0rem .5rem 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica;
  font-weight: 500;
`;
 
const Heading = styled.div`
font-size: 1.5rem;
font-weight: 600;
font-family: 'Courier New', Courier, monospace;
`

const SkillWrapper = styled.div`
max-width: 1000px;
margin: 2rem auto;
`

const SkillsSets = () => {
    // Duplicate images for seamless scroll
    const imagesToRender = [...SkillsImages, ...SkillsImages];

    const toolsImagesToRender = [...ToolsImages, ...ToolsImages];

    const SliderImages = (imagesRender) => {
        return (
            <>
                {imagesRender?.map((item, index) => (
                   <Slide className={poppins.className} key={index} style={{background:"transparent"}}>
                    {item.label}
                     {/* <Image key={index} src={item.image} width={90} height={90} alt={`skill-${index}`} /> */}
                   </Slide>
                ))}
            </>
        )
    }

    return (
        <SkillWrapper id='Skills'>
            <Heading>Skills</Heading>
            <Heading style={{fontSize:".9rem",marginTop:"10px"}}>Tech Stack</Heading>
            <Slider>
                <SlideTrack>
                    {SliderImages(imagesToRender)}
                    
                </SlideTrack>
            </Slider>
            <Heading style={{fontSize:".9rem",marginTop:"10px"}}>Tools</Heading>
            <Slider>
                <ReverseSlideTrack>
                    {SliderImages(toolsImagesToRender)}
                </ReverseSlideTrack>
            </Slider>
        </SkillWrapper>
    );
};

export default SkillsSets;

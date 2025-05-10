"use client"

import { SkillsImages } from '@/constant';
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
  width: calc(90px * ${SkillsImages.length * 2}); /* Double the width for duplicated images */
  animation: ${scroll} 15s linear infinite;
`;

const ReverseSlideTrack = styled.div`
  display: flex;
  width: calc(90px * ${SkillsImages.length * 2}); /* Double the width for duplicated images */
  animation: ${revscroll} 15s linear infinite;
`;

const Slide = styled(Image)`
  width: 90px;
  height: auto;
  margin-right: 10px;
  background: black;
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

    const SliderImages = () => {
        return (
            <>
                {imagesToRender.map((item, index) => (
                    <Slide key={index} src={item.image} width={90} height={90} alt={`skill-${index}`} />
                ))}
            </>
        )
    }

    return (
        <SkillWrapper>
            <Heading>Skill's</Heading>
            <Slider>
                <SlideTrack>
                    {SliderImages()}
                    
                </SlideTrack>
            </Slider>
            <Slider>
                <ReverseSlideTrack>
                    {SliderImages()}
                </ReverseSlideTrack>
            </Slider>
        </SkillWrapper>
    );
};

export default SkillsSets;

"use client"

import React, { useEffect, useState } from 'react'
import { Box, keyframes, styled } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';


const bubble = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10%);
  }
`;

const ArrowUpButton = styled(Box)`
position: fixed;
bottom: 1rem;
right: 1rem;
width: 2rem;
height: 2rem;
cursor: pointer;
 animation: ${bubble} 2s ease-in-out infinite;
  z-index: 999;
`

const ScrollToTop = () => {

    const [showScrollTopIcon, setShowScrollTopIcon] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 400) { // Show button after 400px scroll
            setShowScrollTopIcon(true);
        } else {
            setShowScrollTopIcon(false);
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        {showScrollTopIcon &&
            <ArrowUpButton onClick={handleScrollToTop}>
                <ArrowUpward />
            </ArrowUpButton>
}
        </>
    )
}

export default ScrollToTop
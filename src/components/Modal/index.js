"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import { Modal,Typography } from '@mui/material';
import Link from 'next/link';
import styled from 'styled-components';
import { poppins } from '@/constant';


const BoxBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  /* background-color: #212224; */
  border:0;
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.background.paper} !important;
  color:  ${({ theme }) => theme.palette.primary.main} !important;;
  @media screen and (max-width:600px) {
    width: 320px;
  }

`

const MyRoleBlock = styled.div`
font-size: .9rem;
margin: .5rem 0;
line-height: 1.5;
`


export default function ModalV1(props) {
    const {handleClose,open,projectDetails} = props

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <BoxBlock className={poppins.className}>
        <span style={{display:"flex",justifyContent:"right",cursor:"pointer"}} onClick={handleClose}>X</span>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            {projectDetails.heading}
          </Typography>
          <MyRoleBlock>
           {projectDetails.myRole}
          </MyRoleBlock>
          {projectDetails.link &&
          <Link target='_blank' style={{color:"blue",textDecoration:"underline",marginTop:"10px"}} href={projectDetails?.link}>{projectDetails?.link}</Link>  }
                 
        </BoxBlock>
      </Modal>
    </div>
  );
}

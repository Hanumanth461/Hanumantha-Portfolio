"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import { Modal,Typography } from '@mui/material';
import Link from 'next/link';
import styled from 'styled-components';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'black',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const MyRoleBlock = styled.div`
font-family: 'Courier New', Courier, monospace;
font-size: .9rem;
margin: .5rem 0;
line-height: 1.2;
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

        <Box sx={style}>
        <span style={{display:"flex",justifyContent:"right",cursor:"pointer"}} onClick={handleClose}>X</span>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            {projectDetails.heading}
          </Typography>
          <MyRoleBlock>
           {projectDetails.myRole}
          </MyRoleBlock>
          {projectDetails.link &&
          <Link target='_blank' style={{color:"blue",textDecoration:"underline",marginTop:"10px"}} href={projectDetails?.link}>{projectDetails?.link}</Link>  }
                 
        </Box>
      </Modal>
    </div>
  );
}

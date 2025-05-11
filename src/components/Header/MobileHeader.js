"use client"

import { HeaderConfig } from '@/constant'
import { Menu } from '@mui/icons-material'
import { Button, Drawer } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const ListItem = styled(Link)`
  margin: 0 5px;
  padding: 5px;
  font-weight: 400;
  font-size: .8rem;
`
const ULBlock = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;
/* position: fixed; */
/* right: 0; */
width: 150px;
background-color: #212224;
text-align: left;
padding-left: 1rem;
height: 100vh;
padding-top: 3rem;
color: white;
`

const MobileHeader = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    return (
        <div>
            <Button style={{marginRight:"-1rem"}} onClick={toggleDrawer(true)}><Menu/></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <ULBlock>
                    {HeaderConfig?.map((item) => {
                        return (
                            <ListItem onClick={toggleDrawer(false)} href={`#${item.name}`}>{item.name}</ListItem>
                        )
                    })}
                </ULBlock>
            </Drawer>

        </div>
    )
}

export default MobileHeader
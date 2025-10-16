"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import ModalV1 from '../Modal'
import { CMSProjectData, poppins, ProjectData } from '@/constant'
import { useRouter } from 'next/navigation'
import Link from 'next/link'



const ProjectsTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Courier New', Courier, monospace;
  margin: 1rem 0;
  @media screen and (max-width:768px) {
    font-size: 1rem;
}
`

const ProjectHeading = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #6bc9ff;
  text-decoration: underline;
  margin-top: .2rem;
  @media screen and (max-width:768px) {
    font-size: 1rem;
}
`
const ProjectDescription = styled.div`
  font-size: .9rem;
  @media screen and (max-width:768px) {
    font-size: .9rem;
}
`

const Card = styled.div`
padding: 10px;
border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.background.primary} !important;
  color:  ${({ theme }) => theme.palette.primary.main} !important;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const ProjectGrid = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 1.5rem;
@media screen and (max-width:768px){
  grid-template-columns: repeat(2,1fr);
}
@media screen and (max-width:480px){
  grid-template-columns: repeat(1,1fr);
}
`
const Images = styled(Image)`
width: 100%;
height: 150px;
object-fit: cover;
align-items: stretch;
border-radius: 20px;
`

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [projectDetails, setProjectDetails] = useState("")
  const router = useRouter()

  const handleOpen = (item) => {
    setOpen(true)
    setProjectDetails(item)
  };
  const handleClose = () => setOpen(false);

  const handleRedirect = (item) => {
    router.push(item.link)
  }

  return (
    <div id="Projects">
      <ModalV1 projectDetails={projectDetails} open={open} handleClose={handleClose} />

      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsTitle style={{ fontSize: "1rem" }}>ReactJS and NextJS Projects</ProjectsTitle>
      <ProjectGrid className={poppins.className}>
        {ProjectData?.map((item,index) => {
          return (
            <Card key={index} >
              <Images style={{ cursor: "pointer" }} onClick={() => handleRedirect(item)} src={item.image} width={100} height={100} />
              <ProjectHeading>
                {item.heading}
              </ProjectHeading>
              <ProjectDescription>
                {item.description}<span onClick={() => handleOpen(item)} style={{ color: "#6bc9ff", cursor: "pointer" }}>readmore</span>
              </ProjectDescription>
            </Card>
          )
        })}

      </ProjectGrid>

      <ProjectsTitle style={{ marginTop: "3rem", fontSize: "1rem" }}>Hubspot CMS Projects</ProjectsTitle>
      <ProjectGrid  className={poppins.className}>
        {CMSProjectData?.map((item,idx) => {
          return (
            <Card key={idx} style={{ cursor: "pointer" }}>
              <Link target='_blank' href={item.link}>
                <Images src={item.image} width={100} height={100} />
           
              <div>
                <ProjectHeading>
                  {item.heading}
                </ProjectHeading>
                <ProjectDescription>
                  {item.description}
                </ProjectDescription>
              </div>
              </Link>
            </Card>
          )
        })}

      </ProjectGrid>
    </div>
  )
}

export default Projects
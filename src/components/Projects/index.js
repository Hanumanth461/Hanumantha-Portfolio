"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import ModalV1 from '../Modal'
import { CMSProjectData, ProjectData } from '@/constant'
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
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 10px;
  color: purple;
  text-decoration: underline;
  margin-top: .2rem;
  @media screen and (max-width:768px) {
    font-size: .9rem;
}
`
const ProjectDescription = styled.div`
  font-size: .9rem;
  font-family: 'Courier New', Courier, monospace;
  @media screen and (max-width:768px) {
    font-size: .85rem;
}
`

const Card = styled.div`
padding: 10px;
border-radius: 20px;
background-color: #2A2E38;
color: white;
cursor: pointer;

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

  const handleOpen = (item) => {
    setOpen(true)
    setProjectDetails(item)
  };
  const handleClose = () => setOpen(false);


  return (
    <div id="Projects">
      <ModalV1 projectDetails={projectDetails} open={open} handleClose={handleClose} />

      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsTitle style={{fontSize:"1rem"}}>ReactJS and NextJS Projects</ProjectsTitle>
      <ProjectGrid>
        {ProjectData?.map((item) => {
          return (
            <Card onClick={() => handleOpen(item)}>
              <Images src={item.image} width={100} height={100} />
              <ProjectHeading>
                {item.heading}
              </ProjectHeading>
              <ProjectDescription>
                {item.description}
              </ProjectDescription>
            </Card>
          )
        })}

      </ProjectGrid>

      <ProjectsTitle style={{ marginTop: "3rem",fontSize:"1rem" }}>Hubspot CMS Projects</ProjectsTitle>
      <ProjectGrid>
        {CMSProjectData?.map((item) => {
          return (
            <Card style={{cursor:"auto"}}>
              <Images src={item.image} width={100} height={100} />
              <div>
              <Link target='_blank' href={item.link}>
                <ProjectHeading>
                  {item.heading}
                </ProjectHeading>
              </Link>
              <ProjectDescription>
                {item.description}
              </ProjectDescription>
              </div>
            </Card>
          )
        })}

      </ProjectGrid>
    </div>
  )
}

export default Projects
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
`

const ProjectHeading = styled.div`
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 10px;
  color: purple;
  text-decoration: underline;
  margin-top: .2rem;
`
const ProjectDescription = styled.div`
  font-size: .9rem;
  font-family: 'Courier New', Courier, monospace;
`

const Card = styled.div`
padding: 10px;
border-radius: 20px;
background-color: #fff;
color: black;
cursor: pointer;

`
const ProjectGrid = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 1.5rem;
`
const Images = styled(Image)`
width: 100%;
height: 100px;
object-fit: cover;
align-items: stretch;
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
    <>
      <ModalV1 projectDetails={projectDetails} open={open} handleClose={handleClose} />

      <ProjectsTitle>ReactJS and NextJS Projects</ProjectsTitle>
      <ProjectGrid>
        {ProjectData?.map((item) => {
          return (
            <Card onClick={() => handleOpen(item)}>
              <Images src="/assets/html.png" width={100} height={100} />
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

      <ProjectsTitle style={{ marginTop: "3rem" }}>Hubspot CMS Projects</ProjectsTitle>
      <ProjectGrid>
        {CMSProjectData?.map((item) => {
          return (
            <Card style={{cursor:"auto"}}>
              <Images src="/assets/html.png" width={100} height={100} />
              <Link target='_blank' href={item.link}>
                <ProjectHeading>
                  {item.heading}
                </ProjectHeading>
              </Link>
              <ProjectDescription>
                {item.description}
              </ProjectDescription>
            </Card>
          )
        })}

      </ProjectGrid>
    </>
  )
}

export default Projects
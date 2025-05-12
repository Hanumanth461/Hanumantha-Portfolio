import { poppins } from '@/constant'
import React from 'react'
import styled from 'styled-components'


const ProjectHeading = styled.div`
font-size: 1.5rem;
font-weight: 600;
margin:2rem 0  1rem;
font-family: 'Courier New', Courier, monospace;
@media screen and (max-width:768px) {
    font-size: 1.2rem;
}
`

const CompanyNameBlock = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    @media screen and (max-width:768px) {
    font-size: 1rem;
}
`
const ListBlock = styled.ul`
font-size: .9rem;
margin: 1rem 0;
padding-left: 1.2rem;
line-height: 1.3;
li{
    margin: 5px 0;
}
@media screen and (max-width:768px) {
    font-size: .9rem;
}
`
const ListHeading = styled.div`
font-size: 1rem;
font-family: 'Courier New', Courier, monospace;
margin: 1rem 0;
font-weight: 600;
`
const ExperianceBlock = styled.div`
display: grid;
grid-template-columns: repeat(1,1fr);
gap: 1rem;
@media screen and (max-width:768px) {
    grid-template-columns: repeat(1,1fr);
}
`

const Experiance = () => {
    return (
        <div id='Experience'>
            <ProjectHeading>Work experience</ProjectHeading>
            <ExperianceBlock className={poppins.className}>
                <div>
                    <CompanyNameBlock className={poppins.className}>
                        ThinkJS Pvt Ltd, Bengaluru -                         <span>Software Engineer</span>
                        <div> Aug 2023 - May 2025</div>
                    </CompanyNameBlock>
                    <ListHeading>
                        Responsibilities
                    </ListHeading>
                    <ListBlock>
                        <li>Develop and maintain user interfaces using React and Next.js.</li>
                        <li>Translate UI/UX designs into responsive and interactive web applications.</li>
                        <li>Write clean, maintainable, and scalable code using JavaScript, TypeScript, ReactJS,NextJs</li>
                        <li>Optimize applications for maximum speed, scalability, and performance.</li>
                        <li>Integrate RESTful APIs services with front-end logic.</li>
                        <li>Creating a reusable components for better understanding and clean code using ReactJS or NextJS</li>
                        <li>Collaborate with back-end developers, designers, and product managers.</li>
                        <li>Implement SEO best practices in server-side rendered (SSR) pages using Next.js.</li>
                        <li>Manage routing, static generation (SSG), and SSR features with Next.js.</li>
                        <li>Participate in code reviews and contribute to improving code quality.</li>
                        <li>Use version control (Git) and tools like GitHub or Bitbucket or Jira for collaboration.</li>
                    </ListBlock>
                    <ListBlock>
                        <strong>Projects :</strong> Spontaa, KnowThyWithIn, Lifedemy.
                    </ListBlock>
                </div>
                <div>
                    <CompanyNameBlock>
                        Iosys Solutions India Pvt Ltd, Bengaluru - 
                        <span> Web Developer </span>
                        <div> Oct 2021 - July 2023</div>
                    </CompanyNameBlock>
                    <ListHeading>
                        Responsibilities
                    </ListHeading>
                    <ListBlock>
                            <li>Develop and maintain responsive HubSpot CMS templates (drag-and-drop and coded).</li>
                            <li>Convert Figma/Adobe XD/Sketch designs into HubSpot CMS pages using HTML, CSS, and JavaScript.</li>
                            <li>Customize and build HubL modules and themes for various page types (landing pages, blog, emails).</li>
                            <li>Maintain and update existing pages, modules, and templates as per branding or campaign needs.</li>
                            <li>Follow brand guidelines and ensure design consistency across all templates.</li>
                            <li>Implement personalization and dynamic content using HubSpot smart content and HubL.</li>
                            <li>Optimize websites for performance, accessibility, and SEO within the HubSpot ecosystem.</li>
                            <li>Ensure cross-browser compatibility and responsive behavior across all devices.</li>
                    </ListBlock>
                    <ListBlock>
                        <strong>Projects :</strong> NextPathWay, GK3 Capital, J.Morries Flower, Benevity.
                    </ListBlock>
                </div>
            </ExperianceBlock>
        </div>
    )
}

export default Experiance
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

import eCom from '../../Assets/Projects/Screenshot 2022-07-12 133645.png'
import jsomBlog from '../../Assets/Projects/Screenshot 2022-07-15 153124.png'
import taskify from '../../Assets/Projects/Screenshot 2022-07-13 111518.png'
import Technologies from "../Technologies/Technologie"
const  Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: 'white'}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="Star-Buy"
              description="A space where you can buy clothes also you have the
              posibility to give a feedback for our services ."
              link="https://github.com/MohitSojitra/taskify"
              liveLink="https://trallo-clone-mocha.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsomBlog}
              isBlog={false}
              title="E-Tafakna"
              description="Unique mobile application which is offer for their users the possibility to sign in any contracts that is exist in their countries and send it to the second Part ."
            />
          </Col>
        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="Order Food"
              description="A Web Site which is offer for their customers the possibility to order any type of our traditional tunisian Food and more  ."
              link="https://github.com/MohitSojitra/e-commerce-store"
              liveLink="https://e-commerce-fronend.vercel.app/"
            />
          </Col>

     

     

       
        </Row>
      </Container>
      <Technologies/>
    </Container>
  )
}

export default Projects

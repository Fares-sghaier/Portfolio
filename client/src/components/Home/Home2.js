import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt'
import {AiFillGithub, AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        

  



 
          <Col md={8} className="home-about-description">
            <h1 style={{fontSize: '2.6em'}}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm a full-Stack developer graduated from RBK Tunisia, passioned about computer science , I’ve always been a great problem solver, and a technophile obsessed with the latest devices. Today, I'm seeking for new opportunities where I can develop and improve my personal skills.
              <br />
              <br />I started learning code in early age,
              <i>
                <b className="purple"> though it was always more of a hobby than a career focus.</b>
              </i>
              <br />
              <br />
              After a high school education in Science, and continuing to pursue that hobby, I realized software engineering was the right field for me. &nbsp;
              <i>
                <b className="purple">
                Since then, I’ve worked on countless of projects and have been involved with a startup project,
                </b>{' '}
                I worked as a junior developer with an amazing team to build an application for a new startup that will help the users to sign and share contracts, and am getting into machine learning on my own time.I’m familiar with a variety of programming languages, <b className="purple">including JavaScript, HTML, CSS, React, jQuery, and AngularJS... ,</b>
              </i>
              <br />
              <br />
              but I’m always adding new skills to my repertoire. I’m also eager to meet software engineers in the area, 
              <b className="purple">so feel free to connect!</b> 
              <i>
                <b className="purple">
                  {' '}
                
                </b>
              </i>
              .
              <i>
                <b className="purple"></b>
              </i>
            </p>
          </Col>
          <Col md={10} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Fares-sghaier"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fares-sghaier-23a1a4238/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Fares.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" className="btn">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Formation</h3>
            <Resumecontent
              title="Full Stack developer"
              date="Juine 2022"
              content={[
                "I'm a full-Stack developer graduated from RBK Tunisia, passioned about computer science , I’ve always been a great problem solver, and a technophile obsessed with the latest devices. Today, I'm seeking for new opportunities where I can develop and improve my personal skills.",
              ]}
            />
           
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Baccaloriat Science degree"
              date="2020 - 2021"
              content={["Student of Science "]}
            />

            <h3 className="resume-title">Languages</h3>
            <Resumecontent
              title=""
              content={[
                `French: Advanced`,
                `English: Advanced`,
                `Arabic: Native`,
                `German:Beginner`,
                `Spanish:Beginner`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
};

export default Resume;

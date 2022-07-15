import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiTensorflow,
  SiFirebase,
  SiTypescript,
  SiAmazonaws,
  SiGraphql,
} from "react-icons/si";
import angular from "../../Assets/Avatars/angularjs-plain.svg";
import react from "../../Assets/Avatars/react-original.svg";
import js from "../../Assets/Avatars/javascript-plain.svg";
import babel from "../../Assets/Avatars/babel-original.svg";
import bash from "../../Assets/Avatars/bash-original.svg";
import css from "../../Assets/Avatars/css3-plain.svg";
import express from "../../Assets/Avatars/express-original.svg";
import html from "../../Assets/Avatars/html5-plain.svg";
import typescript from "../../Assets/Avatars/typescript-plain.svg";
import webpack from "../../Assets/Avatars/webpack-plain.svg";
import firebase from "../../Assets/Avatars/firebase-plain.svg";
import mongodb from "../../Assets/Avatars/mongodb-plain-wordmark.svg";
import mysql from "../../Assets/Avatars/mysql-plain-wordmark.svg";
import nodejs from "../../Assets/Avatars/nodejs-plain-wordmark.svg";
import bootstrap from "../../Assets/Avatars/bootstrap-plain.svg";
const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={angular} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={react} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={js} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={babel} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={bash} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={css} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={express} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={html} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={typescript} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={webpack} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={firebase} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={nodejs} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={mongodb} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={mysql} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={bootstrap} />
      </Col>
    </Row>
  );
};

export default Techstack;

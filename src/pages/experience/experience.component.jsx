import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_THALES from "../../assets/img/experience/Thales_Logo.svg";
import L_EY from "../../assets/img/experience/EY.svg";
import Tilt from "react-tilt";
import CardDeck from "react-bootstrap/CardDeck";
//import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <br />
      <br />
      <h1 className="heading pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      
        
            <CardDeck>
              <Row className="d-flex justify-content-around">
                {/* Frontend */}
                <Col >
                  <Card className="focus mt-2 mb-2">

                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                      <Card.Img variant="top" className="img-resize" src={L_EY} alt="EY logo" />
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                      <div>
                        <Card.Title className="text-center">Data Analytics Technology Intern</Card.Title>
                      </div>
                      <div>
                        <Card.Text className="text-center style">
                          <strong className="body-title-style ">July 2020 - August 2020</strong>
                          <br />

                          <ul className="text-left">
                            <li>Performed near duplicate analysis on document sets to provide percentage of similarity reducing document review</li>
                            <li>Analyzed and created search term reports on risk and fraud helping reduce documents for review from millions to thousands</li>
                            <li>Provided analytical solutions and creative presentations to clients for return to work after Covid in deadline driven environment</li>
                            <li>Automated capacity reports after proposing the steps of information retrieval using Python, improving efficiency</li>
                            {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                          </ul>


                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col >
                  <Card className="focus mt-2 mb-2">
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                      <Card.Img variant="top" className="img-resize" src={L_THALES} alt="Thales logo" />
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                      <div>
                        <Card.Title className="text-center">Software Engineer</Card.Title>
                      </div>
                      <div>
                        <Card.Text className="text-center style">
                          <strong className="body-title-style ">June 2018 – June 2019 </strong>
                          <br />

                          <ul className="text-left">
                            <li>Designed and developed back-end APIs in Agile software development; delivered high-quality project to >20 customers </li>
                            <li>	Developed solutions for switching network from national to international; delivered to customers generating $1M revenues </li>
                            <li>	Implemented SQL scripts to optimize, transform and migrate real-time data improving efficiency by 10% for customers  </li>
                            <li>	Optimized Migration component using Python and Java to skip 1000s of files which improved performance by 35% </li>
                            <li>	Performed root cause analysis of 50+ production issues and resolved them; worked on unit testing and continuous integration through Mercurial version control, used better implementation logic in Java and improved performance by 20%</li>

                          </ul>


                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </CardDeck>
          
    </div>
  );
};

export default Experience;

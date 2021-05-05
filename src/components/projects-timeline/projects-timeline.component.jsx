import React from "react";
import { Timeline, Events, UrlButton, ImageEvent,  themes, createTheme } from "@merc/react-timeline";

// projects
import L_NID from "../../assets/img/projects/Network-Intrusion.jpg";
import L_NAS from "../../assets/img/projects/NetworkAttachedStorage.png";
import L_DW from "../../assets/img/projects/DW.jpg";
import L_ADB from "../../assets/img/projects/ADB.jpg";
import L_DECISION from "../../assets/img/projects/DecisionMaking.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills

import L_SPARK from "../../assets/img/skills/Spark.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_ASPNET from "../../assets/img/skills/Asp.net.svg";
import L_FLASK from "../../assets/img/skills/flask.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_MYSQL from "../../assets/img/skills/mysql.svg";
import L_JUPYTER from "../../assets/img/skills/jupyter.svg";
import L_CSHARP from "../../assets/img/skills/c.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_AWS from "../../assets/img/skills/aws.svg";
import L_GCP from "../../assets/img/skills/gcp.svg";
import L_AZURE from "../../assets/img/skills/azure.svg";

import Image from "react-bootstrap/Image";

import "./projects-timeline.styles.css";


const TimeLine = () => {
  const theme = createTheme(themes.default, {
    
    timelineTrack: {
      background: `linear-gradient(
        to bottom, #5ec0a7 0%,#070d24 100%
      )`,
      width: '2px',
    },
    date: {
      backgroundColor: '#3DA588',
      color: '#fff',
    },
    marker: {
      borderRadius: '4px',
      borderColor: '#070D24',
      borderWidth: '3px',
      transform: 'rotate(45deg)',
      backgroundColor: '#BF2D51',
    },
    button: {
      backgroundColor: '#000958',
    },
  });
  
  
  return (
    <div id="projects">
      <br/>
      <h1 className="heading pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline theme={theme}>
        <Events>
        {/* Project: Network Intrusion Detection */}
        <ImageEvent
            date="April 2021"
            className="text-center"
            text="Network Intrusion Detection"
            src={L_NID}
            alt="Network Intrusion Detection"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> 
                        <br/>
                        Extraction of useful information from KDD 99 data set using RDD rules.<br/>
                        Evaluation of the difficulty of brute force login attack and distribution of DDOS attack by correlating SYN flooding in 0.6s. 
                        <hr />
                        <strong>Tech used:</strong>
                        <ul class="nobull">
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SPARK}
                                alt="PySpark"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              PySpark
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JUPYTER}
                                alt="Jupyter Notebook"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Jupyter Notebook
                            </span>
                          </li>
                          
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/aakashsach/Network-Intrusion-Detection"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


{/* Project: Network Attached Storage */}
<ImageEvent
            date="February 2021 – March 2021"
            className="text-center"
            text="Network Attached Storage"
            src={L_NAS}
            alt="Network Attached Storage"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        <br/>
                        A single-platform application suffers the “vendor lock-in” problem, blocking the customers from migrating to better cloud providers. More and more customers have adopted a multi-platform approach, in order to obtain better services.
                        <br/>This project provides a network attached storage backed by AWS S3, Azure Blob Storage, and Google Cloud Storage in Python and CLI.
                        <br/>It includes the implementation of filesystem functions to provide multi-platform approach for object storage APIs and a RAID replication system.
                        <hr />
                        
                        <strong>Tech used:</strong>
                        <ul class="nobull">
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AWS}
                                alt="AWS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Amazon Web Services
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GCP}
                                alt="GCP"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Google Cloud Platform
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_AZURE}
                                alt="Azure Blob Storage"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Azure Blob Storage
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/aakashsach/Network-Attached-Storage"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* Project: Dominick’s Finer Food Data Warehouse */}
          <ImageEvent
            date="September 2020 – November 2020"
            className="text-center"
            text="Dominick’s Finer Food Data Warehouse"
            src={L_DW}
            alt="Dominick’s Finer Food Data Warehouse"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> 
                        <br/>
                        This project includes creation of a data warehouse solution in MS SQL Server through data marts and recommending 5 opportunities to improve profitability of a retail store.
                        <br/>
                        It includes data cleaning, ETL, data-analysis, visualization and reporting using SSIS, SSRS, SSAS.

                        <hr />
                        <strong>Tech used:</strong>
                        <ul class="nobull">
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MSSQL}
                                alt="MS SQL Server"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              MS SQL Server
                            </span>
                          </li>
                          </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/aakashsach/ISTM-637-Dominick-s-Finer-Food-Data-Warehouse"
                  target="_blank"
                >
                  SEE DETAILS
                  </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: School Donation Recommendation Project*/}
          <ImageEvent
            date="September 2019 – October 2019"
            className="text-center"
            text="School Donation Recommendation Project"
            src={L_ADB}
            alt="School Donation Recommendation Project"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> 
                        <br/>
                        Recommendation system that provides the top donors and success rate of donations asked for based on the donorschoose.org data.
                        <br/>
                        It provides a bag of words to recommend keywords while framing essays for donation, these keywords have been picked from the most donations received.
                        <br/>
                        It involves data analysis, transformation, pre-processing of data, extracting and loading streams of data, and recommendation system algorithm in Python and SQL.
                        <hr />
                        <strong>Tech used:</strong>
                        <ul class="nobull">
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MYSQL}
                                alt="MySQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MySQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FLASK}
                                alt="Flask"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Flask
                            </span>
                          </li>
                        </ul>
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/aakashsach/School-Donation-Recommendation"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

          {/* Project: August 2017 – December 2017  */}

          <ImageEvent
            date="August 2017 – December 2017"
            className="text-center"
            text="Decision Making in E-Learning "
            src={L_DECISION}
            alt="Decision Making in E-Learning "
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> 
                        <br/>
                        This project is an e-learning recommendation system that evaluates students based on learning style, personality and knowledge level and the divide them into competency levels, which will allow them to study materials customized to them
                        <br/>
                        For this, we acquired data through surveys, performed data wrangling using pandas and analyzed data on basis of FSLSM and OCEAN models
                        <br/>
                        In this project, three membership and non-membership values were aggregated using Intuitionistic Genetic Algorithm, classified using KNN classifier; accuracy of 78% and provided recommendation of the stage a learner would belong
                        <hr />
                        <strong>Tech used:</strong>
                        <ul class="nobull">
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ASPNET}
                                alt="ASP.Net"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              ASP.Net
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSHARP}
                                alt="C#"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              C#
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/aakashsach/Decision-Making-in-E-Learning"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;

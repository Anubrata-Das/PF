import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import examimg from "../assets/img/exam.png";
import scm from "../assets/img/scm.png";
import shopping from "../assets/img/shopping.png";
import pretty from "../assets/img/project_4.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Exam Portal",
      description: "Angular and SpringBoot Based web app for giving quizzes , Come and Utilize your knowledge",
      imgUrl: examimg,
      links:"http://16.16.136.83/",
      vlink:"https://drive.google.com/file/d/14NqxgYh0ZGXcJN8imD0xyVPA4K50M0iX/view?usp=sharing",
      
    },
    {
      title: "Smart Contact Manager",
      description: "Thymeleaf and SpringBoot based project for saving your contacts in a smarter way",
      imgUrl: scm,
      links:"",
      vlink:"https://drive.google.com/file/d/17QkpOxQiu2qtTbkgWK_98wwvhu9jPL5H/view?usp=drive_link"
    },
    {
      title: "Shopping Website",
      description: "JSP and JDBC based Shopping Website, Come and Buy something",
      imgUrl: shopping,
      links:"",
      vlink:"https://drive.google.com/file/d/1i2moUZZa5IJz1kl2MhCY6SRdo2vzSGvn/view?usp=drive_link"
    },
    {
      title: "Prettypetals",
      description: "It's a website for purchasing flowers and cakes online",
      imgUrl: pretty,
      links:"https://anubrata-das.github.io/Right_shopping_task/",
      vlink:""
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Journey So Far..</h2>
                <p>Make it work, make it right, make it fast</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link className="navlinks"  eventKey="first" >Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="navlinks" eventKey="second" >Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="navlinks" eventKey="third" >Achievements</Nav.Link>
                    </Nav.Item>
                  </Nav>


                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""} >

                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>


                    <Tab.Pane eventKey="second" className="sectab">
                      <div className="edu" style={{display:'flex',justifyContent:'center',alignItems:'center',color:'#B8B8B8'}}>
                        <ul>
                        <h5><li>Completed B.Tech from Government College of Engineering and Leather Technology in <mark> Computer Science & Engineering</mark></li></h5>
                        <h5><li>Has Done 10<sup>th</sup> from Chandpara Bani Vidya Bithi (H.S) School in 2016-2018 with 90% marks </li></h5>
                        <h5><li>Has Done 10<sup>th</sup> from Chandpara Bani Vidya Bithi (H.S) School in 2016 with 91% marks </li></h5>
                        </ul>
                      </div>
                    </Tab.Pane>


                    <Tab.Pane eventKey="third" className="thirdtab">
                    <div className="ach" style={{display:'flex',justifyContent:'center',alignItems:'center',color:'#B8B8B8'}}>
                        <ul>
                        <h3>Experience</h3>
                        <div className="st">
                        <h5><li><mark>RIGHT SHOPPING PVT LTD:</mark> Lead and contribute to the development of responsive web applications using HTML, CSS, and JavaScript to create
visually appealing and user-friendly interfaces.</li></h5>
                        <h5><li>Created fluid and responsive layouts, ensuring websites adapt seamlessly to different screen sizes for mobile accessibility</li></h5>
                        {/* <h5><li>5 Star Coder at Hacker Rank and earned Gold Badge</li></h5> */}
                        </div>
                        <h3>Others</h3>
                        <div className="st" >
                        <h5><li>Cleared the First Round of the National Engineering Olympiad</li></h5>
                        <h5><li>5 Star Coder at Hacker Rank and earned Gold Badge</li></h5>
                        <h5><li>2022 4th Team in MLH Hack4Bengal Hackathon</li></h5>
                        <h5><li>2020 FaceBook HackerCup Qualified</li></h5>
                        {/* <h5><li>5 Star Coder at Hacker Rank and earned Gold Badge</li></h5> */}
                        </div>
                          
                    
                        </ul>
                      </div>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

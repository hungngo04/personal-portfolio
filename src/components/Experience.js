import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import './components.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experience</h2>
                <p>I have a diverse range of experience and projects, spanning web and mobile app development, natural language processing, and game creation.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center flex-column flex-md-row" id="pills-tab">
    <Nav.Item className="flex-grow-1 text-center">
        <Nav.Link eventKey="first">Viettel</Nav.Link>
    </Nav.Item>
    <Nav.Item className="flex-grow-1 text-center">
        <Nav.Link eventKey="second">TEDx Bucknell</Nav.Link>
    </Nav.Item>
    <Nav.Item className="flex-grow-1 text-center">
        <Nav.Link eventKey="third">CALIBRE Lab</Nav.Link>
    </Nav.Item>
</Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div className="jobTitle">
                        <center>
                          <h4>Software Engineering Intern @ Viettel Digital Solution</h4>
                          <h5>Oct 2023 - Aug 2023</h5>
                        </center>
                      </div>
                      <p className="jobDesc">
                        <ul>
                          <li>Developed reusable Core UIs for the incoming version of the Viettel Money Super App with UX designers using Flutter, saving time in developing new features for 10 million users by 50%.</li>
                          <li>Enhanced QR code scanning features using Swift for cashless money transfers, enabling users to transfer money using QR codes within 34 major banks in Vietnam.</li>
                          <li>Designed Core Network using Method Channel and FFI to establish communication between Flutter application and iOS/Android native platforms, increasing data transfer speed by 40%.</li>
                          <li>Improved widget testing code coverage from 35% to 80% in Widget Tester within 1 month.</li>
                        </ul>
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div className="jobTitle">
                        <center>
                          <h4>Backend Software Engineering @ TEDx at Bucknell University</h4>
                          <h5>Dec 2022 - Apr 2023</h5>
                        </center>
                      </div>
                      <p className="jobDesc">
                        <ul>
                          <li>Implemented RESTful routes for user authentication, posts creation and modification, can serve up to 1500 users.</li>
                          <li>Secured client-side data and endpoints by implementing user authentication and authorization using Local Storage, JWT, and Context API.</li>
                          <li>Developed axios middleware module to validate request data between React.js front-end and Express.js and Node.js back-end, increasing loading speed by 60%.</li>
                          <li>Designed 10+ optimized MongoDB schemas with Mongoose to efficiently store and retrieve components and authentication data from the collections, reducing query times by 45%.</li>
                        </ul>
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="jobTitle">
                          <center>
                            <h4>Machine Learning Engineer</h4>
                            <h5>Dec 2022 - Apr 2023</h5>
                          </center>
                        </div>- 
                        <p className="jobDesc">
                          <ul>
                            <li>Developed an iOS application using Apple ARKit to enable facial movement-based text input for people with limited mobility or dexterity, achieving an average accuracy of 90% across 20 test subjects.</li>
                            <li>Implemented calibration for the eye-tracking cursor using matrix transformations from 4 calibration points across the screen, increasing typing speed and easiness of the users by 80%.</li>
                            <li>Trained and optimized a machine translation model using the BART transformer architecture, achieving up to 0.94 BLEU score and 0.98 ROUGE score.</li>
                          </ul>
                        </p>
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

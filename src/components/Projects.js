import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import chromium from "../assets/img/chromium.png";
import map from "../assets/img/map.png";
import bereal from "../assets/img/bereal.gif";
import car from "../assets/img/car.png";
import game from "../assets/img/game.png";
import stock from "../assets/img/stock.png";
import snaptask from "../assets/img/snaptask.png";
import booking from "../assets/img/booking.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

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
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I've actively contributed to open-source projects to gain hands-on experience with real-world impact initiatives, and pursued personal projects to further enhance my skill set.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                          <ProjectCard techstack={"C++, Java, Mojo"} link={"https://chromium-review.googlesource.com/q/owner:ngotienhung195@gmail.com+is:merged"} title={"Chromium Open-source Project"} description={"I contributed to the WebXR sectors of the Chromium project, implementing some features for future developments"} imgUrl={chromium}/>
                          <ProjectCard techstack={"HTML, CSS, React.js, Node.js, Express.js"} link={"https://github.com/hungngo04/JourneyBuddies"} title={"Journey Buddies"} description={"An app for travellers to mark the places they've visited and share with friends"} imgUrl={map}/>
                          <ProjectCard techstack={"Python, Neural Network"} link={"https://github.com/hungngo04/SelfDrivingCar"} title={"Self-driving Car Simulator"} description={"A simulator of generated roads and self-driving cars using a neural network"} imgUrl={car}/>
                          <ProjectCard techstack={"Swift, SwiftUI"} link={"https://github.com/hungngo04/Project05-BeRealClone"} title={"BeReal Clone"} description={"A fullstack clone version of BeReal on iOS"} imgUrl={bereal}/>
                          <ProjectCard techstack={"Unreal Engine Blueprint, C++, C#"} link={"https://github.com/hungngo04/CryptRaider"} title={"Crypt Raider"} description={"An Unreal Engine 5 Game, the players need to solve the puzzle in order to escape the room and win."} imgUrl={game}/>
                          <ProjectCard techstack={"Python, IEX Cloud API"} link={"https://github.com/hungngo04/algoTrading"} title={"S&P500 Stock Trading Recommender"} description={"A trading recommender website for equal-weighted stock from S&P500 group"} imgUrl={stock}/>
                          <ProjectCard techstack={"Flutter, SwiftUI"} link={"https://github.com/hungngo04/snap_task"} title={"Snaptask"} description={"A reminder app for boosting productivity of users"} imgUrl={snaptask}/>
                          <ProjectCard techstack={"HTML, CSS, React.js, Node.js, Express.js, MongoDB, Axios"} link={"https://github.com/hungngo04/booking-app"} title={"Booking Platform"} description={"A web app for homestay and hotel booking"} imgUrl={booking}/>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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

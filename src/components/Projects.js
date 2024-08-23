import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


function Projects() {

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

    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis necessitatibus sequi quod perspiciatis illo. Doloremque, in odit tempora consequatur quia quisquam nihil fuga explicabo ad. Qui fuga ut quidem ab?</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">
                                    Tab One
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    Tab Two
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    Tab Three
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Tab.Container>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <p>{project.title}</p>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            Lorem Impsum
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            Lorem Impsum
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Container>
    </section>
}


export default Projects;
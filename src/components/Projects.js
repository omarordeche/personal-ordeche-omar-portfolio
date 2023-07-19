import { Row , Container , Col , Nav , Tab } from 'react-bootstrap';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';


export const Projects = () => {
     const projects = [
                     {
                        title : "Business Startup",
                        description : "Design & Developement",
                        imgUrl : projImg1,
                     },

                     {
                        title : "Business Startup",
                        description : "Design & Developement",
                        imgUrl : projImg2,
                     },

                     {
                        title : "Business Startup",
                        description : "Design & Developement",
                        imgUrl : projImg3,
                     },
     ] ;

     
     return (
        <section className="project" id="projects"> 
        {/* id avec s  */}
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, recusandae.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    
<br />
                    <Tab.Content>
                             <Tab.Pane eventKey="first">
                                 <Row>
                                     {
                                         projects.map((project , index) => {
                                             return (
                                                 <ProjectCard Key={index} { ...project } />
                                             )
                                         })
                                     }
                                 </Row>
                             </Tab.Pane>
                             <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                             <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} ></img>
        </section>
     )

}
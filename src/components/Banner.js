import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";

function Banner() {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>
                            {'Hi I\'m webdecoded'}
                            <span className="wrap">web developer</span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fuga ad iusto cupiditate impedit eos porro officiis a dicta optio? Nulla, iusto delectus sunt et nesciunt quo ut harum optio!</p>
                        <button onClick={() => console.log('connect btn clicked')}>Let's connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;
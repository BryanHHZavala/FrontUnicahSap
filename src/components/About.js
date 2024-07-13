import React from "react";
import './../styles/about.css';
import { Container, Row, Col } from "reactstrap";

const about = () => {
    return (
        <Container className='about-container'>
            <Row >
                <Col>
                    <h1 className='about-title'> Hola desde Aboutt </h1>
                    <p className='about-content'> si x2 </p>
                </Col>
            </Row>
        </Container>
    );
};
export default about;
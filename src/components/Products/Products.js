import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Products = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>Hello</Card>
                    </Col>
                    <Col>
                        <Card>Hi</Card>
                    </Col>
                    <Col>
                        <Card>Hallo</Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>Hello</Card>
                    </Col>
                    <Col>
                        <Card>Hi</Card>
                    </Col>
                    <Col>
                        <Card>Hallo</Card>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Card>Hello</Card>
                    </Col>
                    <Col>
                        <Card>Hi</Card>
                    </Col>
                    <Col>
                        <Card>Hallo</Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Products;
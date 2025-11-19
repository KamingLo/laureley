"use client";
import {Container, Row, Col, Form, Button, Card} from "react-bootstrap";

export default function ContactSection(){
    return(
        <Container className="my-5 py-5" id="contact">
            <Row className="justify-content-center text-center mb-5">
                <Col md={8}>
                    <h2 className="display-5 fw-bold text-white">Stay <span className="text-brand">Connected</span></h2>
                    <p className="lead ">Konsultasikan aroma yang cocok untuk kepribadian Anda.</p>
                </Col>
            </Row>

            <Row className="align-items-center">
                <Col md={5} className="mb-4 mb-md-0 text-white">
                    <h3 className="fw-bold mb-4 text-brand">Flagship Store</h3>
                    <p className=" mb-4">Kunjungi toko kami untuk mencoba langsung testernya.</p>
                    
                    <div className="d-flex align-items-center mb-4">
                        <i className="bi bi-geo-alt text-brand fs-4 me-3"></i>
                        <div className="">Grand Indonesia, West Mall Level 3</div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                        <i className="bi bi-whatsapp text-brand fs-4 me-3"></i>
                        <div className="">+62 812 3456 7890</div>
                    </div>
                </Col>
                
                <Col md={7}>
                    <Card className="p-4 p-md-5 card-perfume">
                        <Form className="text-start">
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label className="small text-uppercase tracking-widest">Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" className="rounded-0 py-2" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label className="small text-uppercase tracking-widest">Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" className="rounded-0 py-2" required />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formMessage">
                                <Form.Label className="small text-uppercase tracking-widest">Message</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Your message..." className="rounded-0" required />
                            </Form.Group>
                            <Button className="btn-brand w-100 rounded-0" type="submit" size="lg">
                                Send Message
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
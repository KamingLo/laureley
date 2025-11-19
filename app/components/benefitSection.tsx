"use client";

import { Container, Row, Col } from "react-bootstrap";

export default function BenefitSection(){
    return (
        <Container className="py-5" id="features">
            <Row className="justify-content-center text-center mb-5">
                <Col md={8}>
                    <h2 className="display-5 fw-bold text-white">The <span className="text-brand">Essence</span></h2>
                    <p className="lead ">Mengapa parfum kami berbeda dari yang lain?</p>
                </Col>
            </Row>

            <Row>
                <Col md={4} className="text-center mb-5">
                    <div className="display-4 text-brand mb-4">
                        <i className="bi bi-droplet-fill"></i>
                    </div>
                    <h4 className="text-white">Pure Ingredients</h4>
                    <p className=" px-3">Menggunakan bibit parfum asli dari Prancis tanpa alkohol berbahaya.</p>
                </Col>
                <Col md={4} className="text-center mb-5">
                    <div className="display-4 text-brand mb-4">
                        <i className="bi bi-hourglass-split"></i>
                    </div>
                    <h4 className="text-white">Long Lasting</h4>
                    <p className=" px-3">Diformulasikan khusus untuk bertahan hingga 12 jam di aktivitas outdoor.</p>
                </Col>
                <Col md={4} className="text-center mb-5">
                    <div className="display-4 text-brand mb-4">
                        <i className="bi bi-flower1"></i>
                    </div>
                    <h4 className="text-white">Unique Scent</h4>
                    <p className=" px-3">Racikan eksklusif yang memberikan karakter unik pada setiap semprotan.</p>
                </Col>
            </Row>
        </Container>
    );
}
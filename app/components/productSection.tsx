'use client';

import { Container, Button, Row, Col, Card } from "react-bootstrap";

const products = [
    {
        id: 1,
        name: "Blue Lagoon",
        type: "EAU DE PARFUM",
        desc: "Perpaduan Citrus, Sea Salt, dan Amber wood.",
        price: "IDR 450.000",
        img: "/images/product_1.png"
    },
    {
        id: 2,
        name: "Sky Fall",
        type: "EXTRAIT DE PARFUM",
        desc: "Aroma Lavender, Vanilla, dan sentuhan Mint segar.",
        price: "IDR 550.000",
        img: "/images/product_2.png"
    },
    {
        id: 3,
        name: "Deep Ocean",
        type: "BODY MIST",
        desc: "Ringan, menyegarkan, cocok untuk aktivitas harian.",
        price: "IDR 150.000",
        img: "/images/product_3.png"
    }
];

export default function ProductSection() {
    return (
        <Container fluid className="py-5" style={{ backgroundColor: 'var(--bg-dark)' }} id="collection">
            <Container className="py-5">
                <Row className="mb-5 text-center">
                    <Col md={12}>
                        <span className="text-brand text-uppercase small tracking-widest">Our Masterpieces</span>
                        <h2 className="display-4 fw-bold text-white mt-2">Signature <span className="text-brand">Collection</span></h2>
                        <div className="mx-auto mt-3" style={{ width: '60px', height: '2px', background: 'var(--brand-blue)' }}></div>
                    </Col>
                </Row>

                <Row>
                    {products.map((item) => (
                        <Col md={4} className="mb-5" key={item.id}>
                            <Card className="h-100 card-perfume border-0">
                                <div className="p-4 text-center">
                                    <Card.Img 
                                        variant="top" 
                                        src={item.img} 
                                        style={{ maxHeight: '300px', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(72, 202, 228, 0.3))' }} 
                                    />
                                </div>
                                <Card.Body className="text-center">
                                    <h4 className="fw-bold text-white">{item.name}</h4>
                                    <p className="text-brand small">{item.type}</p>
                                    <Card.Text className=" small mb-4">
                                        {item.desc}
                                    </Card.Text>
                                    <Button className="btn-brand w-100">{item.price}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    )
}
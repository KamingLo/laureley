import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

export default function Footer(){
    return(
    <footer id="footer" style={{backgroundColor: 'var(--bg-card)'}} className="pt-5 pb-3 border-top border-secondary border-opacity-25">
        <Container>
            <Row className="gy-4">
                {/* Kolom 1: Brand Identity */}
                <Col lg={4} md={6} className="mb-4">
                    <h3 className="fs-3 fw-bold text-brand mb-3" style={{letterSpacing: '3px'}}>LAUREL</h3>
                    <p className=" pe-lg-5">
                        Menghadirkan aroma samudra yang elegan dan misterius. Setiap tetes adalah karya seni yang membangkitkan memori.
                    </p>
                    <div className="d-flex gap-3 mt-4">
                        <Link href="#" className="text-white fs-5 hover-brand"><i className="bi bi-instagram"></i></Link>
                        <Link href="#" className="text-white fs-5 hover-brand"><i className="bi bi-facebook"></i></Link>
                        <Link href="#" className="text-white fs-5 hover-brand"><i className="bi bi-twitter-x"></i></Link>
                        <Link href="#" className="text-white fs-5 hover-brand"><i className="bi bi-tiktok"></i></Link>
                    </div>
                </Col>

                {/* Kolom 2: Collections */}
                <Col lg={2} md={6} className="mb-4">
                    <h5 className="text-white fw-bold mb-3 text-uppercase small tracking-widest">Collections</h5>
                    <ul className="list-unstyled">
                        <li className="mb-2"><Link className="text-secondary text-decoration-none hover-brand" href="#">Men's Scents</Link></li>
                        <li className="mb-2"><Link className="text-secondary text-decoration-none hover-brand" href="#">Women's Scents</Link></li>
                        <li className="mb-2"><Link className="text-secondary text-decoration-none hover-brand" href="#">Unisex</Link></li>
                        <li className="mb-2"><Link className="text-secondary text-decoration-none hover-brand" href="#">Gift Sets</Link></li>
                        <li className="mb-2"><Link className="text-secondary text-decoration-none hover-brand" href="#">Best Sellers</Link></li>
                    </ul>
                </Col>

                {/* Kolom 3: Support */}
                <Col lg={2} md={6} className="mb-4">
                    <h5 className="text-white fw-bold mb-3 text-uppercase small tracking-widest">Support</h5>
                    <ul className="list-unstyled">
                        <li className="mb-2"><Link className="text-secondary text-decoration-none hover-brand" href="#">Contact Us</Link></li>
                        <li className="mb-2"><Link className="text-secondary text-decoration-none hover-brand" href="#">Shipping Policy</Link></li>
                        <li className="mb-2"><Link className="text-secondary text-decoration-none hover-brand" href="#">Returns</Link></li>
                        <li className="mb-2"><Link className="text-secondary text-decoration-none hover-brand" href="#">FAQ</Link></li>
                        <li className="mb-2"><Link className="text-secondary text-decoration-none hover-brand" href="#">Track Order</Link></li>
                    </ul>
                </Col>

                {/* Kolom 4: Newsletter */}
                <Col lg={4} md={6} className="mb-4">
                    <h5 className="text-white fw-bold mb-3 text-uppercase small tracking-widest">Stay Updated</h5>
                    <p className=" small">Berlangganan untuk mendapatkan info produk terbaru dan diskon eksklusif 10%.</p>
                    <Form className="mt-3">
                        <InputGroup>
                            <Form.Control 
                                placeholder="Email Address" 
                                className="bg-transparent border-secondary"
                                style={{borderColor: 'rgba(255,255,255,0.2)', color:'#fff'}}
                            />
                            <Button variant="outline-light" className="btn-brand border-start-0">
                                <i className="bi bi-arrow-right"></i>
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>

            <Row className="mt-5 pt-4 border-top border-secondary border-opacity-25">
                <Col md={6} className="text-center text-md-start">
                    <p className="mb-0  small">&copy; {new Date().getFullYear()} Laurel Perfumery. All rights reserved by Kaming.</p>
                </Col>
                <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
                    <Link href="#" className=" small text-decoration-none me-3">Privacy Policy</Link>
                    <Link href="#" className=" small text-decoration-none">Terms of Service</Link>
                </Col>
            </Row>
        </Container>
    </footer>        
    )
}
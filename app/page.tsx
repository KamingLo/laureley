"use client";
import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image"; 
import ProductSection from "./components/productSection";
import BenefitSection from "./components/benefitSection";
import ContactSection from "./components/contactsections";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div style={{overflowX: "hidden"}}>
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* About Section / Story */}
        <section id="about" className="py-5">
            <Container className="my-5">
                <Row className="align-items-center">
                    <Col md={6} className="mb-4 order-md-2">
                        <span className="text-brand text-uppercase small">Our Story</span>
                        <h2 className="display-5 fw-bold text-white mt-2">Born from the <span className="text-brand">Ocean</span></h2>
                        <p className="mt-4">
                            Laureley merupakan maison parfum dari Prancis yang didirikan pada tahun 1990 oleh seorang perfumer independen bernama Éloise Laurent, wanita yang tumbuh di wilayah Provence—tempat ladang lavender, citrus, dan angin laut menjadi bagian kehidupan sehari-hari.
                        </p>
                        <p className="text mb-4">
                            Dengan ambisi menciptakan aroma yang jujur dan berkarakter, Éloise membangun Laureley sebagai rumah parfum yang menjembatani seni perfumery klasik dengan sentuhan modern. Setiap rancangannya menekankan kesederhanaan yang elegan, bahan alami berkualitas tinggi, dan harmoni wangi yang bisa dipakai sehari-hari.
                        </p>
                        <Button className="btn-brand">Read More</Button>
                    </Col>

                    <Col md={6} className="text-center order-md-1">
                         <div className="position-relative d-inline-block">
                             <div className="position-absolute top-0 start-0 w-100 h-100 border-brand"></div>
                             <Image 
                                src="/images/about.jpg" 
                                alt="About Laureley" 
                                width={450} 
                                height={550} 
                                className="img-fluid"
                                style={{filter: "brightness(80%) contrast(110%)"}}
                            />
                         </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <ProductSection />
        
        <div className="bg-dark-custom py-5 border-top border-bottom border-secondary border-opacity-25">
            <BenefitSection />
        </div>

        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
"use client"
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container } from 'react-bootstrap';

interface Slide {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            title: "Blue Lagoon",
            subtitle: "Aroma segar berpadu citrus cerah, sentuhan sea salt, dan kehangatan amber wood.",
            imageUrl: "/images/banner_01.png",
        },
        {
            title: "Sky Fall",
            subtitle: "Lavender lembut, vanilla manis, dan mint segar yang menenangkan.",
            imageUrl: "/images/banner_02.png",
        },
        {
            title: "Deep Ocean",
            subtitle: "Aroma ringan dan menyegarkan, ideal untuk pemakaian harian",
            imageUrl: "/images/banner_03.png",
        },
    ]

    return (
        <section id="home">
            {/* controls={true} memunculkan panah, indicators={true} memunculkan titik slide */}
            <Carousel fade interval={5000} controls={true}>
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <div 
                            style={{
                                // Gradient dipertebal agar teks dan tombol navigasi lebih terlihat
                                backgroundImage:`linear-gradient(to bottom, rgba(11,17,32,0.3), rgba(11,17,32,0.9)), url(${slide.imageUrl})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "100vh", 
                            }}>
                        </div>
                        <Carousel.Caption className="d-flex h-100 flex-column align-items-center justify-content-center text-center">
                            <Container>
                                <p className="text-brand text-uppercase mb-3" style={{letterSpacing: '5px'}}>New Collection</p>
                                <h1 className="display-1 fw-bold text-white mb-4" style={{fontFamily: 'serif'}}>{slide.title}</h1>
                                <p className="lead fs-5 mb-5 text-light opacity-75" style={{maxWidth: '600px', margin: '0 auto'}}>{slide.subtitle}</p>
                                <Button href="#collection" className="btn-brand px-5 py-3 border-0">Explore Scents</Button>
                            </Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    )
}

export default HeroSection;
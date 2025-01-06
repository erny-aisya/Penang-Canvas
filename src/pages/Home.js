import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="Home">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Welcome to Penang!</h1>
                    <p>Explore the beautiful attractions and culture of Penang.</p>
                </div>
            </section>

            {/* Carousel with images */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media-cdn.tripadvisor.com/media/photo-s/29/bc/0d/26/hotel-facade.jpg"
                        alt="Luxury Hotel Facade"
                        style={{ borderRadius: "15px", height: "400px", objectFit: "cover" }}
                    />
                    <Carousel.Caption style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "15px" }}>
                        <h3>Luxury Hotel Facade</h3>
                        <p>Stay in luxury hotels in Penang.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Embedded YouTube Video */}
            <section className="video-section">
                <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/KeDSg4Y_njg"
                    title="Visit Penang - Explore the Vibrant Culture"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>

            {/* About Penang Canvas Section */}
            <section id="about-penang-canvas" className="about-section" style={{ textAlign: "center" }}>
                <h2>About Penang Canvas</h2>
                <p>
                    Penang Canvas is your digital gateway to the vibrant tapestry of Penang. Known as the Pearl of the Orient, Penang is a captivating blend of rich heritage, modern attractions, and culinary delights. From the historic streets of George Town, a UNESCO World Heritage Site, to the tranquil shores of Batu Ferringhi, every corner of Penang tells a story. Our platform serves as a canvas, painting the diverse experiences Penang offers—be it its iconic landmarks, flavorful cuisine, or hidden gems waiting to be discovered.
                </p>
                <p>
                    Explore, experience, and embrace Penang through our carefully crafted digital journey.
                </p>
            </section>

            {/* About Team Pearl Explorer Section */}
            <section id="about-team-pearl" className="about-section" style={{ textAlign: "center" }}>
                <h2>About Team Pearl Explorer</h2>
                <p>
                    We are Team Pearl Explorer, a group of passionate and creative individuals dedicated to bringing Penang’s charm to the digital world. Inspired by Penang’s title as the Pearl of the Orient, our mission is to create an engaging and user-friendly platform that showcases the best of Penang.
                </p>
                <p>
                    With a shared vision for innovation and a commitment to excellence, we blend creativity, technical expertise, and a love for discovery to deliver an unforgettable virtual experience. Join us as we explore Penang, one story at a time.
                </p>
            </section>

            {/* Contact Us Section */}
            <section id="contact-us" className="contact-section" style={{ textAlign: "center" }}>
                <h2>Contact Us</h2>
                <p>Email: penangcanvas@gmail.com</p>
                <p>Phone: +6012-3456789</p>
                <p>Follow us: penangcanvas on Instagram | Facebook | YouTube</p>
            </section>
        </div>
    );
}

export default Home;


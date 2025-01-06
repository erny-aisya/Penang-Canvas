import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div style={{
            background: 'linear-gradient(to right, #f3e66e, #3e8bff, #ffffff)', // Muted yellow, blue, and white gradient
            minHeight: '100vh',
            color: '#333',
            fontFamily: 'Arial, sans-serif'
        }}>
            {/* Welcome Text */}
            <h1 style={{
                textAlign: 'center',
                fontFamily: 'Lora, serif',
                color: '#2F3B52',
                margin: '30px 0',
                fontSize: '3.5em',
                fontWeight: '600',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
            }}>
                Welcome to Penang Canvas
            </h1>

            {/* Description Text */}
            <p style={{
                textAlign: 'center',
                fontSize: '1.2em',
                color: '#575757',
                fontFamily: 'Arial, sans-serif',
                marginBottom: '50px',
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                Discover the best places to visit, explore a wide variety of food, and find the perfect place to stay in Penang, the Pearl of the Orient.
            </p>

            {/* Carousel with images */}
            <Carousel>
                {/* Penang Bridge */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/penang_bridge.jpg"
                        alt="Penang Bridge"
                        style={{ borderRadius: '15px' }}
                    />
                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '15px' }}>
                        <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '2em', fontWeight: 'bold', color: '#fff' }}>Penang Bridge</h3>
                        <p style={{ fontFamily: 'Arial, sans-serif', color: '#fff', fontSize: '1.1em' }}>A symbol of Penang’s connection to the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Penang Food */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/penang_food.jpg"
                        alt="Penang Food"
                        style={{ borderRadius: '15px' }}
                    />
                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '15px' }}>
                        <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '2em', fontWeight: 'bold', color: '#fff' }}>Penang's Delicious Food</h3>
                        <p style={{ fontFamily: 'Arial, sans-serif', color: '#fff', fontSize: '1.1em' }}>A blend of cultures and flavors to delight your senses.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Bukit Bendera Train */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/bukit_bendera_train.jpg"
                        alt="Bukit Bendera Train"
                        style={{ borderRadius: '15px' }}
                    />
                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '15px' }}>
                        <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '2em', fontWeight: 'bold', color: '#fff' }}>Bukit Bendera Train</h3>
                        <p style={{ fontFamily: 'Arial, sans-serif', color: '#fff', fontSize: '1.1em' }}>A scenic journey up to the hilltop, offering breathtaking views.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* George Town */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/george_town.jpg"
                        alt="George Town"
                        style={{ borderRadius: '15px' }}
                    />
                    <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '15px' }}>
                        <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '2em', fontWeight: 'bold', color: '#fff' }}>George Town</h3>
                        <p style={{ fontFamily: 'Arial, sans-serif', color: '#fff', fontSize: '1.1em' }}>Explore the rich culture and history of this UNESCO World Heritage Site.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* About Section */}
            <div style={{
                padding: '40px 20px',
                backgroundColor: '#f4f4f4',
                textAlign: 'center',
                borderRadius: '10px',
                margin: '40px auto',
                maxWidth: '900px'
            }}>
                <h2 style={{
                    fontFamily: 'Georgia, serif',
                    color: '#333',
                    fontSize: '2.5em',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>About Penang Canvas</h2>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    color: '#575757',
                    fontSize: '1.2em',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                }}>
                    Penang Canvas is your digital gateway to the vibrant tapestry of Penang. Known as the Pearl of the Orient, Penang is a captivating blend of rich heritage, modern attractions, and culinary delights. From the historic streets of George Town, a UNESCO World Heritage Site, to the tranquil shores of Batu Ferringhi, every corner of Penang tells a story. Our platform serves as a canvas, painting the diverse experiences Penang offers—be it its iconic landmarks, flavorful cuisine, or hidden gems waiting to be discovered.
                </p>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    color: '#575757',
                    fontSize: '1.2em',
                    lineHeight: '1.6'
                }}>
                    Explore, experience, and embrace Penang through our carefully crafted digital journey.
                </p>

                <h2 style={{
                    fontFamily: 'Georgia, serif',
                    color: '#333',
                    fontSize: '2.5em',
                    marginTop: '40px',
                    fontWeight: 'bold'
                }}>About Team Pearl Explorer</h2>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    color: '#575757',
                    fontSize: '1.2em',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                }}>
                    We are Team Pearl Explorer, a group of passionate and creative individuals dedicated to bringing Penang’s charm to the digital world. Inspired by Penang’s title as the Pearl of the Orient, our mission is to create an engaging and user-friendly platform that showcases the best of Penang.
                </p>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    color: '#575757',
                    fontSize: '1.2em',
                    lineHeight: '1.6'
                }}>
                    With a shared vision for innovation and a commitment to excellence, we blend creativity, technical expertise, and a love for discovery to deliver an unforgettable virtual experience. Join us as we explore Penang, one story at a time.
                </p>
            </div>

            {/* Contact Section */}
            <div style={{
                padding: '40px 20px',
                backgroundColor: '#003B5C',
                textAlign: 'center',
                borderRadius: '10px',
                marginBottom: '40px',
                color: '#fff'
            }}>
                <h2 style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '2.5em',
                    fontWeight: 'bold',
                    marginBottom: '20px'
                }}>Contact Us</h2>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '1.2em',
                    lineHeight: '1.6',
                    marginBottom: '10px'
                }}><strong>Instagram:</strong> @PenangCanvas</p>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '1.2em',
                    lineHeight: '1.6',
                    marginBottom: '10px'
                }}><strong>Facebook:</strong> PenangCanvasOfficial</p>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '1.2em',
                    lineHeight: '1.6',
                    marginBottom: '10px'
                }}><strong>YouTube:</strong> PenangCanvasChannel</p>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '1.2em',
                    lineHeight: '1.6',
                    marginBottom: '10px'
                }}><strong>Phone:</strong> +60 12-345 6789</p>
                <p style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '1.2em',
                    lineHeight: '1.6'
                }}><strong>Operating Hours:</strong> 9 AM - 4:30 PM, Mon - Fri</p>
            </div>
        </div>
    );
};

export default Home;

import React from "react";
import Slider from "react-slick"; // Importing react-slick for carousel
import { Carousel } from 'react-bootstrap'; // Importing React Bootstrap Carousel
import "./Home.css";

function Home() {
    const touristSpots = [
        {
            name: 'Escape Penang',
            location: 'Teluk Bahang, Penang',
            price: 'RM 98 (Adult), RM 78 (Child)',
            description: 'Escape Penang offers thrilling outdoor adventures like zip-lining, go-karting, and water slides.',
            image: 'https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/324/2018/07/30014751/ESCAPE_DLoh-3994.jpg?resize=850%2C567',
            website: 'https://www.escape.my/pg?gad_source=1&gclid=CjwKCAiA-Oi7BhA1EiwA2rIu28iHIvAfGaJEL_FipSIqehqx6OEXf7yIBqxl3domZkNcI6SulyWMNhoC0BsQAvD_BwE'
        },
        {
            name: 'Penang Hill',
            location: 'Air Itam, Penang',
            price: 'RM 30 (Adult), RM 15 (Child)',
            description: 'Penang Hill offers cool weather, lush greenery, and scenic views of the island.',
            image: 'https://image-tc.galaxy.tf/wijpeg-1ivbwuw6lhpa32r8y1mscvplx/penang-hill_standard.jpg?crop=112%2C0%2C1777%2C1333',
            website: 'https://www.penanghill.gov.my/index.php/en/'
        },
        {
            name: 'Penang Peranakan Mansion',
            location: '29, Church Street, George Town, Penang',
            price: 'RM 20 (Adult), RM 10 (Child)',
            description: 'A museum showcasing the rich culture of the Peranakans with antiques and historical artifacts.',
            image: 'https://thesmartlocal.my/wp-content/uploads/2022/09/image16-5.jpg',
            website: 'http://www.pinangperanakanmansion.com.my/'
        },
        {
            name: 'Kek Lok Si Temple',
            location: 'Air Itam, Penang',
            price: 'Free admission',
            description: 'One of Southeast Asia’s largest Buddhist temples, featuring beautiful gardens and panoramic views.',
            image: 'https://live.staticflickr.com/65535/51878941270_73246f0794_b.jpg',
            website: 'https://kekloksitemple.com/'
        },
        {
            name: 'Entopia',
            location: 'Teluk Bahang, Penang',
            price: 'RM 60 (Adult), RM 45 (Child)',
            description: 'A tropical sanctuary with thousands of butterflies and reptiles in interactive exhibits.',
            image: 'https://www.entopia.com/wp-content/uploads/2017/05/website-main-copy.jpg',
            website: 'https://www.entopia.com/'
        }
    ];

    // React-Slick settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="Home">

            {/* Hero Section */}
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
                {/* Luxury Hotel Facade */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media-cdn.tripadvisor.com/media/photo-s/29/bc/0d/26/hotel-facade.jpg"
                        alt="Luxury Hotel Facade"
                        style={{
                            borderRadius: '15px',
                            height: '400px',
                            objectFit: 'cover'
                        }} // Set fixed height and cover the image
                    />
                    <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '15px'}}>
                        <h3 style={{
                            fontFamily: 'Georgia, serif',
                            fontSize: '2em',
                            fontWeight: 'bold',
                            color: '#fff'
                        }}>Luxury Hotel Facade</h3>
                        <p style={{fontFamily: 'Arial, sans-serif', color: '#fff', fontSize: '1.1em'}}>Stay in luxury
                            hotels in Penang.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Penang Street Art */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://thenextsomewhere.com/wp-content/uploads/2017/07/PenangStreetArt-2.jpg"
                        alt="Penang Street Art"
                        style={{
                            borderRadius: '15px',
                            height: '400px',
                            objectFit: 'cover'
                        }} // Consistent height and object fit
                    />
                    <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '15px'}}>
                        <h3 style={{
                            fontFamily: 'Georgia, serif',
                            fontSize: '2em',
                            fontWeight: 'bold',
                            color: '#fff'
                        }}>Penang Street Art</h3>
                        <p style={{fontFamily: 'Arial, sans-serif', color: '#fff', fontSize: '1.1em'}}>A scenic
                            journey.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Food */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://middleclass.sg/wp-content/uploads/2019/09/penang14-1024x768.jpg"
                        alt="Delicious Penang Food"
                        style={{
                            borderRadius: '15px',
                            height: '400px',
                            objectFit: 'cover'
                        }} // Same size for consistency
                    />
                    <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '15px'}}>
                        <h3 style={{
                            fontFamily: 'Georgia, serif',
                            fontSize: '2em',
                            fontWeight: 'bold',
                            color: '#fff'
                        }}>Food</h3>
                        <p style={{fontFamily: 'Arial, sans-serif', color: '#fff', fontSize: '1.1em'}}>Delicious local
                            dishes await you!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* George Town */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://findingbeyond.com/app/uploads/2017/03/george-town-georgetown-old-town-penang-island-malaysia-52.jpg"
                        alt="George Town"
                        style={{
                            borderRadius: '15px',
                            height: '400px',
                            objectFit: 'cover'
                        }} // Ensuring all images match in height
                    />
                    <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '15px'}}>
                        <h3 style={{
                            fontFamily: 'Georgia, serif',
                            fontSize: '2em',
                            fontWeight: 'bold',
                            color: '#fff'
                        }}>George Town</h3>
                        <p style={{fontFamily: 'Arial, sans-serif', color: '#fff', fontSize: '1.1em'}}>Explore the
                            rich culture and history of this UNESCO World Heritage Site.</p>
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

            {/* Tourist Spots Horizontal Sliding */}
            <section id="tourist-spots" style={{ margin: "50px 0" }}>
                <div className="tourist-header">
                    <h2>Must-Visit Tourist Spots</h2>
                    <a href="/tourist-spots" className="see-all-link">See All</a>
                </div>
                <Slider {...settings}>
                    {touristSpots.map((spot, index) => (
                        <div className="tourist-box" key={index}>
                            <div className="tourist-image">
                                <img
                                    src={spot.image}
                                    alt={spot.name}
                                    style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                                />
                            </div>
                            <div className="tourist-info">
                                <h3>{spot.name}</h3>
                                <p><strong>Location:</strong> {spot.location}</p>
                                <p><strong>Price:</strong> {spot.price}</p>
                                <p>{spot.description}</p>
                                <a
                                    href={spot.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#007bff", textDecoration: "underline" }}
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
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

            {/* Contact Section */}
            <section id="contact-us" style={{ textAlign: "center", padding: "50px 0" }}>
                <h2>Contact Us</h2>
                <p>Email: penangcanvas@gmail.com</p>
                <p>Phone: +6012-3456789</p>
                <p>Follow us: penangcanvas on Instagram | Facebook | YouTube</p>
            </section>
        </div>
    );
}

export default Home;

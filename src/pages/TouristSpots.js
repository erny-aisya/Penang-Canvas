import React from 'react';
import './TouristSpots.css'; // import relevant CSS

const touristSpots = [
    {
        name: 'Penang Hill (Bukit Bendera)',
        location: 'Air Itam, Penang',
        price: 'RM30 (Adult return), RM15 (Child return)',
        operationTime: '6:15 AM - 9:45 PM (Ticket counters)',
        description: 'Penang Hill, also known as Bukit Bendera, is a cool retreat offering panoramic views of the island. Accessible by funicular, it features attractions like the Habitat, a canopy walk, and an abundance of flora and fauna.',
        website: 'http://www.penanghill.gov.my/',
        instagram: 'https://www.instagram.com/penanghillofficial/'
    },
    {
        name: 'George Town',
        location: 'George Town, Penang',
        price: 'Free',
        operationTime: 'Open 24 hours',
        description: 'A UNESCO World Heritage Site, George Town is a cultural mosaic, with colonial architecture, traditional shophouses, vibrant street art, and temples.',
        website: 'https://www.penangtourism.com/',
        facebook: 'https://www.facebook.com/visitpenang',
        instagram: 'https://www.instagram.com/visitpenang/'
    },
    {
        name: 'Penang Bridge',
        location: 'Penang Island to mainland Malaysia',
        price: 'RM8 (Toll fee)',
        operationTime: 'Open 24 hours',
        description: 'Connecting Penang Island to the mainland, the Penang Bridge offers scenic views over the Straits of Malacca.',
        website: 'http://www.ppk.com.my/',
        facebook: 'https://www.facebook.com/penangbridge'
    },
    {
        name: 'Kek Lok Si Temple',
        location: 'Air Itam, Penang',
        price: 'Free (Main temple), RM2 (Pagoda and other attractions)',
        operationTime: '9:00 AM - 5:00 PM',
        description: 'Kek Lok Si is one of Southeast Asia\'s largest Buddhist temples, featuring a towering statue of the Goddess of Mercy, the ornate Pagoda of 10,000 Buddhas, and beautiful gardens.',
        website: 'http://www.kekloksi.org.my/',
        facebook: 'https://www.facebook.com/kekloksi'
    },
    {
        name: 'Penang National Park',
        location: 'Teluk Bahang, Penang',
        price: 'RM10 (Non-Malaysian visitors)',
        operationTime: '9:00 AM - 5:00 PM',
        description: 'Penang National Park spans diverse ecosystems, from lush rainforests to coral reefs. Visitors can hike, visit the lighthouse, explore tropical beaches, or take a boat tour.',
        website: 'http://www.penangnationalpark.gov.my/',
        facebook: 'https://www.facebook.com/penangnationalpark'
    },
    {
        name: 'Cheong Fatt Tze Mansion (Blue Mansion)',
        location: 'Leith Street, George Town, Penang',
        price: 'RM17 (Adult), RM8 (Child)',
        operationTime: '9:30 AM - 5:30 PM',
        description: 'The Blue Mansion is a heritage landmark once owned by Chinese tycoon Cheong Fatt Tze. Known for its distinctive blue color and Peranakan architecture, the mansion offers guided tours.',
        website: 'https://www.cheongfatttzemansion.com/',
        facebook: 'https://www.facebook.com/BlueMansionPenang',
        instagram: 'https://www.instagram.com/cheongfatttzemansion/'
    },
    {
        name: 'Khoo Kongsi',
        location: 'Cannon Square, George Town, Penang',
        price: 'RM10 (Adult), RM5 (Child)',
        operationTime: '9:00 AM - 5:00 PM',
        description: 'Khoo Kongsi is an elaborate clan house of the Khoo family, showcasing magnificent Chinese architecture. Visitors can learn about the Hokkien Chinese community in Penang.',
        website: 'https://www.khookongsi.com.my/'
    },
    {
        name: 'Penang Butterfly Farm',
        location: 'Teluk Bahang, Penang',
        price: 'RM25 (Adult), RM18 (Child)',
        operationTime: '9:00 AM - 5:00 PM',
        description: 'The Penang Butterfly Farm houses over 4,000 butterflies and a variety of exotic insects, reptiles, and plants.',
        website: 'https://www.butterflyfarm.com.my'
    },
    {
        name: 'Penang Street Art',
        location: 'George Town, Penang',
        price: 'Free',
        operationTime: 'Open 24 hours',
        description: 'Penang Street Art is an outdoor art gallery with murals and interactive sculptures dotted around George Town, mainly by artist Ernest Zacharevic.',
        instagram: 'https://www.instagram.com/penangstreetart/'
    },
    {
        name: 'Gurney Drive',
        location: 'Gurney, Penang',
        price: 'Free',
        operationTime: 'Open 24 hours',
        description: 'Gurney Drive is a scenic waterfront promenade, famous for its hawker food, upscale shopping malls, and vibrant nightlife.',
        facebook: 'https://www.facebook.com/gurneydrivepenang'
    },
    {
        name: 'Batu Ferringhi Beach',
        location: 'Batu Ferringhi, Penang',
        price: 'Free',
        operationTime: 'Open 24 hours',
        description: 'Batu Ferringhi is a popular beach destination known for water sports, sandy shores, and lively night markets.',
    },
    {
        name: 'Penang Peranakan Mansion',
        location: 'Church Street, George Town, Penang',
        price: 'RM20 (Adult), RM10 (Child)',
        operationTime: '9:30 AM - 5:00 PM',
        description: 'A beautifully restored mansion showcasing the culture of the Peranakan (Straits Chinese) community.',
    },
    {
        name: 'Armenian Street',
        location: 'George Town, Penang',
        price: 'Free',
        operationTime: 'Open 24 hours',
        description: 'Armenian Street is known for its street art, including murals by Ernest Zacharevic, reflecting Penang’s colonial past.',
    },
    {
        name: 'Tropical Spice Garden',
        location: 'Teluk Bahang, Penang',
        price: 'RM27 (Adult), RM12 (Child)',
        operationTime: '9:00 AM - 6:00 PM',
        description: 'This garden showcases over 500 species of spices and herbs, offering tours that explain spice cultivation and their impact on Penang’s culinary heritage.',
        website: 'https://www.tropicalspicegarden.com'
    },
    {
        name: 'Penang Hill Habitat',
        location: 'Penang Hill, Air Itam, Penang',
        price: 'RM45 (Adult), RM25 (Child)',
        operationTime: '9:00 AM - 5:00 PM',
        description: 'The Hill Habitat offers eco-tourism experiences like the canopy walk, bird-watching, and exploring the flora and fauna of Penang’s highlands.',
        website: 'https://www.penanghillhabitat.my'
    },
];

const TouristSpotCard = ({ spot }) => (
    <div className="tourist-card">
        <h2>{spot.name}</h2>
        <p><strong>Location:</strong> {spot.location}</p>
        <p><strong>Price:</strong> {spot.price}</p>
        <p><strong>Operation Time:</strong> {spot.operationTime}</p>
        <p>{spot.description}</p>
        <div className="links">
            <a href={spot.website} target="_blank" rel="noopener noreferrer">Official Website</a>
            {spot.instagram && <a href={spot.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
            {spot.facebook && <a href={spot.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>}
        </div>
    </div>
);

const TouristSpots = () => {
    return (
        <div className="tourist-spots">
            {touristSpots.map((spot, index) => (
                <TouristSpotCard key={index} spot={spot} />
            ))}
        </div>
    );
};

export default TouristSpots;

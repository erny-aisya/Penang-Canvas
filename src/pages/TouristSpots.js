import React from 'react';
import './TouristSpots.css';

const TouristSpots = () => {
    const touristSpots = [
        {
            name: 'Escape Penang',
            location: 'Teluk Bahang, Penang',
            price: 'RM 98 (Adult), RM 78 (Child)',
            description: 'Escape Penang offers a range of thrilling outdoor adventures, from zip-lining and go-karting to water-based activities like the water slide and wave pool. It is an exciting destination for families and adventure seekers, featuring a mix of physical challenges in a beautiful natural setting.',
            image: 'https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/324/2018/07/30014751/ESCAPE_DLoh-3994.jpg',
            website: 'https://www.escape.my/pg?gad_source=1&gclid=CjwKCAiA-Oi7BhA1EiwA2rIu28iHIvAfGaJEL_FipSIqehqx6OEXf7yIBqxl3domZkNcI6SulyWMNhoC0BsQAvD_BwE'
        },
        {
            name: 'Penang Hill',
            location: 'Air Itam, Penang',
            price: 'RM 30 (Adult), RM 15 (Child)',
            description: 'Penang Hill offers breathtaking panoramic views of the island. It’s known for its cool climate and lush greenery, making it a great escape from the tropical heat. The hill also has heritage trails, gardens, and historical sites, including The Habitat and a colonial-era colonial railway.',
            image: 'https://image-tc.galaxy.tf/wijpeg-1ivbwuw6lhpa32r8y1mscvplx/penang-hill_standard.jpg?crop=112%2C0%2C1777%2C1333',
            website: 'https://www.penanghill.gov.my/index.php/en/'
        },
        {
            name: 'Penang Peranakan Mansion',
            location: '29, Church Street, George Town, Penang',
            price: 'RM 20 (Adult), RM 10 (Child)',
            description: 'A museum showcasing the culture of the Peranakans. Visitors can explore the mansion, filled with antique furniture, intricate decorations, and historical artifacts that reflect the opulent lifestyle of the Peranakan community.',
            image: 'https://thesmartlocal.my/wp-content/uploads/2022/09/image16-5.jpg',
            website: 'http://www.pinangperanakanmansion.com.my/'
        },
        {
            name: 'Kek Lok Si Temple',
            location: 'Air Itam, Penang',
            price: 'Free admission',
            description: 'Kek Lok Si Temple is one of the largest Buddhist temples in Southeast Asia. It features an impressive blend of Chinese, Thai, and Burmese architectural styles. The temple complex includes beautiful gardens, a towering statue of the Goddess of Mercy, and panoramic views of Penang.',
            image: 'https://live.staticflickr.com/65535/51878941270_73246f0794_b.jpg',
            website: 'https://kekloksitemple.com/'
        },
        {
            name: 'Entopia',
            location: 'Teluk Bahang, Penang',
            price: 'RM 60 (Adult), RM 45 (Child)',
            description: 'Entopia is a tropical sanctuary that’s home to thousands of butterflies, reptiles, and insects. Visitors can explore the enchanting Butterfly Garden and other interactive exhibits, making it a fun and educational experience for all ages.',
            image: 'https://www.entopia.com/wp-content/uploads/2017/05/website-main-copy.jpg',
            website: 'https://www.entopia.com/'
        },
        {
            name: 'Armenian Street',
            location: 'George Town, Penang  ',
            price: 'Free admission',
            description: 'Armenian Street is a heritage street in George Town, famous for its colorful street art, quaint shops, and historic buildings. The street showcases Penang\'s rich cultural and architectural diversity, making it a must-visit for history buffs and art lovers.',
            image: 'https://www.medisata.com/assets/images/wisata/armenian-street-georgetown.jpg',
        },
        {
            name: 'Cheong Fatt Tze - The Blue Mansion',
            location: '14, Leith Street, George Town, Penang',
            price: 'RM 17 (Adult), RM 8.50 (Child)',
            description: 'The Blue Mansion is a grand heritage building, once home to Chinese tycoon Cheong Fatt Tze. It features distinctive blue walls and intricate design elements, blending Eastern and Western architectural styles. The mansion offers guided tours to explore its history and secrets.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/9c/78/6b/the-mansion-at-dusk.jpg?w=700&h=-1&s=1',
        },
        {
            name: 'The Habitat Penang Hill',
            location: 'Penang Hill, Air Itam, Penang ',
            price: 'RM 50 (Adult), RM 30 (Child)',
            description: 'The Habitat Penang Hill offers visitors an immersive nature experience with its eco-friendly walking trails, canopy walk, and conservation-focused activities. The elevated location provides stunning views of Penang’s natural landscape, while the park offers opportunities for bird-watching and learning about local flora and fauna.  ',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/fb/10/15/the-habitat-penang-hill.jpg?w=1200&h=-1&s=1',
            website: 'https://thehabitat.my/'
        },
        {
            name: 'Chew Jetty',
            location: 'George Town, Penang',
            price: 'Free admission',
            description: 'Chew Jetty is a unique waterfront community of wooden stilt houses, built by Chinese immigrants in the 19th century. The site offers visitors a glimpse into the lives of the seafaring community, complete with picturesque views of the waterfront and the chance to stroll along the wooden walkways.',
            image: 'https://image-tc.galaxy.tf/wijpeg-4v3h3l0khh4vhzs3ql8hu3l5t/chew-jetty-penang-places-of-interest-thumbnail-w600.jpg',
        },
        {
            name: 'Penang Botanical Garden',
            location: 'Jalan Kebun Bunga, Penang ',
            price: 'Free admission',
            description: 'Penang Botanical Garden is a lush paradise located at the foot of Penang Hill, home to a wide variety of tropical plants. The park features well-maintained walking trails, water features, and beautiful flowering plants, making it a peaceful escape from the city\'s hustle and bustle.',
            image: 'https://d1bb1mccaihlpl.cloudfront.net/variants/kxllm7xdv3u71t5atsric76sj0cr/5495488087431af32265aaaaa1b8a274541d70555aa4d7c01d8d0fed27e7c152',
            website: 'https://botanicalgardens.penang.gov.my/index.php/en/pengenalan/sejarah'
        },
        {
            name: 'Tropical Spice Garden',
            location: 'Teluk Bahang, Penang',
            price: 'RM 30 (Adult), RM 15 (Child)',
            description: 'Tropical Spice Garden is a lush garden that showcases over 500 species of tropical plants, including various herbs and spices. Visitors can explore the garden, participate in spice tours, and enjoy workshops on using spices for cooking and wellness.',
            image: 'https://images.squarespace-cdn.com/content/v1/6075b5ceb189503bf78fc262/1692681832017-XC9WNGL38J37T5Z5X893/DSCF2009.jpg',
            website: 'https://tropicalspicegarden.com/'
        },
        {
            name: 'Khoo Kongsi Museum',
            location: '18, Cannon Square, George Town, Penang ',
            price: 'RM 10 (Adult), RM 3 (Child)',
            description: 'Khoo Kongsi is a stunning Chinese clan house and museum. The heritage building is decorated with intricate carvings, showcasing the wealth and history of the Khoo family, one of the wealthiest Chinese clans in Penang. It’s a place of historical and architectural significance.  ',
            image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2c/f1/d2.jpg',
            website: 'https://www.khookongsi.com.my'
        },
        {
            name: 'The TOP Komtar Penang',
            location: 'Komtar Tower, George Town, Penang',
            price: 'RM 50 (Adult), RM 30 (Child)',
            description: 'The TOP Komtar Penang is an entertainment and observation complex located in the heart of George Town. It offers stunning panoramic views of the island, as well as attractions like a rainbow skywalk, virtual reality experiences, and more.',
            image: 'https://cdn.getyourguide.com/img/tour/1ea6e73b3deb9bc106447d31e334b45f6be2e753671939db08eebd00b620757d.jpg/98.jpg',
            website: 'https://thetop.com.my'
        },
        {
            name: 'Kampung Agong',
            location: 'Kepala Batas, Penang ',
            price: 'RM 15 (Adult), RM 10 (Child)',
            description: 'Kampung Agong is a cultural and eco-tourism village offering a glimpse into traditional Malay rural life. Visitors can explore paddy fields, rice mills, and heritage houses, and enjoy various cultural activities like batik painting and traditional games.',
            image: 'https://petitguru.s3.amazonaws.com/463/82.jpg',
            website: 'https://kampungagong.com'
        },
        {
            name: 'Penang Floating Mosque',
            location: 'Tanjung Bungah, Penang ',
            price: 'Free admission',
            description: 'The Penang Floating Mosque is a stunning mosque located on the waterfront of Tanjung Bungah. It is known for its unique design that appears to float on the sea during high tide. The mosque offers a peaceful atmosphere for worship and reflection, with beautiful ocean views.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Penang_Malaysia_Sunrise_at_Tanjong_Bungah_Mosque-04and_%284461552447%29.jpg',

        },
        {
            name: 'Kapitan Keling Mosque',
            location: 'George Town, Penang',
            price: 'Free admission',
            description: 'Kapitan Keling Mosque is one of the oldest and most significant mosques in Penang, built in the 19th century by Indian Muslim traders. The mosque features traditional Islamic architecture, with an impressive dome and minaret. It’s a cultural landmark that offers visitors a chance to explore the rich history of the Muslim community in Penang.',
            image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/41000/41296-Kapitan-Keling-Mosque.jpg',
        },
        {
            name: 'Penang Bird Park',
            location: 'Seberang Jaya, Penang',
            price: 'RM 25 (Adult), RM 15 (Child)',
            description: 'Penang Bird Park is the largest bird park in Malaysia, home to over 300 species of birds from around the world. Visitors can stroll through the park and enjoy bird-watching in various themed zones, including aviaries, gardens, and lakes.',
            image: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2000/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/udb3csygb7fpgotbf2d4/PenangBirdParkTicket-KlookMalaysia.jpg',
            website: 'https://www.penangbirdpark.com/'
        },
        {
            name: 'Kampung Agong',
            location: 'Kepala Batas, Penang ',
            price: 'RM 15 (Adult), RM 10 (Child)',
            description: 'Kampung Agong is a cultural and eco-tourism village offering a glimpse into traditional Malay rural life. Visitors can explore paddy fields, rice mills, and heritage houses, and enjoy various cultural activities like batik painting and traditional games.',
            image: 'https://petitguru.s3.amazonaws.com/463/82.jpg',
            website: 'https://kampungagong.com'
        },
        {
            name: 'P. Ramlee House',
            location: 'No. 4, Jalan P. Ramlee, George Town, Penang',
            price: 'Free admission',
            description: 'P. Ramlee House is the former home of Malaysia’s legendary film star, P. Ramlee. The house has been preserved as a museum, offering visitors an insight into his life and career. It showcases memorabilia from his movies, personal belongings, and his contribution to the Malaysian film industry.',
            image: 'https://cdn.cloudjoi.com/79069/2023-01-03.jpeg',
        },
    ];

    return (
        <div className="tourists-spots">
            <h1 style={{ textAlign: "center", margin: "20px 0", color: "white" }}>🛵Explore Penang💨</h1>
                <div className="tourists-boxes">
                {touristSpots.map((spot, index) => (
                    <div key={index} className="tourists-box">
                        <img src={spot.image} alt={spot.name} className="tourists-image" />
                        <h2>{spot.name}</h2>
                        <p><strong>Location:</strong>{spot.location}</p>
                        <p><strong>Price:</strong>{spot.price}</p>
                        <p><strong>Description:</strong>{spot.description}</p>
                        {spot.website && (
                            <button
                                className="visit-button"
                                onClick={() => window.open(spot.website, '_blank', 'noopener noreferrer')}
                            >
                                Visit Website
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TouristSpots;

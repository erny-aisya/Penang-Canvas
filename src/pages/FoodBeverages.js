import React from "react";
import "./FoodBeverages.css";

const FoodBeverages = () => {
    const FoodBeverages = [
        {
            name: "1. Dean Maju Nasi Kandar",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/119184241_155581916182862_1609896682793379990_n.jpg",
            description: "Deen Maju Nasi Kandar is a must-try for its vibrant Fish Head Curry and other favorites.",
            address: "170, Jalan Gurdwara,George Town, Pulau Pinang",
            hours: "Saturday to Thursday (12 – 10 pm), Closed on Fridays",
            status: "Muslim-owned",
            links: [
                { label: "Facebook", url: "https://www.facebook.com/penangchendul/" },
                { label: "Instagram", url: "https://www.instagram.com/explore/locations/1178173762240393/penang-road-famous-teochew-chendul-1/" }, { label: "Website", url: "https://chendul.my/" },
            ],
        },
        {
            name: "2. Penang Road famous Teochew Chendul",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/43723011_711534795871362_8147595502163066880_n.jpg",
            description: "The iconic Teochew cendol, a sweet coconut milk dessert with Gula Melaka.",
            address: "27-29, Lebuh Keng Kwee, 10100 George Town, Pulau Pinang",
            hours: "Monday to Sunday (10 am – 5 pm)",
            status: "Pork-free",
            links: [
                 { label: "Website", url: "https://chendul.my/" },
                 { label: "Facebook", url: "https://facebook.com" },
            ],
        },
        {
            name: "3. Nasi Padang Minang",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/403602140_10160337996557620_2682311390843253019_n.jpg",
            description: "Nasi Padang Minang offers delicious dishes like Ikan Patin Asam Pedas and Sambal Tofu.",
            address: "92, Jalan Transfer, George Town, 10050 George Town, Pulau Pinang",
            hours: "Saturday to Thursday (11 am – 4 pm), Closed on Fridays",
            status: "Muslim-owned",
            links: [
            { label: "Facebook", url: "https://www.facebook.com/profile.php?id=100057028677230" },
            { label: "Instagram", url: "https://www.instagram.com/explore/locations/270452340/nasi-padang-minang/" },
            ],
        },
        {
            name: "4. Ali Nasi Lemak Daun Pisang",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/345165497_765018388336598_5213128284398885048_n.jpg", // Replace with the actual image path or URL
            description: "Ali Nasi Lemak Daun Pisang is a Michelin-listed stall known for its scrumptious nasi lemak.",
            address: "Beach St, Georgetown, 10300 George Town, Penang",
            hours: "Monday to Friday (7 am – 2 pm), Closed on Saturdays & Sundays",
            status: "Muslim-owned",
            links: [
            { label: "Facebook", url: "https://www.facebook.com/pages/Ali-nasi-lemak-daun-Pisang/2058587194226171" },
            { label: "Instagram", url: "https://www.instagram.com/alinasilemakdaunpisang/" },
            ],
        },
        {
            name: "5. Hameed Pata Mee Sotong",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/44295142_1106890389472338_2910114895654158782_n.jpg",
            description: "Hameed Pata Mee Sotong is famous for its incredible mee sotong—come hungry!",
            address: "5, Esplanade Park, Lebuh Light, 10300 George Town",
            hours: "Monday to  & Saturday (11.30 am – 8 pm), Closed on Sundays ",
            status: "Muslim-owned",
            links: [
            { label: "Facebook", url: "https://www.facebook.com/profile.php?id=143625669023024&_rdr" },
            { label: "Instagram", url: "https://www.instagram.com/explore/locations/1220634/hameed-pata-special-mee-sotong/?hl=en" },
            ],
        },
        {
            name: "6. Teksen Restaurant",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/403825834_842736524301199_3190217481496216607_n.jpg",
            description: "Teksen serves authentic Chinese food like Curry Stingray and has a Michelin award for quality.",
            address: "18, Lebuh Carnarvon, George Town, 10100 George Town, Pulau Pinang",
            hours: "Friday to Monday (12 – 2 pm, 5.30 – 8.30 pm), Closed on Tuesdays to Thursdays   ",
            status: "Non-halal",
            links: [
            { label: "Facebook", url: "https://www.facebook.com/TekSenRestaurant/" },
            { label: "Instagram", url: "https://www.instagram.com/teksenrestaurant/?hl=en" },
             ],
        },
        {
            name: "7. Wan Tan Mee",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/72489463_409165496427325_4058397660696607240_n.jpg",
            description: "Enjoy springy wan tan mee at Chulia Street, topped with char siew and crispy pork lard.",
            address: "Chulia St, Georgetown, 10450 George Town, Penang",
            hours: "Monday to Sunday (4.30 – 10.30 pm)    ",
            status: "Non-halal",
            links: [
            { label: "Facebook", url: "https://www.facebook.com/pages/Chulia-Street-Penang/147697721955378" },
            { label: "Instagram", url: "https://www.instagram.com/explore/locations/307485829720189/chulia-street-night-hawker-stalls/" },
            ],
        },
        {
            name: "8. Hot Bowl White Curry Mee",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/310526798_1177495769499018_3679940370096344177_n.jpg",
            description: "Hot Bowl White Curry Mee, a Michelin Bib Gourmand winner, features a rich coconut broth.",
            address: "58C, Jalan Rangoon, 10400 George Town, Pulau Pinang ",
            hours: "Tuesday, Thursday to Sunday (8 am – 3 pm), Closed on Mondays & Wednesdays",
            status: "Non-halal",
            links: [
            { label: "Facebook", url: "https://www.facebook.com/profile.php?id=219305594763529&_rdr" },
            { label: "Instagram", url: "https://www.instagram.com/explore/locations/252616404/hot-bowl-white-curry-mee/" },
            ],
        },
        {
            name: "9. Union Street Famous Kareem Pasembur Rojak",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/345422286_160328857001540_7781646465132763070_n.jpg",
            description: "Rojak here boasts a tasty blend of fruits and toppings in a sweet peanut sauce.",
            address: "7, Lebuh Union, George Town, 10200 George Town, Pulau Pinang ",
            hours: "Monday to Saturday (11 am – 6 pm), Closed on Sundays ",
            status: "Muslim-owned",
            links: [
            { label: "Facebook", url: "https://www.facebook.com/profile.php?id=165477523515690&_rdr" },
            ],
        },
        {
            name: "10. Siam Road Charcoal Char Koay Teow",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/Screen-Shot-2024-01-05-at-1.12.06-PM.png",
            description: "Siam Road Charcoal Char Kuey Teow is famous for its wok hei flavors and savory ingredients.",
            address: "82, Jalan Siam, George Town, 10400 George Town, Pulau Pinang",
            hours: "Tuesday to Saturday (12 – 6 pm), Closed on Sundays & Mondays ",
            status: "Non-halal",
            links: [
            { label: "Instagram", url: "https://www.instagram.com/explore/locations/225195020/siam-road-char-koay-teow/" },
            ],
        },
        {
            name: "11. Ju Heng Tom Yum",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/108174690_306596930482281_7630689073632287263_n.jpg",
            description: "Penang is a top street food destination; don’t miss these must-try spots! Let’s eat!",
            address: "Jalan Raja Uda, Taman Bunga Raya, 13000 Butterworth, Pulau Pinang ",
            hours: "Wednesday to Monday (5.30 pm – 12 am), Closed on Tuesdays",
            status: "Non-halal",
            links: [
            { label: "Instagram", url: "https://www.instagram.com/juhengtomyamnoodle/?hl=en" },
            { label: "Facebook", url: "https://www.facebook.com/juhengtomyam99/" },
            ],
        },
        {
            name: "12. Flavours Wan Than Mee",
            image: "https://penangfoodie.sgp1.digitaloceanspaces.com/2024/01/Snapseed-175.jpg",
            description: "At 3 Flavours Wan Tan Mee, enjoy sesame, spicy, and dark soy sauce noodles with chestnut wan tan, char siu, and veggies for a flavor-packed feast!",
            address: "47, Pengkalan Weld, George Town, 10300 George Town, Pulau Pinang ",
            hours: "Wednesday to Monday (7.30 am – 12 pm), Closed on Tuesdays ",
            status: "Non-halal",
        },
];


    return (
        <div className="foods-page">
            <div>
                <h1 style={{ textAlign: "center", margin: "20px 0" }}>🍴 Explore Penang's Culinary Delights 🍛</h1>
                <div className="foods-boxes">
                    {FoodBeverages.map((spot, index) => (
                        <div key={index} className="foods-box">
                            <img src={spot.image} alt={spot.name} className="foods-image"/>
                            <div className="foods-info">
                                <h2>{spot.name}</h2>
                                <p><strong>Description:</strong> {spot.description}</p>
                                <p><strong>Address:</strong> {spot.address}</p>
                                <p><strong>Opening Hours:</strong> {spot.hours}</p>
                                <p><strong>Status:</strong> {spot.status}</p>
                                {Array.isArray(spot.links) && spot.links.length > 0 && (
                                    <div className="links">
                                        {spot.links.map((link, linkIndex) => (
                                            <a
                                                key={linkIndex}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="website-link"
                                            >
                                                {link.label || "Visit"}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FoodBeverages;

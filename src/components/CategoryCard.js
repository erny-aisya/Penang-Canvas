import React from "react";

const CategoryCard = ({ title, description, image }) => {
    return (
        <div style={{ border: "1px solid #ddd", borderRadius: "5px", margin: "10px", padding: "10px" }}>
            <img src={image} alt={title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default CategoryCard;

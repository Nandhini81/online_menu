// MenuItemCard.jsx
import React from "react";
import "../styles/MenuItemCard.css"; // Assuming you have a CSS file for styling


function MenuItemCard({ item }) {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Category: {item.category}</p>
      <p>Price: ₹{item.price}</p>
      <p>{item.isVeg ? "🟢 Veg" : "🔴 Non-Veg"}</p>
    </div>
  );
}

export default MenuItemCard;

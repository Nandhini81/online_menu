import React, { useState } from "react";
import "/src/styles/Navbar.css";

function Navbar({ categories, onCategorySelect, onSortSelect }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("");
  const [showSort, setShowSort] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  const handleSortClick = (order) => {
    setSelectedSort(order);
    onSortSelect(order);
    setShowSort(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">🍽️ <span>Foodopia</span></div>

      <div className="category-tabs">
        <button
          className={`tab-btn ${selectedCategory === "All" ? "active" : ""}`}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </button>
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`tab-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
        {/* ✅ Added Veg and Non-Veg filter buttons */}
        <button
          className={`tab-btn ${selectedCategory === "Veg" ? "active" : ""}`}
          onClick={() => handleCategoryClick("Veg")}
        >
          🟢 Veg
        </button>
        <button
          className={`tab-btn ${selectedCategory === "Non-Veg" ? "active" : ""}`}
          onClick={() => handleCategoryClick("Non-Veg")}
        >
          🔴 Non-Veg
        </button>
      </div>

      <div className="sort-section">
        <button className="sort-btn" onClick={() => setShowSort(!showSort)}>
          ↕️ Sort By
        </button>
        {showSort && (
          <div className="sort-options">
            <button
              className={selectedSort === "asc" ? "active" : ""}
              onClick={() => handleSortClick("asc")}
            >
              Price: Low to High
            </button>
            <button
              className={selectedSort === "desc" ? "active" : ""}
              onClick={() => handleSortClick("desc")}
            >
              Price: High to Low
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

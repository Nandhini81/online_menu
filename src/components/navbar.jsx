import React, { useState } from "react";

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
    <>
      <style>{`
        .navbar {
          background: linear-gradient(90deg, #ff9a8b, #ff6a88, #ff99ac);
          padding: 15px 30px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          border-radius: 0 0 12px 12px;
          font-family: 'Segoe UI', sans-serif;
        }

        .navbar-brand {
          font-size: 1.8rem;
          font-weight: bold;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .navbar-brand span {
          color: #fffbea;
          font-style: italic;
          font-weight: 600;
        }

        .category-tabs {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin: 10px 0;
        }

        .tab-btn {
          background-color: #fffbea;
          color: #333;
          padding: 8px 14px;
          border-radius: 8px;
          border: none;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        .tab-btn:hover {
          background-color: #fff0e5;
          color: #c0392b;
        }

        .tab-btn.active {
          background-color: #c0392b;
          color: white;
          font-weight: bold;
        }

        .sort-section {
          position: relative;
        }

        .sort-btn {
          background-color: #fff;
          padding: 8px 14px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 500;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .sort-options {
          position: absolute;
          top: 40px;
          right: 0;
          background-color: white;
          border-radius: 8px;
          padding: 8px 0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
          z-index: 100;
          display: flex;
          flex-direction: column;
        }

        .sort-options button {
          padding: 8px 16px;
          border: none;
          background: none;
          text-align: left;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .sort-options button:hover {
          background-color: #fceaea;
          color: #c0392b;
        }
      `}</style>

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
    </>
  );
}

export default Navbar;

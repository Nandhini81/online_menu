import { useState } from "react";
import menuList from "../data/menuItems";
import "../styles/HomePage.css";
import MenuItemCard from "../components/MenuItemCard";
import Navbar from "../components/navbar"; // ✅ Import Navbar component

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");

  const categories = ["All", "Veg", "Non-Veg", ...new Set(menuList.map(item => item.category))];


  const filteredMenu = menuList
  .filter(item => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Veg") return item.isVeg === true;
    if (selectedCategory === "Non-Veg") return item.isVeg === false;
    return item.category === selectedCategory;
  })
  .sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });


  const bgClass = `homepage-container bg-${selectedCategory.toLowerCase().replace(/\s/g, "")}`;

  return (
    <div className={bgClass}>
      {/* ✅ Use external Navbar */}
      <Navbar
        categories={categories.slice(1)}
        onCategorySelect={setSelectedCategory}
        onSortSelect={setSortOrder}
      />

      <div className="menu-grid">
        {filteredMenu.map(item => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;

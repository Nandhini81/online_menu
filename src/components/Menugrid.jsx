import React from "react";
import MenuItemCard from "./MenuItemCard";

const MenuGrid = ({ items }) => {
  return (
    <div className="p-4">
      <div className="flex justify-center sm:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.length > 0 ? (
            items.map(item => <MenuItemCard key={item.id} item={item} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">No items found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuGrid;

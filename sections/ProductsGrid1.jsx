"use client";

import React, { useState, useRef } from "react";
import { ProductsGrid1 } from "../constants";
import styles from "../styles";

const ProductsGridcom1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const productRefs = useRef({});

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.trim().toLowerCase());
  };

  const handleSearch = () => {
    if (searchTerm) {
      const firstMatchKey = Object.keys(productRefs.current).find((key) =>
        key.toLowerCase().includes(searchTerm)
      );

      if (firstMatchKey && productRefs.current[firstMatchKey]) {
        productRefs.current[firstMatchKey].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* 🔥 FIXED SEARCH BAR */}
      <div className="fixed top-0 left-0 w-full h-16 bg-gray-900 p-4 z-50 shadow-md flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="🔍 Search products..."
          className="p-3 border-2 border-gray-300 rounded-lg w-full max-w-lg text-black"
          onChange={handleSearchChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()} // ✅ Press Enter to scroll
        />
        <button
          onClick={handleSearch} // ✅ Click to scroll
          className="p-3 bg-blue-600 text-white rounded-lg"
        >
          Enter
        </button>
      </div>

      {/* EXTRA PADDING TO PREVENT OVERLAP */}
      <div className="pt-20">
        {ProductsGrid1.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl text-white font-bold mb-2 text-center">
              {section.category}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center max-w-[900px] mx-auto mb-20">
              {section.items.map((item, i) => {
                const isMatch = item.name.toLowerCase().includes(searchTerm);

                return (
                  <div
                    key={i}
                    ref={(el) => (productRefs.current[item.name] = el)}
                    className={`p-4 border rounded-lg shadow-md bg-white text-center max-w-[240px] w-fit mx-auto ${
                      searchTerm && !isMatch ? "opacity-40" : "opacity-100"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name || "Product Image"}
                      className="w-50 h-40 object-cover mx-auto rounded-md mb-3"
                    />
                    <p className="font-medium text-lg">{item.name}</p>
                    <div
                      className="text-gray-700 text-sm mx-auto"
                      dangerouslySetInnerHTML={{
                        __html: item.description.replace(/\./g, ".<br/>"),
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsGridcom1;

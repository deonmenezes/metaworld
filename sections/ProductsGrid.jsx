'use client';

import React from "react";
import { ProductsGrid } from "../constants";
import styles from '../styles'; // ✅ Import styles

const ProductsGridcom = () => {
  return (
    <div className={styles.container}>
      {ProductsGrid.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl text-white font-bold mb-2">{section.category}</h2>
          {section.pp && <p className="text-white text-sm mb-4">{section.pp}</p>}
          
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.items.map((item, i) => (
              <div key={i} className="p-4 border rounded-lg shadow-md bg-white text-center">
                <img 
                src={item.image} 
                alt={item.name || "Product Image"} 
                className="w-full h-auto object-cover mx-auto rounded-md mb-8"
            />
                <p className="font-medium text-lg">{item.name}</p>
                <div className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: item.description.replace(/\./g, ".<br/>") }} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGridcom;

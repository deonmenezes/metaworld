'use client';

import React from "react";
import { ProductsGrid1 } from "../constants";
import styles from '../styles'; // ✅ Import styles

const ProductsGridcom1 = () => {
  return (
    <div className={styles.container}>
      {ProductsGrid1.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl text-white font-bold mb-2 text-center ">{section.category}</h2>
          {section.pp && (
     <div className="flex justify-center mb-10">
     <p
       className="text-left text-white text-lg mb-4 w-1/2 break-words"
       dangerouslySetInnerHTML={{ __html: section.pp.replace(/\n/g, "<br />") }}
     />
   </div>
)}
          
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center max-w-[900px] mx-auto mb-20">
  {section.items.map((item, i) => (
    <div key={i} className="p-4 border rounded-lg shadow-md bg-white text-center max-w-[240px] w-fit mx-auto">
      <img 
        src={item.image} 
        alt={item.name || "Product Image"} 
        className="w-50 h-40 object-cover mx-auto rounded-md mb-3"
      />
      <p className="font-medium text-lg">{item.name}</p>
      <div className="text-gray-700 text-sm  mx-auto" dangerouslySetInnerHTML={{ __html: item.description.replace(/\./g, ".<br/>") }} />
      </div>
  ))}
</div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGridcom1;

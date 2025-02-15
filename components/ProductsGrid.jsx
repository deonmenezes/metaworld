
    const ProductsGrid = [
      {
        category: "Electronics",
        items: ["Laptop", "Smartphone", "Headphones"],
      },
      {
        category: "Clothing",
        items: ["T-Shirt", "Jeans", "Jacket"],
      },
      {
        category: "Home Appliances",
        items: ["Microwave", "Refrigerator", "Washing Machine"],
      },
      {
        category: "Books",
        items: ["Fiction", "Non-Fiction", "Comics"],
      },
    ];
  
    return (
      <div className="container mx-auto p-4">
        {products.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-bold mb-4">{section.category}</h2>
            <div className="grid grid-cols-3 gap-4">
              {section.items.map((item, i) => (
                <div key={i} className="p-4 border rounded-lg shadow-md bg-white text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  

  export default ProductsGrid;
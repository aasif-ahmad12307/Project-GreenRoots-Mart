
import React, { useState, useEffect } from 'react';

const BrowseProduct = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Organic Tomatoes',
      price: '₹60 / kg',
      description: 'Fresh, locally grown organic tomatoes.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Farm Fresh Eggs',
      price: '₹120 / dozen',
      description: 'Organic, free-range eggs directly from the farm.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Fresh Lettuce',
      price: '₹40 / head',
      description: 'Crisp, green lettuce harvested with care.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Potatoes',
      price: '₹30 / kg',
      description: 'Quality potatoes sourced directly from local farms.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Onions',
      price: '₹45 / kg',
      description: 'Fresh onions perfect for any meal.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Green Peppers',
      price: '₹70 / kg',
      description: 'Locally grown green peppers with a fresh taste.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      name: 'Carrots',
      price: '₹50 / kg',
      description: 'Crunchy and fresh carrots, ideal for salads.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      name: 'Cauliflower',
      price: '₹60 / head',
      description: 'Organically grown cauliflower for healthy meals.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 9,
      name: 'Spinach',
      price: '₹40 / bunch',
      description: 'Fresh spinach rich in nutrients.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 10,
      name: 'Cucumbers',
      price: '₹35 / kg',
      description: 'Cool and refreshing cucumbers from local farms.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  

  return (
    <div className="bg-green-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-8">Browse Products</h1>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold text-green-700">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <button className="mt-4 w-full bg-green-300 text-white py-2 rounded-md hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseProduct;

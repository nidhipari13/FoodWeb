import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToCart } = useCart();

  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      category: "pizza",
      price: 18.99,
      image: 'https://images.pexels.com/photos/32872596/pexels-photo-32872596.jpeg',
      description: "Fresh tomatoes, mozzarella, basil, and olive oil",
      popular: true
    },
    {
      id: 2,
      name: "Classic Burger",
      category: "burgers",
      price: 15.99,
      image: 'https://images.pexels.com/photos/33918469/pexels-photo-33918469.jpeg',
      description: "Beef patty, lettuce, tomato, onion, and special sauce",
      popular: false
    },
    {
      id: 3,
      name: "Caesar Salad",
      category: "salads",
      price: 12.99,
      image: 'https://images.pexels.com/photos/2097091/pexels-photo-2097091.jpeg',
      description: "Romaine lettuce, croutons, parmesan, caesar dressing",
      popular: false
    },
    {
      id: 4,
      name: "Samosa",
      category: "Snacks / Street Food",
      price: 16.99,
      image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
      description: "Crunchy snack stuffed with spiced potatoes.",
      popular: true
    },
    {
      id: 5,
      name: "Tawa & Pav Delights",
      category: "Dabeli",
      price: 20.99,
      image: 'https://media.istockphoto.com/id/2173847336/photo/dabeli-a-spicy-indian-street-food-made-with-a-potato-filling-tamarind-chutney-and-sev-served.jpg?b=1&s=612x612&w=0&k=20&c=yr8d4JaCRmrkoF801neWcmPEXvkV0tO9fxK7_M4862s=',
      description: "Pepperoni, mozzarella, tomato sauce",
      popular: true
    },
    {
      id: 6,
      name: "Pani Puri (Golgappa)",
      category: "Chaat Specials",
      price: 14.99,
      image: 'https://images.pexels.com/photos/32799490/pexels-photo-32799490.jpeg',
      description: "Hollow puris filled with spicy, tangy water.",
      popular: false
    },
    {
      id: 7,
      name: "Spring Roll",
      category: "Starters",
      price: 13.99,
      image: 'https://images.pexels.com/photos/4105288/pexels-photo-4105288.jpeg',
      description: "Crispy rolls filled with spiced veggies.",
      popular: true
    },
    {
      id: 8,
      name: "Veg Hakka Noodles",
      category: "Noodles & Rice",
      price: 17.99,
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
      description: "Stir-fried noodles with fresh vegetables.",
      popular: false
    },
    {
      id: 9,
      name: "Pasta",
      category: "White Sauce Pasta",
      price: 24.99,
      image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg',
      description: "Creamy pasta cooked in rich cheese and white sauce.",
      popular: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'burgers', name: 'Burgers', icon: '🍔' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Delicious Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients and authentic recipes
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-500 shadow-md'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="card p-6 relative overflow-hidden group">
              {item.popular && (
                <div className="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}
              
              <div className="text-center mb-4">
                <div className="mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-xl" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-500">
                  ${item.price}
                </span>
                <button 
                  onClick={() => addToCart(item)}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Special Offer!</h3>
          <p className="text-xl mb-6">Order 2 or more main dishes and get 20% off your entire order</p>
          <button className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Order Now & Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;

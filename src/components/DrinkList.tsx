import { useState } from 'react';
import { motion } from 'framer-motion';
import { drinks } from '../data/drinks';
import { DrinkCard } from './DrinkCard';

export const DrinkList = () => {
  const categories = [...new Set(drinks.map(drink => drink.category))];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredDrinks = drinks.filter(drink => drink.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {categories.map(category => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } font-medium shadow-sm transition-colors`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDrinks.map(drink => (
            <DrinkCard key={drink.id} drink={drink} />
          ))}
        </div>
      </div>
    </div>
  );
};
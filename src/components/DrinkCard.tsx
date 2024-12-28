import { motion } from 'framer-motion';
import { Drink } from '../data/drinks';

export const DrinkCard = ({ drink }: { drink: Drink }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-xl font-bold mb-3 text-gray-800">{drink.name}</h3>
      <div className="space-y-2">
        <div>
          <h4 className="font-semibold text-gray-700">Ingredientes:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {drink.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">Preparación:</h4>
          <p className="text-gray-600">{drink.preparation}</p>
        </div>
      </div>
    </motion.div>
  );
};
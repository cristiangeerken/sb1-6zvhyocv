export interface Drink {
  id: number;
  name: string;
  ingredients: string[];
  preparation: string;
  category: string;
}

export const drinks: Drink[] = [
  {
    id: 1,
    name: "Piña Colada Improvisada",
    ingredients: ["50 ml de ron", "100 ml de leche", "50 ml de crema", "1 cucharada de azúcar", "hielo"],
    preparation: "Licuar todos los ingredientes y servir frío.",
    category: "Batidos Cremosos"
  },
  {
    id: 2,
    name: "Milkshake de Frutilla con Vodka",
    ingredients: ["50 ml de vodka", "4 frutillas", "100 ml de leche", "50 ml de crema", "1 cucharada de azúcar", "hielo"],
    preparation: "Licuar todo hasta obtener una mezcla cremosa.",
    category: "Batidos Cremosos"
  },
  // Add all other drinks here...
];
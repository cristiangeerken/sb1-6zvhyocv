export interface Drink {
  id: number;
  name: string;
  ingredients: string[];
  preparation: string;
  category: string;
}

export const drinks: Drink[] = [
  // Batidos Cremosos
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
  {
    id: 3,
    name: "Batido Cremoso de Ron y Limón",
    ingredients: ["50 ml de ron", "100 ml de leche", "50 ml de crema", "jugo de 1 limón", "hielo"],
    preparation: "Mezclar en licuadora hasta que quede espumoso.",
    category: "Batidos Cremosos"
  },
  {
    id: 4,
    name: "Milk Punch de Ron",
    ingredients: ["50 ml de ron", "100 ml de leche", "1 cucharadita de azúcar", "hielo"],
    preparation: "Agitar en coctelera y servir.",
    category: "Batidos Cremosos"
  },
  // Tragos Refrescantes
  {
    id: 5,
    name: "Vodka Sprite",
    ingredients: ["50 ml de vodka", "Sprite", "hielo", "rodaja de limón"],
    preparation: "Mezclar y decorar con la rodaja de limón.",
    category: "Tragos Refrescantes"
  },
  {
    id: 6,
    name: "Ron con Sprite y Limón",
    ingredients: ["50 ml de ron", "Sprite", "jugo de 1 limón", "1 cucharadita de azúcar", "hielo"],
    preparation: "Remover bien en un vaso largo y servir.",
    category: "Tragos Refrescantes"
  },
  {
    id: 7,
    name: "Frutilla Spritz",
    ingredients: ["50 ml de vodka", "4 frutillas", "Sprite", "hielo"],
    preparation: "Machacar las frutillas y combinar con el resto de los ingredientes.",
    category: "Tragos Refrescantes"
  },
  {
    id: 8,
    name: "Sprite Naranja con Crema",
    ingredients: ["50 ml de vodka", "100 ml de jugo de naranja", "50 ml de crema", "Sprite", "hielo"],
    preparation: "Mezclar suavemente y servir frío.",
    category: "Tragos Refrescantes"
  },
  // Tragos con Naranja
  {
    id: 9,
    name: "Vodka Naranja",
    ingredients: ["50 ml de vodka", "100 ml de jugo de naranja", "hielo"],
    preparation: "Mezclar y servir en vaso alto.",
    category: "Tragos con Naranja"
  },
  {
    id: 10,
    name: "Ron Naranja Dulce",
    ingredients: ["50 ml de ron", "100 ml de jugo de naranja", "1 cucharada de azúcar", "hielo"],
    preparation: "Decorar con rodaja de limón y servir frío.",
    category: "Tragos con Naranja"
  },
  {
    id: 11,
    name: "Orange Cream",
    ingredients: ["50 ml de vodka", "100 ml de jugo de naranja", "50 ml de crema", "hielo"],
    preparation: "Agitar en coctelera y servir.",
    category: "Tragos con Naranja"
  },
  {
    id: 12,
    name: "Frutilla Sunset",
    ingredients: ["50 ml de vodka", "3 frutillas", "100 ml de jugo de naranja", "hielo"],
    preparation: "Machacar las frutillas, mezclar con jugo de naranja y vodka. Servir con hielo.",
    category: "Tragos con Naranja"
  },
  // Tragos con Cola
  {
    id: 13,
    name: "Cuba Libre",
    ingredients: ["50 ml de ron", "gaseosa cola", "jugo de medio limón", "hielo"],
    preparation: "Mezclar en vaso largo y decorar con una rodaja de limón.",
    category: "Tragos con Cola"
  },
  {
    id: 14,
    name: "Frutilla Cola",
    ingredients: ["50 ml de ron", "3 frutillas machacadas", "gaseosa cola", "hielo"],
    preparation: "Servir en vaso alto con hielo y decorar.",
    category: "Tragos con Cola"
  },
  {
    id: 15,
    name: "Cola Cream",
    ingredients: ["50 ml de ron", "gaseosa cola", "50 ml de crema", "hielo"],
    preparation: "Mezclar y servir.",
    category: "Tragos con Cola"
  },
  {
    id: 16,
    name: "Cola con Leche y Ron",
    ingredients: ["50 ml de ron", "gaseosa cola", "100 ml de leche", "hielo"],
    preparation: "Combinar suavemente en vaso largo.",
    category: "Tragos con Cola"
  },
  // Tragos Ácidos y Dulces
  {
    id: 17,
    name: "Lemon Pie Vodka",
    ingredients: ["50 ml de vodka", "jugo de 1 limón", "50 ml de crema", "1 cucharada de azúcar", "hielo"],
    preparation: "Batir en coctelera y servir.",
    category: "Tragos Ácidos y Dulces"
  },
  {
    id: 18,
    name: "Vodka Lemon Cream",
    ingredients: ["50 ml de vodka", "jugo de 1 limón", "50 ml de crema", "Sprite", "hielo"],
    preparation: "Agitar en coctelera y servir.",
    category: "Tragos Ácidos y Dulces"
  },
  {
    id: 19,
    name: "Ron Frutilla Sour",
    ingredients: ["50 ml de ron", "3 frutillas", "jugo de medio limón", "1 cucharadita de azúcar", "hielo"],
    preparation: "Machacar las frutillas, mezclar con los otros ingredientes y servir.",
    category: "Tragos Ácidos y Dulces"
  },
  {
    id: 20,
    name: "Daiquiri de Frutilla",
    ingredients: ["50 ml de ron", "4 frutillas", "jugo de 1 limón", "1 cucharada de azúcar", "hielo"],
    preparation: "Licuar todo y servir frío.",
    category: "Tragos Ácidos y Dulces"
  }
];
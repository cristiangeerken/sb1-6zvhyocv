import { Drink } from '../models/drink';

export function groupDrinksByCategory(drinks: Drink[]) {
    const grouped = drinks.reduce((acc, drink) => {
        const category = drink.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(drink);
        return acc;
    }, {});

    return Object.keys(grouped).map(key => ({
        title: key,
        items: grouped[key]
    }));
}
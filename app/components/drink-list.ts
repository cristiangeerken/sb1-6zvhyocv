import { Observable } from '@nativescript/core';
import { drinks } from '../models/drink';

export class DrinkListViewModel extends Observable {
    groupedDrinks: any[];

    constructor() {
        super();
        
        // Group drinks by category
        const grouped = drinks.reduce((acc, drink) => {
            const category = drink.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(drink);
            return acc;
        }, {});

        // Convert to array format for ListView
        this.groupedDrinks = Object.keys(grouped).map(key => ({
            title: key,
            items: grouped[key]
        }));
    }
}

export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new DrinkListViewModel();
}
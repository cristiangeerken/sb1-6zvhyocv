import { Observable } from '@nativescript/core';
import { drinks } from '../../models/drink';
import { groupDrinksByCategory } from '../../utils/drink-utils';

export class DrinkListViewModel extends Observable {
    groupedDrinks: any[];

    constructor() {
        super();
        this.groupedDrinks = groupDrinksByCategory(drinks);
    }
}
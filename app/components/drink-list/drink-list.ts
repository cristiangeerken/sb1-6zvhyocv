import { NavigatedData, Page } from '@nativescript/core';
import { DrinkListViewModel } from './drink-list-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new DrinkListViewModel();
}
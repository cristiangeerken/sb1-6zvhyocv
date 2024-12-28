import { NavigatedData, Page } from '@nativescript/core';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    
    // Navigate to drink list after 2 seconds
    setTimeout(() => {
        page.frame.navigate({
            moduleName: "components/drink-list",
            clearHistory: true
        });
    }, 2000);
}
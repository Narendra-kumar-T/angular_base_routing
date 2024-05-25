import { Routes } from '@angular/router';
import { Bank1Component } from './bank-1/bank-1.component';
import { Bank2Component } from './bank-2/bank-2.component';
import { Bank3Component } from './bank-3/bank-3.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'bank1',
        component: Bank1Component,
    },{
        path: 'bank2',
        component: Bank2Component,
    },{
        path: 'bank3',
        component: Bank3Component,
    },
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
    { path: '', redirectTo: 'components', pathMatch: 'full' },
    { path: 'components', component: CategoriesComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

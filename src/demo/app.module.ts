import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TreeviewModule } from '../lib';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        TreeviewModule.forRoot(),
        AppRoutingModule
    ],
    declarations: [
        NotFoundComponent,
        CategoriesComponent,
        AppComponent,
    ],
  
    bootstrap: [AppComponent]
})
export class AppModule { }

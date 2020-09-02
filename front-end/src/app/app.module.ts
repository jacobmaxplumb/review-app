import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatMenuModule,
  MatCardModule
} from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { FeaturedListComponent } from './components/featured-list/featured-list.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BuisnessThumbnailComponent } from './components/buisness-thumbnail/buisness-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturedListComponent,
    CategoriesMenuComponent,
    ContactFormComponent,
    BuisnessThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    FlexLayoutModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

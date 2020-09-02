import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeaturedListComponent } from './components/featured-list/featured-list.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'featured', component: FeaturedListComponent},
  {path: 'categories', component: CategoriesMenuComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

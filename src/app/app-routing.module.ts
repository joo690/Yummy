import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// admin panel
import { DashboardComponent } from './admin_panel/main/dashboard/dashboard.component';
import { AddChefComponent } from './admin_panel/main/chefs/add-chef/add-chef.component';
import { ChefsListComponent } from './admin_panel/main/chefs/chefs-list/chefs-list.component';
import { UpdateChefComponent } from './admin_panel/main/chefs/update-chef/update-chef.component';
import { MenuListComponent } from './admin_panel/main/menu/menu-list/menu-list.component';
import { AddMenuComponent } from './admin_panel/main/menu/add-menu/add-menu.component';
import { UpdateMenuComponent } from './admin_panel/main/menu/update-menu/update-menu.component';

// user panel
import { HomeComponent } from './user_panel/main/home/home.component';
import { AboutUsComponent } from './user_panel/main/about-us/about-us.component';
import { BookTableComponent } from './user_panel/main/book-table/book-table.component';
import { ChefsComponent } from './user_panel/main/chefs/chefs.component';
import { ContactUsComponent } from './user_panel/main/contact-us/contact-us.component';
import { MenuComponent } from './user_panel/main/menu/menu.component';
import { ErrorComponent } from './user_panel/error/error.component';

const routes: Routes = [
  { path: '', title: 'Yummy | Home', component: HomeComponent },
  { path: 'home', title: 'Yummy | Home', component: HomeComponent },
  { path: 'about', title: 'Yummy | About Us', component: AboutUsComponent },
  {
    path: 'book',
    title: 'Yummy | Book A Table',
    component: BookTableComponent,
  },
  { path: 'chefs', title: 'Yummy | Chefs', component: ChefsComponent },
  {
    path: 'contact',
    title: 'Yummy | Contact Us',
    component: ContactUsComponent,
  },
  { path: 'menu', title: 'Yummy | Menu', component: MenuComponent },

  {
    path: 'admin',
    children: [
      {
        path: 'dashboard',
        title: 'Admin | Dashboard',
        component: DashboardComponent,
      },
      {
        path: 'chefs',
        children: [
          {
            path: 'list',
            title: 'Admin | Chefs List',
            component: ChefsListComponent,
          },
          {
            path: 'add',
            title: 'Admin | Add Chef',
            component: AddChefComponent,
          },
          {
            path: 'update/:id',
            title: 'Admin | Update Chef',
            component: UpdateChefComponent,
          },
          {
            path: '**',
            title: 'Error 404',
            component: ErrorComponent,
          },
        ],
      },
      {
        path: 'menu',
        children: [
          {
            path: 'list',
            title: 'Admin | Dish List',
            component: MenuListComponent,
          },
          {
            path: 'add',
            title: 'Admin | Add Dish',
            component: AddMenuComponent,
          },
          {
            path: 'update/:id',
            title: 'Admin | Update Dish',
            component: UpdateMenuComponent,
          },
          {
            path: '**',
            title: 'Error 404',
            component: ErrorComponent,
          },
        ],
      },
      {
        path: '**',
        title: 'Error 404',
        component: ErrorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// user panel
import { NavBarComponent } from './user_panel/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './user_panel/shared/footer/footer.component';
import { HomeComponent } from './user_panel/main/home/home.component';
import { AboutUsComponent } from './user_panel/main/about-us/about-us.component';
import { MenuComponent } from './user_panel/main/menu/menu.component';
import { ChefsComponent } from './user_panel/main/chefs/chefs.component';
import { BookTableComponent } from './user_panel/main/book-table/book-table.component';
import { ContactUsComponent } from './user_panel/main/contact-us/contact-us.component';
import { ErrorComponent } from './user_panel/error/error.component';

// admin panel
import { DashboardComponent } from './admin_panel/main/dashboard/dashboard.component';
import { ChefsListComponent } from './admin_panel/main/chefs/chefs-list/chefs-list.component';
import { AddChefComponent } from './admin_panel/main/chefs/add-chef/add-chef.component';
import { UpdateChefComponent } from './admin_panel/main/chefs/update-chef/update-chef.component';
import { MenuListComponent } from './admin_panel/main/menu/menu-list/menu-list.component';
import { AddMenuComponent } from './admin_panel/main/menu/add-menu/add-menu.component';
import { UpdateMenuComponent } from './admin_panel/main/menu/update-menu/update-menu.component';
import { NavBarComponent as adminNavbar } from './admin_panel/shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    MenuComponent,
    ChefsComponent,
    BookTableComponent,
    ContactUsComponent,
    ErrorComponent,
    DashboardComponent,
    ChefsListComponent,
    AddChefComponent,
    UpdateChefComponent,
    MenuListComponent,
    AddMenuComponent,
    UpdateMenuComponent,
    adminNavbar,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

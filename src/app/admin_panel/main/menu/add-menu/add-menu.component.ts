import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/controllers/menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'],
})
export class AddMenuComponent {
  constructor(private api: MenuService) {}
  message: string = '';
  menu = new FormGroup({
    name: new FormControl('', Validators.required),
    ingredients: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
  });
  Add() {
    this.api.post(this.menu.value).subscribe((res: any) => {
      this.message = 'Dish has been added successfully!';
      setTimeout(() => {
        this.message = '';
      }, 3000);
    });
  }
}

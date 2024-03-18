import { Component } from '@angular/core';
import { ChefsService } from 'src/app/services/controllers/chefs.service';
import { chefs } from 'src/app/modules/chefs';
@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css'],
})
export class AddChefComponent {
  chef = new chefs();
  message: string = '';
  constructor(private api: ChefsService) {}
  Add() {
    this.api.post(this.chef).subscribe((res: any) => {
      this.message = 'The new chef has been added successfully!';
      setTimeout(() => {
        this.message = '';
      }, 3000);
    });
  }
}

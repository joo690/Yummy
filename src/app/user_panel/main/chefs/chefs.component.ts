import { Component } from '@angular/core';
import { ChefsService } from 'src/app/services/controllers/chefs.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css'],
})
export class ChefsComponent {
  chefs!: any[];
  constructor(private api: ChefsService) {
    this.api.get().subscribe((res: any) => {
      this.chefs = res;
    });
  }
}

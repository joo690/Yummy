import { Component } from '@angular/core';
import { ChefsService } from 'src/app/services/controllers/chefs.service';
@Component({
  selector: 'app-chefs-list',
  templateUrl: './chefs-list.component.html',
  styleUrls: ['./chefs-list.component.css'],
})
export class ChefsListComponent {
  chefs!: any[];
  constructor(private api: ChefsService) {
    this.getData();
  }

  getData() {
    this.api.get().subscribe((res: any) => {
      this.chefs = res;
    });
  }

  delete(Id: any) {
    this.api.delete(Id).subscribe((res: any) => {
      this.getData();
    });
  }
}

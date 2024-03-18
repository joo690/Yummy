import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/controllers/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent {
  menu!: any[];
  constructor(private api: MenuService) {
    this.getData();
  }

  getData() {
    this.api.get().subscribe((res: any) => {
      this.menu = res;
    });
  }

  delete(Id: any) {
    this.api.delete(Id).subscribe((res: any) => {
      this.getData();
    });
  }
}

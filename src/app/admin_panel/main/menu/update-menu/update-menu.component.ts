import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app//services/controllers/menu.service';
import { menu } from 'src/app/modules/menu';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent {
  id!:any;
  message: string = '';
  dish = new menu();
  constructor(private api:MenuService ,private activeRoute:ActivatedRoute ,private router:Router){
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.api.getById(this.id).subscribe((res:any) =>{
      this.dish = res;
    })
  }
  Update(){
    this.api.put(this.id,this.dish).subscribe((res:any)=>{
      this.message = 'Dish has been updated successfully!';
      setTimeout(() => {
        this.message = '';
        this.router.navigateByUrl('/admin/menu/list');
      }, 3000);
    })
  }
}

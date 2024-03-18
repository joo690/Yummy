import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/controllers/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  starter:any[] = [];
  breakfast:any[] = [];
  lunch:any[] = [];
  dinner:any[] = [];
constructor(private api:MenuService){
  this.api.get().subscribe((res:any)=>{
    res.forEach((ele :any) => {
      if (ele.type === 'starter'){
        this.starter.push(ele);
      }else if (ele.type === 'breakfast'){
        this.breakfast.push(ele);;
      }else if (ele.type === 'lunch'){
        this.lunch.push(ele);
      }else{
        this.dinner.push(ele);
      }
    });
  })
}

}

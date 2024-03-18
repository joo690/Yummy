import { Component } from '@angular/core';
import { chefs } from 'src/app/modules/chefs';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefsService } from 'src/app/services/controllers/chefs.service';
@Component({
  selector: 'app-update-chef',
  templateUrl: './update-chef.component.html',
  styleUrls: ['./update-chef.component.css'],
})
export class UpdateChefComponent {
  chef = new chefs();
  message: string = '';
  id!: any;
  constructor(private activeRoute: ActivatedRoute, private api: ChefsService ,private router:Router) {
    this.id = activeRoute.snapshot.paramMap.get('id');
    this.api.getById(this.id).subscribe((res: any) => {
      this.chef = res;
    });
  }
  update() {
    this.api.put(this.id, this.chef).subscribe((res: any) => {
      this.message = 'The chef has been updated successfully!';
      setTimeout(() => {
        this.message = '';
        this.router.navigateByUrl('/admin/chefs/list')
      }, 2500);
    });
  }
}

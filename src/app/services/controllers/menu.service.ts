import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { HttpClient } from '@angular/common/http';
import { menu } from 'src/app/modules/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends ApiFunctionService<menu> {
  constructor(public override http: HttpClient) {
    super('http://localhost:3000/Menu', http);
  }
}

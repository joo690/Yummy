import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { HttpClient } from '@angular/common/http';
import { chefs } from 'src/app/modules/chefs';

@Injectable({
  providedIn: 'root',
})
export class ChefsService extends ApiFunctionService<chefs> {
  constructor(public override http: HttpClient) {
    super('http://localhost:3000/Chefs', http);
  }
}

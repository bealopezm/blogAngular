import { Injectable } from '@angular/core';
import { categories } from '../db/categories.db';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private arrCategories: Category[] = categories
  constructor() { }

  getAllCategories(){
    return this.arrCategories
  }
}

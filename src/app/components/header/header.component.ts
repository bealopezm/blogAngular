import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  arrCategories: Category[] = [];
  constructor(
    private categoriesServices: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.arrCategories = this.categoriesServices.getAllCategories()
  }

  getFilterCategory($event: any){
   this.router.navigate(['/category', $event.target.value])
  }

}

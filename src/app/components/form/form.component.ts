import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  arrCategories: Category[] = [];
  formulario: FormGroup;
  constructor(
    private categoriesServices: CategoriesService,
    private postsServices: PostsService
  ) {
    this.formulario = new FormGroup({
      title: new FormControl('',[]),
      text: new FormControl('',[]),
      author: new FormControl('',[]),
      image: new FormControl('',[]),
      date: new FormControl('',[]),
      category: new FormControl('',[]),
    })
   }

  ngOnInit(): void {
    this.arrCategories = this.categoriesServices.getAllCategories();
  }
  getDataForm(){
    console.log(this.formulario.value)
    this.postsServices.addPost(this.formulario.value)
 
  }

}

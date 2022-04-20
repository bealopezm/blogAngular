import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private postsServices: PostsService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      title: new FormControl('',[
        Validators.required,
      ]),
      text: new FormControl('',[
        Validators.required,
      ]),
      author: new FormControl('',[
        Validators.required,
      ]),
      image: new FormControl('',[
        Validators.required,
        Validators.pattern(/^[\https://]+[\w-\.]/)
      ]),
      date: new FormControl('',[
        Validators.required,
        Validators.pattern(/^\d{2}\/\d{2}\/\d{4}/)
      ]),
      category: new FormControl('',[
        Validators.required
      ]),
    })
   }

  ngOnInit(): void {
    this.arrCategories = this.categoriesServices.getAllCategories();
  }
  getDataForm(){
    console.log(this.formulario.value)
    this.postsServices.addPost(this.formulario.value)
    if(this.formulario.valid){
      this.router.navigate(['/home'])
    }
  }
  chechControl(controlName: string,errorName: string): boolean{
    if(this.formulario.get(controlName)?.hasError(errorName) && this.formulario.get(controlName)?.touched){
      return true
    }else{
      return false
    }
  }
}

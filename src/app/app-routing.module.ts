import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { PostViewComponent } from './components/post-view/post-view.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'category/:categoryId', component: HomeComponent},
  {path: 'post/:idPost', component: PostViewComponent},
  {path: 'new', component: FormComponent},
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

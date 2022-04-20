import { Injectable } from '@angular/core';
import { posts } from '../db/posts.db';
import { Category } from '../interfaces/category';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[] = posts;
  private id: number = 6;
  constructor() {
    if(localStorage.getItem('Posts') === null){
      localStorage.setItem('Posts', JSON.stringify(this.arrPosts))
    }
   }
  getAllPosts(){
    this.arrPosts = JSON.parse(localStorage.getItem('Posts')!);
    return this.arrPosts
  }

  addPost(pForm: any){
    const newPosts = {id: this.id,...pForm}
    this.arrPosts.push(newPosts)
    this.id++;
    localStorage.setItem('Posts', JSON.stringify(this.arrPosts))
  }

  getPostsByCategory(cat: number){
    return this.arrPosts.filter(post => post.category === cat)
  }

  getById(pId: number){
    return this.arrPosts.filter(post => post.id === pId)
  }
}

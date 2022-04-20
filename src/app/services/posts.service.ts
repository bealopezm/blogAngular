import { Injectable } from '@angular/core';
import { posts } from '../db/posts.db';
import { UUID } from 'angular2-uuid';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[] = posts;
  private id: string = UUID.UUID();
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
    localStorage.setItem('Posts', JSON.stringify(this.arrPosts))
  }

  getPostsByCategory(cat: number){
    return this.arrPosts.filter(post => post.category === cat)
  }

  getById(pId: string){
    return this.arrPosts.filter(post => post.id === pId)
  }
}

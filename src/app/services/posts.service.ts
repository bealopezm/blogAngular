import { Injectable } from '@angular/core';
import { posts } from '../db/posts.db';
import { Category } from '../interfaces/category';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[] = posts;
  private id: number = 4;
  constructor() { }
  getAllPosts(){
    return this.arrPosts
  }

  agregarPost(pData: any){
    const newPosts = {id: this.id, ...pData}
    this.arrPosts.push(newPosts)
    this.id++;
  }

  getPostsByCategoria(cat: number){
    return this.arrPosts.filter(post => post.category === cat)
  }
}

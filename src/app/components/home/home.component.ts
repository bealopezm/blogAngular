import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrPosts: Post[] = []
  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.arrPosts = this.postsService.getAllPosts()

    this.activatedRoute.queryParams.subscribe(queryparams => {
      const id = parseInt( queryparams['category'])
      if(queryparams['category'] !== ''){
        this.arrPosts = this.postsService.getPostsByCategory(id)
      }else if(queryparams['category'] === ''){
        this.arrPosts = this.postsService.getAllPosts()
      }
    })
  }

}

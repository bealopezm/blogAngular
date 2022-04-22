import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.arrPosts = this.postsService.getAllPosts()

    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['categoryId'])
      if(params['categoryId']){
        this.arrPosts = this.postsService.getPostsByCategory(id)
      }else{
        this.router.navigate(['/home'])
      }
    })
  }

}

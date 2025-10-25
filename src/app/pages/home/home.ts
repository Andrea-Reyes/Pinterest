import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post-service';
import { Posts } from '../../interfaces/posts';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  posts: Posts[] = [];

  constructor(private postService: PostService) {}

  //Método ngOnInit
  async ngOnInit() {
    this.posts = await this.postService.getPosts();
  }
}
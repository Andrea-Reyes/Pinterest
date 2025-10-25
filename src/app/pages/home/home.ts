import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../../services/post-service';
import { Posts } from '../../interfaces/posts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {
  posts: Posts[] = [];

  constructor(private postService: PostService) {}

  //Método ngOnInit
  async ngOnInit() {
    this.posts = await this.postService.getPosts();
  }
}
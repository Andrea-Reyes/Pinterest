import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Posts } from '../interfaces/posts';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  //URL del backend
  urlAPI = environment.URL_API;

  constructor(private http: HttpClient){};

  //Método para obtener todos los posts
  async getPosts(): Promise<Posts[]> {
    const res = await firstValueFrom(this.http.get<{ [key: string]: Posts }>(this.urlAPI));
    return Object.keys(res || {}).map(key => ({
      ...res[key],
      id: key
    }));
  }

  async createPost(post: Posts): Promise<void> {
    await firstValueFrom(this.http.post(this.urlAPI, post));
  }
}
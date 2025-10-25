import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post-service';
import { Router } from '@angular/router';
import { Posts } from '../../interfaces/posts';

@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './publicaciones.html',
  styleUrl: './publicaciones.css',
})
export class PublicacionesComponent {
  titulo = '';
  descripcion = '';
  imagenUrl = '';

  constructor(private postService: PostService, private router: Router) {}
  //@Output() publicacionAgregado = new EventEmitter<string>();

  async agregar() {
    const nuevoPost: Posts = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      imagenUrl: this.imagenUrl,
    };

    try {
      await this.postService.createPost(nuevoPost);
      this.router.navigate(['/']);
    } catch (e) {
      console.error(e);
    }
  }
}

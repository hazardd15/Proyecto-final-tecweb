import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAlbums().subscribe(
      (data) => {
        this.albums = data;
      },
      (error) => {
        console.error('Error al cargar álbumes:', error);
      }
    );
  }
}

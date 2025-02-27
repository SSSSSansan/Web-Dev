import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-detail.component.html',
})
export class AlbumDetailComponent implements OnInit {
  album: any = {};
  newTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe((data) => {
      this.album = data;
      this.newTitle = data.title;
    });
  }

  saveTitle() {
    this.albumsService
      .updateAlbum(this.album.id, this.newTitle)
      .subscribe(() => {
        this.album.title = this.newTitle;
      });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}

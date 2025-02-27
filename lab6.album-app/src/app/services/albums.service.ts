import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateAlbum(id: number, title: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { title });
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getPhotos(albumId: number): Observable<any> {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );
  }
}

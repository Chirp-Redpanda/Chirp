import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { Chirrup } from 'src/app/core/models/chirrup';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private sharedService: SharedService) { }


  postChirrup(chirrup: Chirrup): Observable<any> {
    const url = `${this.apiUrl}/news`;
    return this.http.post(url, chirrup).pipe(
      catchError(error => {
        throw 'Error posting story: ' + error.message;
      })
    );
  }


}

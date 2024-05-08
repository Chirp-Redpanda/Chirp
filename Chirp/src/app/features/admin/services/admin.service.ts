import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  userList: User[] = [];
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  
  getAllData(): Observable<User[]> {
    const url: string = `${this.apiUrl}/users/getAllUsers`;
    return this.http.get<User[]>(url);
  }
}

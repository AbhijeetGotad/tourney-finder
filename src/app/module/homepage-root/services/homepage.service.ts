import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  loggedPage: boolean = false;
  constructor(private http: HttpClient) {}
}

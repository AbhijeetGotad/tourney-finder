import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  deviceInfo: any;
  email: string = '';
  mobile: string = '';
  sessionLogin:boolean = false;

  constructor(private http: HttpClient) {}
}

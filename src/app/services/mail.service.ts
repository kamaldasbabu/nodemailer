
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }
  url = '';

  onAdd(data: any){
    return this.http.post('http://localhost:3000/mail', data, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  onSentMail(data:any) {
    this.http.post('http:/localhost:3000/mail', data);
  }

}

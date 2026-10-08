import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trendingnow } from '../model/trendingnow';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingnowService {

  private baseurl = "";
    
      constructor(private http: HttpClient) { }
      onsubmit():Observable<Trendingnow[]> {
        return  this.http.get<Trendingnow[]>(this.baseurl);
}
}
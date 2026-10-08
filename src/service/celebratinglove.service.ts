import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Celebratinglove } from '../model/celebratinglove';

@Injectable({
  providedIn: 'root'
})
export class CelebratingloveService {

  
  private baseurl = "";
  
    constructor(private http: HttpClient) { }
    onsubmit():Observable<Celebratinglove[]> {
      return  this.http.get<Celebratinglove[]>(this.baseurl);
    
    }
}

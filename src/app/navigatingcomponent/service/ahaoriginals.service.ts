import { Injectable } from '@angular/core';
import { Ahaoriginals } from '../app/navigatingcomponent/model/ahaoriginals';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AhaoriginalsService {

  
  private baseurl = "";
  
    constructor(private http: HttpClient) { }
    onsubmit():Observable<Ahaoriginals[]> {
      return  this.http.get<Ahaoriginals[]>(this.baseurl);
    
    }
}

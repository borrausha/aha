import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mollywoodmode } from '../model/mollywoodmode';

@Injectable({
  providedIn: 'root'
})
export class MollywoodmodeService {

  private baseurl = "";
  
    constructor(private http: HttpClient) { }
    onsubmit():Observable<Mollywoodmode[]> {
      return  this.http.get<Mollywoodmode[]>(this.baseurl);
    
    }
}

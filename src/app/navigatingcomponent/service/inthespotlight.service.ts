import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inthespotlight } from '../model/inthespotlight';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InthespotlightService {

  private baseurl = "";
     
       constructor(private http: HttpClient) { }
       onsubmit():Observable<Inthespotlight[]> {
         return  this.http.get<Inthespotlight[]>(this.baseurl);
 }
 }

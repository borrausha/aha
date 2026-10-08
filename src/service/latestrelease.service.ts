import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Latestrelease } from '../model/latestrelease';

@Injectable({
  providedIn: 'root'
})
export class LatestreleaseService {
  private baseurl = "";

  constructor(private http: HttpClient) { }
  onsubmit():Observable<Latestrelease[]> {
    return  this.http.get<Latestrelease[]>(this.baseurl);
  
  }
}

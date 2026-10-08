import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Trendingnow } from '../model/trendingnow';
import { TrendingnowService } from '../service/trendingnow.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trendingnow',
  templateUrl: './trendingnow.component.html',
  styleUrls: ['./trendingnow.component.scss']
})
export class TrendingnowComponent {
    images:any;
      
        constructor(private service:TrendingnowService){}
         ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
         }

}

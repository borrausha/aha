import { Component } from '@angular/core';
import { MollywoodmodeService } from '../service/mollywoodmode.service';

@Component({
  selector: 'app-mollywoodmode',
  templateUrl: './mollywoodmode.component.html',
  styleUrls: ['./mollywoodmode.component.scss']
})
export class MollywoodmodeComponent {
  images:any;
  
    constructor(private service:MollywoodmodeService){}
     ngOnInit(){
      this.service.onsubmit().subscribe(data=>this.images=data);
     }
  
}

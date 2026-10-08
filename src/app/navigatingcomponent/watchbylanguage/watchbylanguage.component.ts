import { Component } from '@angular/core';
import { WatchbylanguageService } from '../service/watchbylanguage.service';

@Component({
  selector: 'app-watchbylanguage',
  templateUrl: './watchbylanguage.component.html',
  styleUrls: ['./watchbylanguage.component.scss']
})
export class WatchbylanguageComponent {
  images:any;
        
          constructor(private service:WatchbylanguageService){}
           ngOnInit(){
            this.service.onsubmit().subscribe(data=>this.images=data);
           }

}

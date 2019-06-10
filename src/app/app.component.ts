import { Component } from '@angular/core';
import { EntitySourceService } from './entity-source.service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tree:Array<Object>;
  title = 'mts-interview-test';

  constructor(private entities:EntitySourceService){
    this.tree=entities.getEntities();
    console.log(this.tree)
}

  
}

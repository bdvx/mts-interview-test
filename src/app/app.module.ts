import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TreeStructureComponent } from './tree-structure/tree-structure.component';
import { EntitySourceService } from './entity-source.service';
import { SortPipe } from './sort-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TreeStructureComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [EntitySourceService],
  bootstrap: [AppComponent]
})
export class AppModule{ 
   

}
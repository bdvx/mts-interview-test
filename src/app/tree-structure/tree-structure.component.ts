import { Component, OnInit, Input } from '@angular/core';
import {Directory} from '../entity-source.service';
import {SortPipe} from '../sort-pipe.pipe';

@Component({
  selector: 'app-tree-structure',
  templateUrl: './tree-structure.component.html',
  styleUrls: ['./tree-structure.component.scss']
})


export class TreeStructureComponent implements OnInit {

  constructor() { }
 @Input() tree:Array<Object>;
  ngOnInit() {
    this.tree.map((element:Directory)=>{
      if (element.type=="folder") element.isExpanded=false;
    })
  }


  expand(node:Directory){
    node.isExpanded=!node.isExpanded;
  }

  getIcon(name:String){
    //Иконки для нод файлов
    return 'assets/img/'+name.substring(name.lastIndexOf('.')+1)+'.png';

  }

  getChildCount(node:Directory){
    let filesCount=0,foldersCount=0;

    node.children.forEach(element => {
      if(element.type=='folder') foldersCount++;
      else filesCount++;
    });
    
    return '('+foldersCount+' папок,'+filesCount+' файлов)'

  }
}

import { Injectable } from '@angular/core';

//Метод изъятия данных для Angular 6+,вместо использования HttpClient и Observable
import EntityJson from './data.json';

export interface Directory{

  isExpanded:boolean;
  type:String;
  children:Array<Directory>
}

@Injectable({
  providedIn: 'root'
})
export class EntitySourceService {

  constructor() { }

  getEntities():Array<Object>{
    return EntityJson.tree;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-searchtable',
  templateUrl: './searchtable.component.html',
  styleUrls: ['./searchtable.component.css']
})
export class SearchtableComponent {
display='d-none'
  searchTable(){
    if(this.display=='d-none'){
      this.display='d-flex';
    }else{
      this.display='d-none'
    }
    
  }
}

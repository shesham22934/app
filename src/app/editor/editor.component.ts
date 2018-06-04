import { Component,  Input , Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit  {

  @Input() data;
  @Output() sendingEvent = new EventEmitter<string>();
  constructor(){

  }
  ngOnInit(){
   this.data= this.data;
  }
  send() {
    console.log('asss',event)
    this.sendingEvent.emit(this.data);
  }

}
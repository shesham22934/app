import { Component } from '@angular/core';
declare var window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1: any;
  title = 'app';
  data = "string";
  myval: any;

boldtoggle:boolean = false;
italictoggle: boolean = false;
underlinetoggle: boolean = false;
constructor(){
  this.myval = this.data;
  
}
datachange(event){
  this.myval = event;
  this.boldtoggle= !this.boldtoggle;
  this.italictoggle= !this.italictoggle;
  this.underlinetoggle= !this.underlinetoggle;
} 
boldfont(){
  
   this.boldtoggle = !this.boldtoggle;
   if(this.boldtoggle){
     this.myval=`<strong>${this.myval}</strong>`;
   }else{
     this.myval = this.myval.toString().replace(/(<strong>|<\/strong>)/gm,'');
   }
}
itlalicfont(){
  this.italictoggle = !this.italictoggle;
  if(this.italictoggle){
    this.myval=`<i>${this.myval}</i>`;
  }else{
    this.myval = this.myval.toString().replace(/(<i>|<\/i>)/gm,'');
  }
}
underlinefont(){
  this.underlinetoggle = !this.underlinetoggle;
  if(this.underlinetoggle){
    this.myval=`<u>${this.myval}</u>`;
  }else{
    this.myval = this.myval.toString().replace(/(<u>|<\/u>)/gm,'');
  }
}
// setStyles() {
//   let styles = {
//     'font-weight':  this.boldtoggle ? 'bold' : 'normal',
//     'font-style':  this.italictoggle ? 'italic' : 'normal',
//     'font':  this.underlinetoggle? 'underline' : 'normal',
//   };
//   return styles;
// }
  receivedMsg($event) {
    this.title1  = $event;
  }
}
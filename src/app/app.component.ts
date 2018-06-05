import { Component } from '@angular/core';

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
} 
boldfont(){
  let editor = document.getElementById('textEditor');
  const input : HTMLInputElement = <HTMLInputElement>editor
  let start = input.selectionStart;
  let end = input.selectionEnd;
   let a = window.getSelection();
   console.log('a ', a.toString())
   this.boldtoggle = !this.boldtoggle;
   if(this.boldtoggle){
     var newreg = new RegExp(`${a}`,'gmi')
     this.myval= this.myval.toString().replace(newreg,`<strong>${a}</strong>`);
    //  this.boldtoggle = !this.boldtoggle;
   }else{
    console.log(this.myval)
    var newreg1 = new RegExp(`(<strong>)+${a}(</strong>)+`,'gmi')
    console.log(newreg1)
     this.myval = this.myval.toString().replace(newreg1,`${a}`);
    console.log(this.myval)
   }
}
itlalicfont(){
  let editor = document.getElementById('textEditor');
  const input : HTMLInputElement = <HTMLInputElement>editor
  let start = input.selectionStart;
  let end = input.selectionEnd;
   let a = window.getSelection();
   console.log('a ', a.toString())
    // a.toString().replace(/(\\|s|\*)/gm,'');
  this.italictoggle = !this.italictoggle;
  if(this.italictoggle){
    var newreg = new RegExp(`${a}`,'gmi')
    this.myval= this.myval.toString().replace(newreg,`<i>${a}</i>`);
   //  this.boldtoggle = !this.boldtoggle;
  }else{
   console.log(this.myval)
   var newreg1 = new RegExp(`(<i>)+${a}(</i>)+`,'gmi')
   console.log(newreg1)
    this.myval = this.myval.toString().replace(newreg1,`${a}`);
   console.log(this.myval)
  }
}
underlinefont(){
  let editor = document.getElementById('textEditor');
  const input : HTMLInputElement = <HTMLInputElement>editor
  let start = input.selectionStart;
  let end = input.selectionEnd;
   let a = window.getSelection();
   console.log('a ', a.toString())
  this.underlinetoggle = !this.underlinetoggle;
  if(this.underlinetoggle){
    var newreg = new RegExp(`${a}`,'gmi')
    this.myval= this.myval.toString().replace(newreg,`<u>${a}</u>`);
   //  this.boldtoggle = !this.boldtoggle;
  }else{
   console.log(this.myval)
   var newreg1 = new RegExp(`(<u>)+${a}(</u>)+`,'gmi')
   console.log(newreg1)
    this.myval = this.myval.toString().replace(newreg1,`${a}`);
   console.log(this.myval)
  }
}

}

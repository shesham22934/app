import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  la: boolean = false;
  c: Selection;
  b: any;
  @ViewChild('ev') ev: ElementRef
  title1: any;
  title = 'app';
  data :any;
  myval: any;
  a;

boldtoggle:boolean = false;
italictoggle: boolean = false;
underlinetoggle: boolean = false;
codetoggle: boolean = false;
getit:boolean=false;
 coloritems = ['red','blue','yellow','brown','skyblue','green','lightgreen']
 sizeitems = ['small','medium','large']
constructor(){
  this.myval = this.data;
  
}
datachange(event){ 
   console.log(this.a)
  this.myval = event;
} 
boldfont(){
  this.c = window.getSelection();
   this.a = this.c.toString();
   this.boldtoggle = !this.boldtoggle;
   if(this.boldtoggle){
     this.b = this.a.bold()
     var newreg = new RegExp(`${this.a}`,'gmi')
     this.myval= this.myval.toString().replace(newreg,this.b);
   
   }else{
    console.log(this.myval)
    var newreg1 = new RegExp(`(<b>)+(<.*>)*${this.a}(<\\/.*>)*(<\\/b>)+`,'gmi')
    // console.log(newreg1)
     this.myval = this.myval.toString().replace(newreg1,`${this.a}`);
    // console.log(this.myval)
   }
}
itlalicfont(){
  this.c = window.getSelection();
   this.a = this.c.toString();
  this.italictoggle = !this.italictoggle;
  if(this.italictoggle){
    this.b= this.a.italics()
    var newreg = new RegExp(`${this.a}`,'gmi')
    this.myval= this.myval.toString().replace(newreg,this.b);
   
  }else{
   console.log(this.myval)
   var newreg1 = new RegExp(`(<i>)+(<.*>)*${this.a}(<\\/.*>)*(<\\/i>)+`,'gmi')
  //  console.log(newreg1)
    this.myval = this.myval.toString().replace(newreg1,`${this.a}`);
  //  console.log(this.myval)
  }
}
underlinefont(){
  this.c = window.getSelection();
   this.a = this.c.toString();
  this.underlinetoggle = !this.underlinetoggle;
  if(this.underlinetoggle){
    var newreg = new RegExp(`${this.a}`,'gmi')
    this.myval= this.myval.toString().replace(newreg,`<u>${this.a}</u>`);
   //  this.boldtoggle = !this.boldtoggle;
  }else{
   console.log(this.myval)
   var newreg1 = new RegExp(`(<u>)+(<.*>)*${this.a}(<\\/.*>)*(<\\/u>)+`,'gmi')
  //  console.log(newreg1)
    this.myval = this.myval.toString().replace(newreg1,`${this.a}`);
  //  console.log(this.myval)
  }
}

getthecode(event){
  this.la= !this.la
}

gettheurl(urllink){
  this.c = window.getSelection();
  this.a = this.c.toString();
this.b =this.a.link(urllink)
    var newreg = new RegExp(`${this.a}`,'gmi')
    this.myval= this.myval.toString().replace(newreg,this.b);
}

setcolor(colorvalue){
  this.c = window.getSelection();
   this.a = this.c.toString();
this.b =this.a.fontcolor(colorvalue)
     var newreg = new RegExp(`${this.a}`,'gmi')
     this.myval= this.myval.toString().replace(newreg,this.b);
}
setfont(sizes){
  this.c = window.getSelection();
   this.a = this.c.toString();
   this.boldtoggle = !this.boldtoggle;
   if(this.boldtoggle){
     if(sizes =='small'){
      this.b = this.a.small()
     }
     if(sizes =='medium'){
      this.b = this.a.bold()
     }
     if(sizes =='large'){
      this.b = this.a.big()
     }
     
     var newreg = new RegExp(`${this.a}`,'gmi')
     this.myval= this.myval.toString().replace(newreg,this.b);
   
   }else{
    console.log(this.myval)
    var newreg1 = new RegExp(`(<b>)+(<.*>)*${this.a}(<\\/.*>)*(<\\/b>)+`,'gmi')
    // console.log(newreg1)
     this.myval = this.myval.toString().replace(newreg1,`${this.a}`);
    // console.log(this.myval)
   }
}
}
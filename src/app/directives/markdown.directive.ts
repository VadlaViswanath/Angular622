import { Directive, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMarkdown]',
  host:{
    '(keyup)': 'onKey($event.target.value)'
  }
})
export class MarkdownDirective {

  private nativeElement:Node;
  @Output() valuechange:EventEmitter<any> = new EventEmitter();
  constructor(private renderer:Renderer2,private element:ElementRef) { 


    this.nativeElement = this.element.nativeElement;
    const div = this.renderer.createElement('div');
    const btn = this.renderer.createElement('button');
    const btn1 = this.renderer.createElement('button');
    const btn2 = this.renderer.createElement('button');
    const txt = this.renderer.createText('B');
    const txt1 = this.renderer.createText('I');
    const txt2 = this.renderer.createText('$');
    this.renderer.appendChild(btn,txt);
    this.renderer.appendChild(btn1,txt1);
    this.renderer.appendChild(btn2,txt2);
    this.renderer.appendChild(div,btn);
    this.renderer.appendChild(div,btn1);
    this.renderer.appendChild(div,btn2);
    
    this.renderer.insertBefore(this.element.nativeElement.parentNode,div,this.element.nativeElement.nextSibling);


  }

  onKey(event:KeyboardEvent){
    this.valuechange.emit(event);
  }

}

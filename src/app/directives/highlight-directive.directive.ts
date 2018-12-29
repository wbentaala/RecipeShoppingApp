import { Directive, Renderer2, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective implements OnInit{
  
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'gray';
  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

  @HostListener('mouseover') onmouseover(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onmouseleave(){
    this.backgroundColor = this.defaultColor;
  }
}

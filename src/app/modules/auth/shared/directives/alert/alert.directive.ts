import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective implements OnInit{
  @Input("error") error: string = '';
  
  private div: HTMLElement;
  private span: HTMLElement;
  private text?: HTMLElement;
  private nativeElement: HTMLElement;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    this.div = this.renderer2.createElement("div");
    this.renderer2.setAttribute(this.div, "role", "alert");
    this.renderer2.setAttribute(this.div, "class", "alert alert-danger fade show");
    this.renderer2.setStyle(this.div, "transition", "transform 0.5s");

    this.span = this.renderer2.createElement("span");
    this.renderer2.setAttribute(this.span, "class", "message");
    this.nativeElement = elementRef.nativeElement as HTMLElement;
  }

  ngOnInit(): void {
      this.text = this.renderer2.createText(this.error);
      this.renderer2.appendChild(this.span, this.text);
      this.renderer2.appendChild(this.div, this.span);
      this.nativeElement.appendChild(this.div);
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.renderer2.setStyle(this.div, "transform", "scale(1.1)");
  }
  @HostListener("mouseleave")  
  onMouseLeave() {
    this.renderer2.setStyle(this.div, "transform", "scale(1)");
  } 
}

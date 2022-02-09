import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeater]'
})
export class RepeaterDirective implements OnInit {

  @Input("appRepeater") lenght: number = 0;

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) { 
    this.viewContainerRef.clear();
  }

  ngOnInit(): void {
      for (let index = 0; index < this.lenght; index++) {
        this.viewContainerRef.createEmbeddedView(this.templateRef, {$implicit: index})
      }
  }

}


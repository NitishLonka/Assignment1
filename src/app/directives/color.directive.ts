import { Directive,ElementRef, HostListener } from "@angular/core";
@Directive(
{
    selector:'[appHighlight]'
}
)
export class Abc{
    constructor(private eleRef: ElementRef) {
}
@HostListener('mouseover') onMouseOver(eventData: Event) {
    this.eleRef.nativeElement.style.backgroundColor = "#90EE90";
    this.eleRef.nativeElement.Salary = 500;		    	
  }
  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    this.eleRef.nativeElement.style.backgroundColor = "white";		    	
  }
}
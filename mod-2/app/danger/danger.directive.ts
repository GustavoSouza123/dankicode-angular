import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDanger]',
  standalone: true,
})
export class DangerDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    (<HTMLElement>this.elementRef.nativeElement).style.backgroundColor =
      'lightcoral';
  }
}

import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appWarning]',
  standalone: true,
})
export class WarningDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('highlight') highlightColor: string = 'orange'; // using 'highlight' alias

  @HostBinding('style.backgroundColor') backgroundColor!: string;
  // the @HostBinding decorator is an easier form of changing an element property
  // it's easier than getting the element through ElementRef and Renderer

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'backgroundColor',
    //   'orange'
    // );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'backgroundColor',
    //   'transparent'
    // );
    this.backgroundColor = this.defaultColor;
  }
}

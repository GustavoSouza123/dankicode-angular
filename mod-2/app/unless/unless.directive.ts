import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
  standalone: true,
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.clear();
    }
  }

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}
}

import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // Đường dẫn tạo ở đây và gọi ở mọi nơi.
  selector: '[appBold]',
})
export class BoldDirective {
  constructor(private element: ElementRef, private render: Renderer2) {
    render.setStyle(element.nativeElement, 'color', 'blue');
    render.setStyle(element.nativeElement, 'background-color', 'yellow');
    render.setStyle(element.nativeElement, 'display', 'inline-block');
  }
}

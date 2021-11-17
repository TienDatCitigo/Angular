import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // Đường dẫn tạo ở đây và gọi ở mọi nơi, lợi hại thực sự
  selector: '[appBold]'
})
export class BoldDirective {
  constructor(private element: ElementRef, private render: Renderer2) {
    render.setStyle(element.nativeElement,'color','white');
    // ~~ element.nativeElement.style.color = 'white';
    render.setStyle(element.nativeElement,'background-color','blue');
  }

}

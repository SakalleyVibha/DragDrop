import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResizable]',
  standalone: true
})
export class ResizableDirective {

  startX!: number;
  startY!: number;
  resizing = false;
  edge!: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    console.log('event: ', event);
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.resizing = true;
    this.edge = this.getEdge(event);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    console.log('event: ', event);
    if (this.resizing) {
      const deltaX = event.clientX - this.startX;
      const deltaY = event.clientY - this.startY;
      let newWidth = this.elementRef.nativeElement.offsetWidth;
      let newHeight = this.elementRef.nativeElement.offsetHeight;

      switch (this.edge) {
        case 'bottom':
          newHeight += deltaY;
          break;
        case 'right':
          newWidth += deltaX;
          break;
        case 'bottom-right':
          newWidth += deltaX;
          newHeight += deltaY;
          break;
      }

      this.renderer.setStyle(this.elementRef.nativeElement, 'width', newWidth + 'px');
      this.renderer.setStyle(this.elementRef.nativeElement, 'height', newHeight + 'px');
      this.startX = event.clientX;
      this.startY = event.clientY;
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.resizing = false;
    this.edge = '';
  }

  private getEdge(event: MouseEvent): string {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;
    const threshold = 8; // adjust this value for sensitivity

    if (x > width - threshold && y > height - threshold) {
      return 'bottom-right';
    } else if (x > width - threshold) {
      return 'right';
    } else if (y > height - threshold) {
      return 'bottom';
    }

    return '';
  }

}

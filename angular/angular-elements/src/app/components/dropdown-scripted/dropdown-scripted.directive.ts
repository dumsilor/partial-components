import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownScripted]',
  standalone: true,
})
export class DropDownDirective {
  private isOpen = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    const dropDownMenu = this.el.nativeElement.querySelector('.dropdown-menu');
    if (this.isOpen) {
      this.renderer.addClass(dropDownMenu, 'show');
    } else {
      this.renderer.removeClass(dropDownMenu, 'show');
    }
  }
}

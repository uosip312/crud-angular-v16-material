import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[upperCase]'
})
export class UpperCaseDirective {

  constructor(
    private elementRef: ElementRef,
  ) { }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.elementRef.nativeElement.value = inputValue.toUpperCase();
  }

}

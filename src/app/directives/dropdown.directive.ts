import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show')
  dropdownOpen: boolean = false;

  @HostListener('click') onclick(){
    this.dropdownOpen = !this.dropdownOpen;
  }
  constructor() { }

}

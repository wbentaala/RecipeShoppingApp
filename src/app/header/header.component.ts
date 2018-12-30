import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header', 
    styles: ['header.component.css'],
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    opened: boolean = false; 
    
    openDropdown(){
        this.opened = !this.opened;
    }
}
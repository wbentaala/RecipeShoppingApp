import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header', 
    styles: ['header.component.css'],
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    @Output('feature')  
    featureSelected = new EventEmitter<string>();
    opened: boolean = false; 
    public onSelect(feature: string){
        this.featureSelected.emit(feature);
    }

    openDropdown(){
        console.log(this.opened);
        this.opened = !this.opened;
    }
}
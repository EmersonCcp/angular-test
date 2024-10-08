import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() title = 'Modificar';

  @Output() buttonClick = new EventEmitter<any>();

  handleClick(){
    this.buttonClick.emit(25000);
  }

}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {
  propTest: boolean = false;
  @Output('buttonClick') buttonClickedEmitter = new EventEmitter<boolean>();

onButtonClick(){
  console.log('onButtonClick')

  this.buttonClickedEmitter.emit(this.propTest);
}

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-roxo',
  templateUrl: './card-roxo.component.html',
  styleUrl: './card-roxo.component.scss',
  //encapsulation: ViewEncapsulation.ShadowDom,
})
export class CardRoxoComponent {
  @Input('planType') planType: string = '';
  @Input({required: true, alias: 'planPriceAlias'}) planPrice: number = 0;

}

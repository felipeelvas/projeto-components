import { Component, Input } from '@angular/core';
interface IPlano {
  infos: IInfos;
}
 interface IInfos {
infos: any;
  tipo: string;
  preco: number;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('planType') planType: string = '';
  @Input({ required: true, alias: 'planPriceAlias' }) planPrice: number = 0;

}



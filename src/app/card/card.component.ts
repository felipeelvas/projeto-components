import { Component, ViewEncapsulation } from '@angular/core';
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
  // encapsulation: ViewEncapsulation.ShadowDom,
  //encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  //@ts-ignore
  plano: IInfos = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    },
  };
}



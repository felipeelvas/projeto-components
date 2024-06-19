import { Component } from '@angular/core';
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
  styleUrl: './card.component.scss'
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



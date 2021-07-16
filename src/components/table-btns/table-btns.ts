import { BaseComponent } from '../base-component';
import { Btn } from '../btn/btn';

import './table-btns.scss';

export class TableBtns extends BaseComponent {
  public readonly Btnrest: Btn;

  public readonly Btndifficult: Btn;

  constructor() {
    super('div', ['table_btns']);
    this.Btndifficult = new Btn('btndifficult', 'Repeat difficult words');
    this.element.appendChild(this.Btndifficult.element);
    this.Btnrest = new Btn('btnreset', 'Reset');
    this.element.appendChild(this.Btnrest.element);
  }
}

import { BaseComponent } from '../base-component';
import './swap.scss';

export class Swap extends BaseComponent {
  constructor(none: string) {
    super('div', ['swap', `${none}`]);
  }
}

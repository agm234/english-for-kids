import { BaseComponent } from '../base-component';
import './btn.scss';

export class Btn extends BaseComponent {
  constructor(styles: string, text: string) {
    super('button', [`${styles}`, 'btn']);
    this.element.innerHTML = `${text}`;
  }
}

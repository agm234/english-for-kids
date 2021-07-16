import { BaseComponent } from '../base-component';
import './star.scss';

export class Star extends BaseComponent {
  constructor(star: string) {
    super('div', ['star']);
    this.element.style.background = `url('../../stars/${star}.png')`;
  }
}

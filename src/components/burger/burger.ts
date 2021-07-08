import { BaseComponent } from '../base-component';
import './burger.scss';

export class Burger extends BaseComponent {
  constructor() {
    super('div', ['burger']);
    this.element.innerHTML = `
        <span class="burger_span"></span>
        `;
  }
}

import { BaseComponent } from '../base-component';
import './btn_start.scss';

export class BtnStart extends BaseComponent {
  constructor() {
    super('button', ['btn_start', 'btn_none']);
    this.element.innerHTML = `
    <p class="text_start">Start Button</p>
        `;
  }
}

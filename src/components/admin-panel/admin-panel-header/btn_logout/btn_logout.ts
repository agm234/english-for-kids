import { BaseComponent } from '../../../base-component';
import './btn_logout.scss';

export class BtnLogout extends BaseComponent {
  constructor() {
    super('div', ['logout']);
    this.element.innerHTML = `
        <p class="logout_text" data-word="logout">Log out</p>
        `;
  }
}

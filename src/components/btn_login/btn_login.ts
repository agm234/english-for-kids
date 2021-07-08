import { BaseComponent } from '../base-component';
import './btn_login.scss';

export class BtnLogin extends BaseComponent {
  constructor() {
    super('button', ['btn_login']);
    this.element.innerHTML = `
        Login
        `;
  }
}

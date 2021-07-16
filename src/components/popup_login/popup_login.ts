import { BaseComponent } from '../base-component';
import { PopupForm } from '../popup_login_form/popup_login_form';
import './popup_login.scss';

export class Popup extends BaseComponent {
  public readonly PopupForm: PopupForm;

  constructor() {
    super('div', ['popup']);
    this.element.innerHTML = `
        <h1 class="popup_header">Login</h1>
        `;
    this.PopupForm = new PopupForm();
    this.element.appendChild(this.PopupForm.element);
  }
}

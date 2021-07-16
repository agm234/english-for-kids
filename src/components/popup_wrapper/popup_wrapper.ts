import { BaseComponent } from '../base-component';
import { Popup } from '../popup_login/popup_login';
import './popup_wrapper.scss';

export class PopupWrapper extends BaseComponent {
  private readonly Popup: Popup;

  constructor() {
    super('div', ['popup_wrapper', 'popup_none']);
    this.Popup = new Popup();
    this.element.appendChild(this.Popup.element);
    this.Cansel();
  }

  Cansel(): void {
    this.element.addEventListener('click', (el) => {
      if ((el.target as HTMLElement).classList.contains('cansel')) {
        (this.Popup.PopupForm.element as HTMLFormElement).reset();
        this.element.classList.add('popup_none');
      }
      if ((el.target as HTMLElement).classList.contains('popup_wrapper')) {
        (this.Popup.PopupForm.element as HTMLFormElement).reset();
        this.element.classList.add('popup_none');
      }
    });
  }
}

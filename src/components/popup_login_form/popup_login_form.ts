import { BaseComponent } from '../base-component';
import { login } from '../../Api';
import './popup_login_form.scss';

export class PopupForm extends BaseComponent {
  constructor() {
    super('form', ['popup_form']);
    this.element.innerHTML = `
            <div class="popup_inputs">
              <input class="name" type="text" name="username" placeholder="Username" required>
              <input class="password" type="password" name="password" placeholder="Password" required>
            </div>
            <div class="buttons">
              <button class="popupbtn add" type="submit">Login</button>
              <button class="popupbtn cansel" type="button">Cansel</button>
            </div>        
            `;
    this.element.setAttribute('action', '/admin');
    this.login1();
  }

  login1(): void {
    (this.element as HTMLFormElement).addEventListener('submit', (e) => {
      e.preventDefault();
      const name = (document.querySelector('.name') as HTMLInputElement).value;
      const password = (document.querySelector('.password') as HTMLInputElement).value;
      const token = login({ name, password });
      token.then((data) => {
        if (data.token !== undefined) {
          localStorage.setItem('token', `${data.token}`);
          window.location.hash = 'adminpanel';
        }
      });
    });
  }
}

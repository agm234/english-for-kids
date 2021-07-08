import { BaseComponent } from '../base-component';
import { MenuList } from '../nav-menu-list/nav-menu-list';
import { BtnLogin } from '../btn_login/btn_login';
import './nav-menu.scss';

export class NavMeny extends BaseComponent {
  private readonly MenuList: MenuList;

  public readonly BtnLogin: BtnLogin;

  constructor() {
    super('div', ['nav_menu', 'green']);
    this.MenuList = new MenuList();
    this.element.appendChild(this.MenuList.element);
    this.BtnLogin = new BtnLogin();
    this.element.appendChild(this.BtnLogin.element);
  }
}

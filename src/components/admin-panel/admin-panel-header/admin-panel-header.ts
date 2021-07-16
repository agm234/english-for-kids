import { BaseComponent } from '../../base-component';
import { BtnLogout } from './btn_logout/btn_logout';
import { AdminCards } from './cards/cards';
import { AdminCategories } from './categorie-header/categorie-header';
import './admin-panel-header.scss';

export class AdminHeader extends BaseComponent {
  public readonly BtnLogout: BtnLogout;

  public readonly AdminCategories: AdminCategories;

  public readonly AdminCards: AdminCards;

  constructor() {
    super('header', ['admin_panel_header']);
    this.AdminCategories = new AdminCategories();
    this.element.appendChild(this.AdminCategories.element);
    this.AdminCards = new AdminCards();
    this.element.appendChild(this.AdminCards.element);
    this.BtnLogout = new BtnLogout();
    this.element.appendChild(this.BtnLogout.element);
    this.adminNav();
  }

  adminNav(): void {
    this.element.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).getAttribute('data-word') === 'logout') {
        localStorage.clear();
        window.location.hash = 'client';
      }
    });
  }
}

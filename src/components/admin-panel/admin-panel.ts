import { BaseComponent } from '../base-component';
import { Footer } from '../footer/footer';
import { AdminHeader } from './admin-panel-header/admin-panel-header';
import { AdminMain } from './admin-main/admin-main';
import { deleteCard, deleteCategory, deleteCards } from '../../Api';
import './admin-panel.scss';

export class Admin extends BaseComponent {
  private readonly Footer: Footer;

  private readonly AdminHeader: AdminHeader;

  private readonly AdminMain: AdminMain;

  constructor() {
    super('div', ['admin_panel']);
    this.AdminHeader = new AdminHeader();
    this.element.appendChild(this.AdminHeader.element);
    this.AdminMain = new AdminMain();
    this.element.appendChild(this.AdminMain.element);
    this.Footer = new Footer();
    this.element.appendChild(this.Footer.element);
    this.nav();
  }

  nav(): void {
    this.element.addEventListener('click', async (e) => {
      if ((e.target as HTMLElement).hasAttribute('data-catname')) {
        this.AdminMain.StartWords((e.target as HTMLElement).getAttribute('data-catname') as string);
        this.AdminHeader.AdminCategories.element.classList.remove('active_rout');
        this.AdminHeader.AdminCards.element.classList.add('active_rout');
      }
      if (
        (e.target as HTMLElement).getAttribute('data-word') === 'categorie'
        && !((e.target as HTMLElement).parentElement as HTMLElement).classList.contains('active_rout')
      ) {
        this.AdminMain.element.innerHTML = '';
        this.AdminMain.startCategories();
        this.AdminHeader.AdminCategories.element.classList.add('active_rout');
        this.AdminHeader.AdminCards.element.classList.remove('active_rout');
      }
      if ((e.target as HTMLElement).hasAttribute('data-deleteword')) {
        await deleteCard((e.target as HTMLElement).getAttribute('data-deleteword') as string);
        this.AdminMain.element.innerHTML = '';
        this.AdminMain.StartWords((e.target as HTMLElement).getAttribute('data-catname') as string);
      }
      if ((e.target as HTMLElement).hasAttribute('data-deletecat')) {
        await deleteCategory((e.target as HTMLElement).getAttribute('data-deletecat') as string);
        const category = (e.target as HTMLElement).getAttribute('data-deletecat') as string;
        await deleteCards({ categoryname: category });
        this.AdminMain.element.innerHTML = '';
        this.AdminMain.startCategories();
      }
    });
  }
}

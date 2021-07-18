import { BaseComponent } from '../base-component';
import { Footer } from '../footer/footer';
import { AdminHeader } from './admin-panel-header/admin-panel-header';
import { AdminMainWrapper } from './admin-main-wrapper/admin-main-wrapper';
import { AdminMain } from './admin-main/admin-main'
import { deleteCard, deleteCategory, deleteCards } from '../../Api';
import './admin-panel.scss';

export class Admin extends BaseComponent {
  private readonly Footer: Footer;

  private readonly AdminHeader: AdminHeader;

  private AdminMainWrapper: AdminMainWrapper;

  constructor() {
    super('div', ['admin_panel']);
    this.AdminHeader = new AdminHeader();
    this.element.appendChild(this.AdminHeader.element);
    this.AdminMainWrapper = new AdminMainWrapper();
    this.element.appendChild(this.AdminMainWrapper.element);
    this.Footer = new Footer();
    this.element.appendChild(this.Footer.element);
    this.nav();
  }

  nav(): void {
    document.body.addEventListener('click', async (e) => {
      if ((e.target as HTMLElement).hasAttribute('data-catname')) {
        this.showcards(e)
      }
      if (
        (e.target as HTMLElement).getAttribute('data-word') === 'categorie'
        && !((e.target as HTMLElement).parentElement as HTMLElement).classList.contains('active_rout')
      ) {
       this.showcategories();
      }
      if ((e.target as HTMLElement).hasAttribute('data-deleteword')) {
        this.deletewords(e);
      }
      if ((e.target as HTMLElement).hasAttribute('data-deletecat')) {
        this.deletecategories(e)
      }
      if ((e.target as HTMLElement).hasAttribute('data-update')) {
        let name = (e.target as HTMLElement).getAttribute('data-update') as string;
        this.AdminMainWrapper.UpdateCat(name);
      }
      if ((e.target as HTMLElement).hasAttribute('data-imgcreatecat')) {
        this.AdminMainWrapper.createcat();
      }
    });
  }
  showcards(e:MouseEvent){
    this.AdminMainWrapper.AdminMain.element.innerHTML = '';
    this.AdminMainWrapper.AdminMain.StartWords((e.target as HTMLElement).getAttribute('data-catname') as string);
    this.AdminHeader.AdminCategories.element.classList.remove('active_rout');
    this.AdminHeader.AdminCards.element.classList.add('active_rout');
  }
  showcategories(){
    this.AdminMainWrapper.AdminMain.element.innerHTML = '';
    this.AdminMainWrapper.AdminMain.startCategories();
    this.AdminHeader.AdminCategories.element.classList.add('active_rout');
    this.AdminHeader.AdminCards.element.classList.remove('active_rout');
  }
  async deletewords(e:MouseEvent){
    await deleteCard((e.target as HTMLElement).getAttribute('data-deleteword') as string);
    this.AdminMainWrapper.AdminMain.element.innerHTML = '';
    this.AdminMainWrapper.AdminMain.StartWords((e.target as HTMLElement).getAttribute('data-catname') as string);
  }
  async deletecategories(e:MouseEvent){
    await deleteCategory((e.target as HTMLElement).getAttribute('data-deletecat') as string);
        const category = (e.target as HTMLElement).getAttribute('data-deletecat') as string;
        await deleteCards({ categoryname: category });
        this.AdminMainWrapper.element.innerHTML = '';
        this.AdminMainWrapper.AdminMain = new AdminMain();
        this.AdminMainWrapper.element.appendChild(this.AdminMainWrapper.AdminMain.element);
  }
}

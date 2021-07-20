import { BaseComponent } from '../../base-component';
import { AdminMain } from '../admin-main/admin-main';
import {
  getCards,
  getCategoryByName,
  updateCategory,
  updateCard,
  createCategorie,
  createCards,
  updateCards,
} from '../../../Api';
import { CreateCardCategorieForm } from '../admin-main/create-categorie/create-cat-form/create-cat-form';
import { CreateCardWordForm } from '../admin-main/create-word/create-word-form/create-word-form';
import './admin-main-wrapper.scss';

export class AdminMainWrapper extends BaseComponent {
  public AdminMain: AdminMain;

  constructor() {
    super('div', ['admin_main_wrap']);
    this.AdminMain = new AdminMain();
    this.element.appendChild(this.AdminMain.element);
  }

  UpdateCat(name: string): void {
    const el = document.getElementsByName(name);
    el[0].innerHTML = '';
    el[0].appendChild(new CreateCardCategorieForm().element);
    const form = document.querySelector('.create_categorie_form') as HTMLFormElement;
    form.addEventListener('submit', async (element) => {
      element.preventDefault();
      const category = getCategoryByName(name);
      const newcatname = (document.querySelector('.admin_cat_name') as HTMLInputElement).value;
      await category.then(async (data) => {
        data[0].name = newcatname;
        updateCategory(data[0]);
      });
      const arr = getCards();
      await arr.then(async (data) => {
        const wordcards = data.filter((elem) => elem.category.indexOf(name) !== -1);
        wordcards.forEach(async (e) => {
          e.category = newcatname;
          updateCard(e);
        });
      });
      this.AdminMain.element.innerHTML = '';
      this.AdminMain.startCategories();
    });
    this.CanselFormUpdate(form);
  }

  CanselFormUpdate(form: HTMLFormElement): void {
    const btncansel = document.querySelector('.admin_create_btn_cansel') as HTMLElement;
    btncansel.addEventListener('click', () => {
      form.reset();
      this.AdminMain.element.innerHTML = '';
      this.AdminMain.startCategories();
    });
  }

  createcat(): void {
    this.AdminMain.CreateCardCategorie.element.innerHTML = '';
    this.AdminMain.CreateCardCategorie.element.appendChild(new CreateCardCategorieForm().element);
    this.createcategorieForm();
  }

  async createcategorieForm(): Promise<void> {
    const form = document.querySelector('.create_categorie_form') as HTMLFormElement;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const catname = (document.querySelector('.admin_cat_name') as HTMLInputElement).value;
      await createCategorie({ name: catname });
      this.AdminMain.CreateCardCategorie.element.innerHTML = '';
      this.AdminMain.CreateCardCategorie.CreateCatItem();
      this.AdminMain.element.innerHTML = '';
      this.AdminMain.startCategories();
    });
    this.CanselForm(form);
  }

  CanselForm(form: HTMLFormElement): void {
    const btncansel = document.querySelector('.admin_create_btn_cansel') as HTMLElement;
    btncansel.addEventListener('click', () => {
      form.reset();
      this.AdminMain.CreateCardCategorie.element.innerHTML = '';
      this.AdminMain.CreateCardCategorie.CreateCatItem();
    });
  }

  createword(): void {
    this.AdminMain.CreateCardWord.element.innerHTML = '';
    this.AdminMain.CreateCardWord.element.appendChild(new CreateCardWordForm().element);
    this.createwordForm();
  }

  createwordForm(): void {
    const form = document.querySelector('.word_create_form') as HTMLFormElement;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formdata = new FormData(form);
      const category = this.AdminMain.CreateCardWord.element.getAttribute('category') as string;
      formdata.append('category', category);
      await createCards(formdata);
      this.AdminMain.CreateCardWord.element.innerHTML = '';
      this.AdminMain.CreateCardWord.createWord();
      this.AdminMain.element.innerHTML = '';
      this.AdminMain.StartWords(category);
    });
    this.CanselFormWord(form);
  }

  CanselFormWord(form: HTMLFormElement): void {
    const btncansel = document.querySelector('.admin_categorie_word_cansel') as HTMLElement;
    btncansel.addEventListener('click', () => {
      form.reset();
      this.AdminMain.CreateCardWord.element.innerHTML = '';
      this.AdminMain.CreateCardWord.createWord();
    });
  }

  UpdateWord(name: string): void {
    const el = document.getElementsByName(name);
    el[0].innerHTML = '';
    el[0].appendChild(new CreateCardWordForm().element);
    const category = this.AdminMain.CreateCardWord.element.getAttribute('category') as string;
    const form = document.querySelector('.word_create_form') as HTMLFormElement;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formdata = new FormData(form);
      formdata.append('category', category);
      formdata.append('oldname', name);
      await updateCards(formdata);
      this.AdminMain.element.innerHTML = '';
      this.AdminMain.StartWords(category);
    });
    this.CanselUpdateFormWord(form, category);
  }

  CanselUpdateFormWord(form: HTMLFormElement, category: string): void {
    const btncansel = document.querySelector('.admin_categorie_word_cansel') as HTMLElement;
    btncansel.addEventListener('click', () => {
      form.reset();
      this.AdminMain.element.innerHTML = '';
      this.AdminMain.StartWords(category);
    });
  }
}

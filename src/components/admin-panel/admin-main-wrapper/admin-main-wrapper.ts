import { BaseComponent } from '../../base-component';
import { AdminMain } from '../admin-main/admin-main'
import { getCards, getCategoryByName, updateCategory, updateCard, createCategorie } from '../../../Api';
import { CreateCardCategorieForm } from '../admin-main/create-categorie/create-cat-form/create-cat-form';
import './admin-main-wrapper.scss';

export class AdminMainWrapper extends BaseComponent {
    public AdminMain: AdminMain;
    constructor() {
        super('div', ['admin_main_wrap']);
        this.AdminMain = new AdminMain();
        this.element.appendChild(this.AdminMain.element)
    }
    UpdateCat(name: string) {
        let el = document.getElementsByName(name);
        el[0].innerHTML = '';
        el[0].appendChild(new CreateCardCategorieForm().element);
        const form = document.querySelector('.create_categorie_form') as HTMLFormElement;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let category = getCategoryByName(name);
            let newcatname = (document.querySelector('.admin_cat_name') as HTMLInputElement).value;
            category.then(async (data) => {
                data[0].name = newcatname;
                updateCategory(data[0]);
            });
            const arr = getCards();
            arr.then(async (data) => {
                const wordcards = data.filter((el) => el.category.indexOf(name) !== -1);
                console.log(wordcards[0])
                wordcards.forEach((e) => {
                    e.category = newcatname;
                    updateCard(e);
                })
            });
            this.AdminMain.element.innerHTML = '';
            this.AdminMain.startCategories();
        })
        this.CanselFormUpdate(form);
    }
    CanselFormUpdate(form: HTMLFormElement): void {
        let btncansel = document.querySelector('.admin_create_btn_cansel') as HTMLElement;
        btncansel.addEventListener('click', () => {
            form.reset();
            this.AdminMain.element.innerHTML = '';
            this.AdminMain.startCategories();
        });


    }
    createcat(): void {
        this.AdminMain.CreateCardCategorie.element.innerHTML = '';
        this.AdminMain.CreateCardCategorie.element.appendChild(new CreateCardCategorieForm().element)
        this.createcategorieForm();
    }
    async createcategorieForm(): Promise<void> {
        const form = document.querySelector('.create_categorie_form') as HTMLFormElement;
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            let catname = (document.querySelector('.admin_cat_name') as HTMLInputElement).value;
            await createCategorie({ name: catname });
            this.AdminMain.CreateCardCategorie.element.innerHTML = '';
            this.AdminMain.CreateCardCategorie.CreateCatItem();
            this.AdminMain.element.innerHTML = '';
            this.AdminMain.startCategories();
        })
        this.CanselForm(form);
    }
    CanselForm(form: HTMLFormElement): void {
        let btncansel = document.querySelector('.admin_create_btn_cansel') as HTMLElement;
        btncansel.addEventListener('click', () => {
            form.reset();
            this.AdminMain.CreateCardCategorie.element.innerHTML = '';
            this.AdminMain.CreateCardCategorie.CreateCatItem();
        });
    }


}

import { BaseComponent } from '../../../../base-component';
import './create-cat-form.scss';

export class CreateCardCategorieForm extends BaseComponent {
    constructor() {
        super('form', ['create_categorie_form']);
        this.element.innerHTML = `
        <div class="create_categorie_input">
        <input class="admin_cat_name" type="text" required placeholder="Category name"> 
        </div>
        <div class="admin_create_categorie_buttons">
        <button type="button" class="admin_create_btn admin_create_btn_cansel">Cansel</button>
        <button class="admin_create_btn admin_create_btn_create">Create</button>
        </div>
        `;
    }


}

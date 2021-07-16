import { BaseComponent } from '../../../base-component';
import './admin-categorie.scss';

export class CardCategorie extends BaseComponent {
  constructor(name: string, words: number) {
    super('div', ['admin_categorie']);
    this.element.innerHTML = `
        <div class="admin_categorie_card_top">
        <h2 class="categorie_name">${name}</h2>
        <img class="categorie_close" src="../../images/cansel.png" data-deletecat='${name}' alt="close">
        </div>
        <div class="admin_categorie_card_main">
        <p class="admin_categorie_card_main_text">Words:<span class="admin_categorie_card_main_number">${words}</span></p>
        </div>
        <div class="admin_categorie_card_bottom">
        <button class="admin_btn admin_categorie_card_update">Update</button>
        <button class="admin_btn admin_categorie_card_addword" data-catname="${name}">Add word</button>
        </div>
        `;
  }
}

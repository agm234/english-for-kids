import { BaseComponent } from '../../../base-component';
import './admin-word.scss';

export class CardWord extends BaseComponent {
  constructor(name: string, translation: string, img: string, category: string, soundname: string) {
    super('div', ['admin_word']);
    this.element.setAttribute('name', name);
    this.element.innerHTML = `
        <img class="categorie_close" src="https://res.cloudinary.com/dnddbsls8/image/upload/v1626271926/english-for-kids/images/cansel_g6qape.png" 
        data-deleteword='${name}' data-catname="${category}" 
        alt="close">
        <p class="admin_word_card_main_text">Word: <span class="admin_word_card_main_info"> ${name}</span></p>
        <p class="admin_word_card_main_text">Translation: <span class="admin_word_card_main_info"> ${translation}</span></p>
        <p class="admin_word_card_main_text">Sound File: <span class="admin_word_card_main_info"> ${soundname}</span></p>
        <p class="admin_word_card_main_text">Image:</p>
        <img class="word_img" src="${img}" alt="close">
        <button class="admin_btn admin_categorie_card_change" data-wordupdate="${name}">Change</button>
        </div>
        `;
  }
}

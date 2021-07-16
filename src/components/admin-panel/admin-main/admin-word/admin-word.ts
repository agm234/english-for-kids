import { BaseComponent } from '../../../base-component';
import './admin-word.scss';

export class CardWord extends BaseComponent {
  constructor(name: string, translation: string, sound: string, img: string, category: string) {
    super('div', ['admin_word']);
    this.element.innerHTML = `
        <img class="categorie_close" src="../../images/cansel.png" data-deleteword='${name}' data-catname="${category}" 
        alt="close">
        <p class="admin_word_card_main_text">Word: <span class="admin_word_card_main_info"> ${name}</span></p>
        <p class="admin_word_card_main_text">Translation: <span class="admin_word_card_main_info"> ${translation}</span></p>
        <p class="admin_word_card_main_text">Sound File: <span class="admin_word_card_main_info"> ${sound.slice(
    6,
  )}</span></p>
        <p class="admin_word_card_main_text">Image:</p>
        <img class="word_img" src="../../${img}" alt="close">
        <button class="admin_btn admin_categorie_card_change" data-wordupdate="${name}">Change</button>
        </div>
        `;
  }
}

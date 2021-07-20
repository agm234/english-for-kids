import { BaseComponent } from '../../../base-component';
import './create-word.scss';

export class CreateCardWord extends BaseComponent {
  constructor() {
    super('div', ['create_word']);
    this.createWord();
  }

  createWord(): void {
    this.element.innerHTML = `
    <div class="create_word_header">
    <h2 class="create_word_header_text">Create new Word</h2>
    </div>
    <div class="create_word_main">
    <img class="create_word_main_img" 
    src="https://res.cloudinary.com/dnddbsls8/image/upload/v1626271925/english-for-kids/images/add_categorie_ac9lqp.png" 
    alt="close" data-imgcreateword="create">
    </div>
    `;
  }
}

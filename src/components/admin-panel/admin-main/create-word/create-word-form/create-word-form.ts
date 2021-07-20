import { BaseComponent } from '../../../../base-component';
import './create-word-form.scss';

export class CreateCardWordForm extends BaseComponent {
  constructor() {
    super('form', ['word_create_form']);
    this.element.setAttribute('enctype', 'multipart/form-data');
    this.element.innerHTML = `
        <div class="word_inputs_create">
        <input class="textinput createword" type="text" placeholder="Word" name="word" required>
        <input class="textinput  createtransalate" type="text" placeholder="Translation" name="translation" required>
        <p class="fileinput">Sound: <input class="createsound" type="file" name="avatar" required></p>
        <p class="fileinput">Image: <input class="createimg" type="file"  name="avatar" required></p>
        </div>
        <div class="word_btns_create">
        <button type="button" class="admin_btn admin_categorie_word_cansel" data-wordformupdate="">Cansel</button>
        <button  class="admin_btn admin_categorie_word_create" data-wordfromupdate="">Create</button>
        </div>
        `;
  }
}

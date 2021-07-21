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
        <p class="fileinput">Sound:
        <label class="lable" for="upload-sound">
        Select File
        <input id="upload-sound" class="createsound" type="file" name="avatar" required>
        </label>
        </p>
        <p class="fileinput">Image: 
        <label class="lable" for="upload-image">
        Select File
        <input id="upload-image" class="createimg" type="file"  name="avatar" required>
        </label>
        </p>
        </div>
        <div class="word_btns_create">
        <button type="button" class="admin_btn admin_categorie_word_cansel" data-wordformupdate="">Cansel</button>
        <button  class="admin_btn admin_categorie_word_create" data-wordfromupdate="">Create</button>
        </div>
        `;
  }
}

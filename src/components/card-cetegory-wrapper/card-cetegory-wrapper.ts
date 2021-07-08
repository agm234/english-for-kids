import { BaseComponent } from '../base-component';
import './card-cetegory-wrapper.scss';

export class CardCategoryWrapper extends BaseComponent {
  constructor(none1: string, audio: string) {
    super('div', ['card_category_wrapper', `${none1}`]);
    this.element.setAttribute('audio', audio);
  }
}

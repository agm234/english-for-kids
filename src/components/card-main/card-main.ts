import { BaseComponent } from '../base-component';
import './card-main.scss';

export class CardMain extends BaseComponent {
  constructor(name: string, page: string, image: string, checked: string) {
    super('div', ['card']);
    this.element.innerHTML = `
        <a href="#${page}">
        <div class="card_top ${checked}"></div>
        <div class="card-img" style="background-image:url('../../${image}')"></div>
        <div class="card_bottom">
        <p class="card_name">${name}</p>
        </div>
        </a>
        `;
  }
}

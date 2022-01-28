import { BaseComponent } from '../base-component';
import './card-main.scss';

export class CardMain extends BaseComponent {
  constructor(name: string, page: string, image: string, checked: string) {
    super('div', ['card']);
    let nav=this.newcat(page,name)
    this.element.innerHTML = `
        <a href="#${nav}">
        <div class="card_top ${checked}"></div>
        <div class="card-img" style="background-image:url('${image}')"></div>
        <div class="card_bottom">
        <p class="card_name">${name}</p>
        </div>
        </a>
        `;
  }
  newcat(page:string,name:string):string{
    if(page===undefined){
      return name;
    }else {
      return page;
    }
  }
}

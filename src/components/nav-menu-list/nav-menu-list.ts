import { BaseComponent } from '../base-component';
import './nav-menu-list.scss';

export class MenuList extends BaseComponent {
  constructor() {
    super('ul', ['menu_list']);
    this.element.innerHTML = `
        <li><a id="main" class='active_page' href="#main">Main Page</a></li>
        <li><a id="Action (set A)" href="#1">Action (set A)</a></li>
        <li><a id="Action (set B)" href="#2">Action (set B)</a></li>
        <li><a id="Cities" href="#3">Cities</a></li>
        <li><a id="Transport" href="#4">Transport</a></li>
        <li><a id="Animal (set A)" href="#5">Animal (set A)</a></li>
        <li><a id="Animal (set B)" href="#6">Animal (set B)</a></li>
        <li><a id="Clothes" href="#7">Clothes</a></li>
        <li><a id="Emotions" href="#8">Emotion</a></li>
        <li><a id="Stats" href="#Stats">Stats</a></li>
        `;
    this.CurrentPage();
  }

  CurrentPage(): void {
    this.element.addEventListener('click', (e) => {
      document.querySelector('.active_page')?.classList.remove('active_page');
      (e.target as HTMLElement).classList.add('active_page');
    });
  }
}

import { BaseComponent } from '../base-component';
import './main-wrapper.scss';

export class MainWrapper extends BaseComponent {
  constructor() {
    super('div', ['main_wrapper', 'none_wrap']);
  }
}

import { BaseComponent } from '../base-component';
import './inactive.scss';

export class Inactive extends BaseComponent {
  constructor() {
    super('div', ['inactive', 'inactivenone']);
  }
}

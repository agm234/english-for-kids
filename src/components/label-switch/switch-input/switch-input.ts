import { BaseComponent } from '../../base-component';
import './switch-input.scss';

export class SwitchInput extends BaseComponent {
  constructor() {
    super('input', ['switch-input']);
    this.element.setAttribute('type', 'checkbox');
  }
}

import { BaseComponent } from '../base-component';
import { Burger } from '../burger/burger';
import { LabelSwitch } from '../label-switch/label-switch';
import './wrapper_header.scss';

export class WrapperHeader extends BaseComponent {
  public readonly Burger: Burger;

  public readonly LabelSwitch: LabelSwitch;

  constructor() {
    super('header', ['wrapper_header']);
    this.Burger = new Burger();
    this.element.appendChild(this.Burger.element);
    this.LabelSwitch = new LabelSwitch();
    this.element.appendChild(this.LabelSwitch.element);
  }
}

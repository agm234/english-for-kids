import { BaseComponent } from '../../base-component';
import './span_train.scss';

export class SpanTrain extends BaseComponent {
  constructor() {
    super('span', ['span_train']);
    this.element.innerHTML = `
        <p class="span_train_text">Train</p>
        `;
  }
}

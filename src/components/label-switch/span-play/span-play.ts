import { BaseComponent } from '../../base-component';
import './span-play.scss';

export class SpanPlay extends BaseComponent {
  constructor() {
    super('span', ['span_play', 'span_none']);
    this.element.innerHTML = `
        <p class="span_train_text_play">Play</p>
        `;
  }
}

import { BaseComponent } from '../base-component';
import { Slider } from './slider/slider';
import { SwitchInput } from './switch-input/switch-input';
import { SpanTrain } from './span_train/span_train';
import { SpanPlay } from './span-play/span-play';

import './label-switch.scss';

export class LabelSwitch extends BaseComponent {
  public readonly Slider: Slider;

  public readonly SwitchInput: SwitchInput;

  public readonly SpanTrain: SpanTrain;

  public readonly SpanPlay: SpanPlay;

  constructor() {
    super('label', ['switch']);
    this.SwitchInput = new SwitchInput();
    this.element.appendChild(this.SwitchInput.element);
    this.Slider = new Slider();
    this.element.appendChild(this.Slider.element);
    this.SpanTrain = new SpanTrain();
    this.element.appendChild(this.SpanTrain.element);
    this.SpanPlay = new SpanPlay();
    this.element.appendChild(this.SpanPlay.element);
  }
}

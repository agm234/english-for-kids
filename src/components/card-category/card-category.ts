import { BaseComponent } from '../base-component';
import { CardFront } from '../card-front/card-front';
import { CardBack } from '../card-back/card-back';
import { CardCategoryWrapper } from '../card-cetegory-wrapper/card-cetegory-wrapper';
import { Inactive } from '../inactive/inactive';
import { Swap } from '../swap/swap';
import './card-category.scss';

export class CardCat extends BaseComponent {
  private readonly CardFront: CardFront;

  public readonly Swap: Swap;

  private readonly CardBack: CardBack;

  private readonly CardCategoryWrapper: CardCategoryWrapper;

  private readonly Inactive: Inactive;

  constructor(
    image: string,
    name: string,
    translate: string,
    audio: string,
    mode: string,
    none: string,
    none1: string,
  ) {
    super('div', ['card_category']);
    this.Inactive = new Inactive();
    this.element.appendChild(this.Inactive.element);
    this.CardCategoryWrapper = new CardCategoryWrapper(none1, audio);
    this.element.appendChild(this.CardCategoryWrapper.element);
    this.CardFront = new CardFront(image, name, audio, mode, none);
    this.element.appendChild(this.CardFront.element);
    this.CardBack = new CardBack(image, translate);
    this.element.appendChild(this.CardBack.element);
    this.Swap = new Swap(none);
    this.element.appendChild(this.Swap.element);
    this.SwapCard();
  }

  SwapCard(): void {
    this.Swap.element.addEventListener('click', () => {
      this.Swap.element.classList.add('swapped');
      this.element.classList.add('fliped');
    });
    this.element.addEventListener('mouseleave', () => {
      this.element.classList.remove('fliped');
      setTimeout(() => {
        this.Swap.element.classList.remove('swapped');
      }, 200);
    });
  }
}

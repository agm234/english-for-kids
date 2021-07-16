import { BaseComponent } from '../base-component';
import { NavMeny } from '../nav-menu/nav-menu';
import { WrapperHeader } from '../wrapper_header/wrapper_header';
import { CardsField } from '../cards-field/cards-field';
import { Footer } from '../footer/footer';
import { BtnStart } from '../btn_start/btn_start';
import { Stars } from '../stars/stars';
import { Star } from '../star/star';
import { Word } from '../stats-table-row/stats-table-row';
import { MainWrapper } from '../main-wrapper/main-wrapper';
import { errors } from '../stats-table-row/persent_erors';
import { difficult } from '../../wordsDiffic';
import './wrapper.scss';

export class Wrapper extends BaseComponent {
  public readonly NavMeny: NavMeny;

  public readonly Footer: Footer;

  public readonly WrapperHeader: WrapperHeader;

  public readonly BtnStart: BtnStart;

  public readonly CardsField: CardsField;

  private GameStarted: boolean;

  public readonly Stars: Stars;

  public answers: number;

  public CurrentSoundindex: number[];

  public MainWrapper: MainWrapper;

  constructor() {
    super('div', ['wrapper']);
    this.NavMeny = new NavMeny();
    this.element.appendChild(this.NavMeny.element);
    this.WrapperHeader = new WrapperHeader();
    this.element.appendChild(this.WrapperHeader.element);
    this.Stars = new Stars();
    this.element.appendChild(this.Stars.element);
    this.CardsField = new CardsField();
    this.element.appendChild(this.CardsField.element);
    this.BtnStart = new BtnStart();
    this.element.appendChild(this.BtnStart.element);
    this.Footer = new Footer();
    this.element.appendChild(this.Footer.element);
    this.MainWrapper = new MainWrapper();
    this.element.appendChild(this.MainWrapper.element);
    this.CurrentSoundindex = [];
    this.answers = 0;
    this.GameStarted = false;
    this.showNav();
    this.checkboxMain();
    this.StartGame();
  }

  showNav(): void {
    this.WrapperHeader.Burger.element.addEventListener('click', () => {
      this.WrapperHeader.Burger.element.classList.toggle('active_burger');
      this.NavMeny.element.classList.toggle('nav_active');
      document.body.classList.toggle('scroll-hidden');
      this.MainWrapper.element.classList.toggle('none_wrap');
    });
    this.MainWrapper.element.onclick = () => {
      if (this.NavMeny.element.classList.contains('nav_active')) {
        this.WrapperHeader.Burger.element.classList.toggle('active_burger');
        this.NavMeny.element.classList.toggle('nav_active');
        document.body.classList.toggle('scroll-hidden');
        this.MainWrapper.element.classList.toggle('none_wrap');
      }
    };
  }

  checkboxMain(): void {
    this.WrapperHeader.LabelSwitch.element.addEventListener('change', () => {
      this.CardsField.tablecolor();
      this.removerepeat();
      const child = this.CardsField.element.firstChild as HTMLElement;
      if (child.classList.contains('card_category') && this.GameStarted) {
        const loc = this.CardsField.element.getAttribute('page') as string;
        this.answers = 0;
        this.CardsField.element.innerHTML = '';
        if (loc === 'Hardwords') {
          this.hardword();
        } else {
          this.CardsField.startCat(loc);
        }
      }
      this.cheked(child);
    });
  }

  cheked(child: HTMLElement): void {
    if ((this.WrapperHeader.LabelSwitch.SwitchInput.element as HTMLInputElement).checked) {
      this.WrapperHeader.LabelSwitch.SwitchInput.element.setAttribute('cheacked', 'cheacked');
      if (child.classList.contains('card_category')) {
        this.BtnStart.element.classList.remove('btn_none');
        this.chekedEl();
      } else {
        this.mainRed();
      }
    } else {
      this.GameStarted = false;
      this.WrapperHeader.LabelSwitch.SwitchInput.element.removeAttribute('cheacked');
      if (child.classList.contains('card_category')) {
        this.BtnStart.element.classList.add('btn_none');
        this.nocheked();
      } else {
        this.mainGreen();
      }
    }
  }

  mainGreen(): void {
    this.NavMeny.BtnLogin.element.classList.remove('btnred');
    const cardstop = document.querySelectorAll('.red');
    cardstop.forEach((e) => {
      e.classList.remove('red');
      e.classList.add('green');
    });
    this.WrapperHeader.LabelSwitch.SpanTrain.element.classList.remove('span_none');
    this.WrapperHeader.LabelSwitch.SpanPlay.element.classList.add('span_none');
  }

  mainRed(): void {
    this.NavMeny.BtnLogin.element.classList.add('btnred');
    const cardstop = document.querySelectorAll('.green');
    cardstop.forEach((e) => {
      e.classList.remove('green');
      e.classList.add('red');
    });
    this.WrapperHeader.LabelSwitch.SpanTrain.element.classList.add('span_none');
    this.WrapperHeader.LabelSwitch.SpanPlay.element.classList.remove('span_none');
  }

  chekedEl(): void {
    document.querySelectorAll('.display').forEach((e) => {
      e.classList.remove('display');
      e.classList.add('none');
      document.querySelectorAll('.train').forEach((el) => {
        el.classList.remove('train');
        el.classList.add('game');
      });
      document.querySelectorAll('.none1').forEach((elem) => {
        elem.classList.remove('none1');
        elem.classList.add('display1');
      });
    });

    this.mainRed();
  }

  nocheked(): void {
    document.querySelectorAll('.none').forEach((e) => {
      e.classList.remove('none');
      e.classList.add('display');
    });
    document.querySelectorAll('.game').forEach((e) => {
      e.classList.remove('game');
      e.classList.add('train');
    });
    document.querySelectorAll('.display1').forEach((e) => {
      e.classList.remove('display1');
      e.classList.add('none1');
    });

    this.mainGreen();
  }

  StartGame(): void {
    this.BtnStart.element.addEventListener('click', () => {
      this.GameStarted = true;
      const index = this.CardsField.getIndex();
      if (!this.BtnStart.element.classList.contains('repeat')) {
        this.CurrentSoundindex.push(index);
        this.CardsField.PlaySounds(index);
        this.PlayGame();
        this.BtnStart.element.classList.add('repeat');
        this.BtnStart.element.children[0].classList.add('text_hide');
      } else {
        this.CardsField.PlaySounds(this.CurrentSoundindex[0]);
      }
    });
  }

  nextsound(): void {
    this.CurrentSoundindex = [];
    const index1 = this.CardsField.getIndex();
    this.CurrentSoundindex.push(index1);
    this.CardsField.PlaySounds(index1);
  }

  PlayGame(): void {
    const cardscat: NodeListOf<HTMLElement> = document.querySelectorAll('.card_category_wrapper');
    cardscat.forEach((e) => {
      e.addEventListener('click', () => {
        const curraudio = e.getAttribute('audio');
        if (curraudio === this.CardsField.sounds[this.CurrentSoundindex[0]]) {
          this.rightanswer(e);
        } else {
          this.wronganswer(e);
        }
      });
    });
  }

  rightanswer(e: HTMLElement): void {
    e.classList.add('rightanswer');
    (e.parentElement?.firstChild as HTMLElement).classList.remove('inactivenone');
    const obj: Word = JSON.parse(localStorage.getItem(e.getAttribute('audio')?.slice(6, -4) as string) as string);
    obj.correct += 1;
    obj.errors = errors(obj.correct, obj.wrong);
    localStorage.setItem(e.getAttribute('audio')?.slice(6, -4) as string, JSON.stringify(obj));
    this.Stars.element.appendChild(new Star('rightanswer').element);
    const audiosucses = new Audio('audio/correct.mp3');
    audiosucses.play();
    this.CardsField.sounds.splice(this.CurrentSoundindex[0], 1);
    setTimeout(() => {
      if (this.CardsField.sounds.length > 0) {
        this.nextsound();
      } else {
        this.Stars.element.innerHTML = '';
        this.CurrentSoundindex = [];
        this.btnStartRemuve();
        if (this.answers === 0) {
          this.endgamewin();
        } else {
          this.endgamelose();
        }
      }
    }, 1000);
  }

  wronganswer(e: HTMLElement): void {
    this.answers += 1;
    const obj: Word = JSON.parse(localStorage.getItem(e.getAttribute('audio')?.slice(6, -4) as string) as string);
    obj.wrong += 1;
    obj.errors = errors(obj.correct, obj.wrong);
    localStorage.setItem(e.getAttribute('audio')?.slice(6, -4) as string, JSON.stringify(obj));
    this.Stars.element.appendChild(new Star('wronganswer').element);
    const audioerror = new Audio('audio/error.mp3');
    audioerror.play();
  }

  btnStartRemuve(): void {
    if (!this.BtnStart.element.classList.contains('btn_none')) {
      this.BtnStart.element.classList.add('btn_none');
    }
  }

  endgamewin(): void {
    this.BtnStart.element.classList.remove('repeat');
    this.CardsField.element.innerHTML = `
      <div class="win">
      <h2 class="endheader">Win</h2>
      <img class="img" src="../../Endgame/win.svg" alt="">
      </div>
      `;
    this.winLose();
    const audio = new Audio('audio/success.mp3');
    audio.play();
    this.goToMain();
    this.removerepeat();
  }

  endgamelose(): void {
    this.BtnStart.element.classList.remove('repeat');
    this.CardsField.element.innerHTML = `
    <div class="lose">
    <h2 class="endheader" >${this.answers} Errors</h2>
    <img class="img" src="../../Endgame/lose.svg" alt="">
    </div>
    `;
    this.winLose();
    const audio = new Audio('audio/failure.mp3');
    audio.play();
    this.goToMain();
    this.removerepeat();
  }

  goToMain(): void {
    this.answers = 0;
    setTimeout(() => {
      this.CardsField.element.innerHTML = '';
      this.winLose();
      this.CardsField.start();
    }, 5000);
  }

  winLose(): void {
    this.WrapperHeader.element.classList.toggle('hide');
    this.Footer.element.classList.toggle('hide');
  }

  removerepeat(): void {
    this.BtnStart.element.children[0].classList.remove('text_hide');
    if (this.BtnStart.element.classList.contains('repeat')) {
      this.BtnStart.element.classList.remove('repeat');
    }
    this.Stars.element.innerHTML = '';
    this.CurrentSoundindex = [];
  }

  hardword(): void {
    if (difficult().length > 0) {
      this.CardsField.AddCardCat(difficult());
    } else {
      this.Footer.element.classList.add('visible');
      this.WrapperHeader.element.classList.add('visible');
      if (!this.BtnStart.element.classList.contains('btn_none')) {
        this.BtnStart.element.classList.add('btn_none');
      }
      this.CardsField.element.innerHTML = '<p class="hard">There are no difficult words</p>';
      setTimeout(() => {
        this.Footer.element.classList.remove('visible');
        this.WrapperHeader.element.classList.remove('visible');
        window.location.hash = '#main';
      }, 2000);
    }
  }
}

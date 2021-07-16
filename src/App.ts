import './styles.scss';
import { Wrapper } from './components/wrapper/wrapper';
import { TableWrapper } from './components/table-wrapper/table-wrapper';

export class App {
  private readonly Wrapper: Wrapper;

  private TableWrapper: TableWrapper;

  constructor(private readonly rootElement: HTMLElement) {
    this.Wrapper = new Wrapper();
    this.rootElement.appendChild(this.Wrapper.element);
    this.TableWrapper = new TableWrapper();
  }

  async routing(): Promise<void> {
    const routing = [
      {
        name: 'main',
        component: () => {
          this.Wrapper.Stars.element.style.display = 'none';
          this.Wrapper.btnStartRemuve();
          this.nav();
          this.Wrapper.CardsField.element.innerHTML = '';
          this.Wrapper.CardsField.element.setAttribute('page', 'main');
          this.Wrapper.CardsField.start();
          this.CurrentCardPage();
        },
      },
      {
        name: '1',
        component: () => {
          this.Wrapper.Stars.element.innerHTML = '';
          this.Wrapper.Stars.element.style.display = 'flex';
          this.btnStart();
          this.nav();
          this.Wrapper.CardsField.element.innerHTML = '';
          this.Wrapper.CardsField.element.setAttribute('page', 'Action (set A)');
          this.Wrapper.CardsField.startCat('Action (set A)');
          this.CurrentCardPage();
        },
      },
      {
        name: '2',
        component: () => {
          this.Wrapper.Stars.element.innerHTML = '';
          this.Wrapper.Stars.element.style.display = 'flex';
          this.btnStart();
          this.nav();
          this.Wrapper.CardsField.element.innerHTML = '';
          this.Wrapper.CardsField.element.setAttribute('page', 'Action (set B)');
          this.Wrapper.CardsField.startCat('Action (set B)');
          this.CurrentCardPage();
        },
      },
      {
        name: '3',
        component: () => {
          this.Wrapper.Stars.element.innerHTML = '';
          this.Wrapper.Stars.element.style.display = 'flex';
          this.btnStart();
          this.nav();
          this.Wrapper.CardsField.element.innerHTML = '';
          this.Wrapper.CardsField.element.setAttribute('page', 'Cities');
          this.Wrapper.CardsField.startCat('Cities');
          this.CurrentCardPage();
        },
      },
      {
        name: '4',
        component: () => {
          this.Wrapper.Stars.element.innerHTML = '';
          this.Wrapper.Stars.element.style.display = 'flex';
          this.btnStart();
          this.nav();
          this.Wrapper.CardsField.element.innerHTML = '';
          this.Wrapper.CardsField.element.setAttribute('page', 'Transport');
          this.Wrapper.CardsField.startCat('Transport');
          this.CurrentCardPage();
        },
      },
      {
        name: '5',
        component: () => {
          this.Wrapper.Stars.element.innerHTML = '';
          this.Wrapper.Stars.element.style.display = 'flex';
          this.btnStart();
          this.nav();
          this.Wrapper.CardsField.element.innerHTML = '';
          this.Wrapper.CardsField.element.setAttribute('page', 'Animal (set A)');
          this.Wrapper.CardsField.startCat('Animal (set A)');
          this.CurrentCardPage();
        },
      },
      {
        name: '6',
        component: () => {
          this.Wrapper.Stars.element.innerHTML = '';
          this.Wrapper.Stars.element.style.display = 'flex';
          this.btnStart();
          this.nav();
          this.Wrapper.CardsField.element.innerHTML = '';
          this.Wrapper.CardsField.element.setAttribute('page', 'Animal (set B)');
          this.Wrapper.CardsField.startCat('Animal (set B)');
          this.CurrentCardPage();
        },
      },
      {
        name: '7',
        component: () => {
          this.Wrapper.Stars.element.innerHTML = '';
          this.Wrapper.Stars.element.style.display = 'flex';
          this.btnStart();
          this.nav();
          this.Wrapper.CardsField.element.innerHTML = '';
          this.Wrapper.CardsField.element.setAttribute('page', 'Clothes');
          this.Wrapper.CardsField.startCat('Clothes');
          this.CurrentCardPage();
        },
      },

      {
        name: '8',
        component: () => {
          this.Wrapper.Stars.element.innerHTML = '';
          this.Wrapper.Stars.element.style.display = 'flex';
          this.btnStart();
          this.nav();
          this.Wrapper.CardsField.element.innerHTML = '';
          this.Wrapper.CardsField.element.setAttribute('page', 'Emotions');
          this.Wrapper.CardsField.startCat('Emotions');
          this.CurrentCardPage();
        },
      },
      {
        name: 'Stats',
        component: () => {
          this.Wrapper.Stars.element.innerHTML = '';
          this.Wrapper.Stars.element.style.display = 'none';
          this.Wrapper.btnStartRemuve();
          this.nav();
          this.Wrapper.CardsField.element.innerHTML = '';
          this.TableWrapper = new TableWrapper();
          this.Wrapper.CardsField.element.appendChild(this.TableWrapper.element);
          this.Wrapper.CardsField.element.setAttribute('page', 'Stats');
          this.CurrentCardPage();
          if (this.Wrapper.NavMeny.element.classList.contains('red')) {
            document.querySelector('.stats_table')?.classList.add('table_red');
          }
        },

      },
      {
        name: 'Hardwords',
        component: () => {
          this.Wrapper.Stars.element.innerHTML = '';
          this.Wrapper.Stars.element.style.display = 'flex';
          this.btnStart();
          this.nav();
          this.Wrapper.CardsField.element.innerHTML = '';
          this.Wrapper.CardsField.element.setAttribute('page', 'Hardwords');
          this.Wrapper.hardword();
          this.CurrentCardPage();
        },
      },
    ];
    const defaultRoute = {
      name: 'default',
      component: () => { },
    };
    window.onpopstate = () => {
      const currentRouteName = window.location.hash.slice(1);
      const currentRoute = routing.find((p) => p.name === currentRouteName);
      (currentRoute || defaultRoute).component();
    };
  }

  nav(): void {
    if (this.Wrapper.NavMeny.element.classList.contains('nav_active')) {
      this.Wrapper.NavMeny.element.classList.remove('nav_active');
      this.Wrapper.WrapperHeader.Burger.element.classList.remove('active_burger');
      document.body.classList.toggle('scroll-hidden');
      this.Wrapper.MainWrapper.element.classList.toggle('none_wrap');
    }
  }

  btnStart(): void {
    this.Wrapper.removerepeat();
    this.Wrapper.CurrentSoundindex = [];
    this.Wrapper.answers = 0;
    if (this.Wrapper.WrapperHeader.LabelSwitch.SwitchInput.element.hasAttribute('cheacked')) {
      this.Wrapper.BtnStart.element.classList.remove('btn_none');
    } else {
      this.Wrapper.BtnStart.element.classList.add('btn_none');
    }
  }

  CurrentCardPage(): void {
    const page = this.Wrapper.CardsField.element.getAttribute('page');
    document.querySelector('.active_page')?.classList.remove('active_page');
    if (page !== 'Hardwords') {
      document.getElementById(`${page}`)?.classList.add('active_page');
    }
  }
}

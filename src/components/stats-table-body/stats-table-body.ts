import { BaseComponent } from '../base-component';
import { StatsTableRow } from '../stats-table-row/stats-table-row';
import './stats-table-body.scss';

interface Word {
  category: string;
  word: string;
  translation: string;
  clicks: number;
  correct: number;
  wrong: number;
  errors: number;
}

export class StatsTableBody extends BaseComponent {
  public mass: Array<Word> = [];

  constructor() {
    super('tbody', ['stats_table_body']);
    this.rows(this.element);
  }

  rows(element: HTMLElement): void {
    for (let i = 0; i < localStorage.length; i += 1) {
      const word: Word = JSON.parse(localStorage.getItem(localStorage.key(i) as string) as string);
      const row = new StatsTableRow(word).element;
      this.mass.push(word);
      element.appendChild(row);
    }
  }
}

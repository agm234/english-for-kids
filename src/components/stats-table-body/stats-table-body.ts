import { BaseComponent } from '../base-component';
import { StatsTableRow } from '../stats-table-row/stats-table-row';
import { getCards } from '../../Api';
import './stats-table-body.scss';

interface Word {
  category: string;
  word: string;
  translation: string;
  clicks: number;
  correct: number;
  wrong: number;
  errorspers: number;
}

export class StatsTableBody extends BaseComponent {
  public mass: Array<Word> = [];

  constructor() {
    super('tbody', ['stats_table_body']);
    this.rows(this.element);
  }

  rows(element: HTMLElement): void {
    const arr = getCards();
    arr.then((data) => {
      for (let i = 0; i < data.length; i += 1) {
        const row = new StatsTableRow(data[i]).element;
        this.mass.push(data[i]);
        element.appendChild(row);
      }
    });
  }
}

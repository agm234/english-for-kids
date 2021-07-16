import { BaseComponent } from '../base-component';
import { errors } from './persent_erors';
import './stats-table-row.scss';

export interface Word {
  category: string;
  word: string;
  translation: string;
  clicks: number;
  correct: number;
  wrong: number;
  errors: number;
}

export class StatsTableRow extends BaseComponent {
  constructor({
    category, word, translation, clicks, correct, wrong,
  }: Word) {
    super('tr', ['stats-table-row']);
    this.element.innerHTML = `
        <td>${word}</td>
        <td>${category}</td>
        <td>${translation}</td>
        <td>${clicks}</td>
        <td>${correct}</td>
        <td>${wrong}</th>
        <td>${errors(correct, wrong)}</th>
        `;
  }
}

import { BaseComponent } from '../base-component';
import './stats-table-header.scss';

export class StatsTableHeader extends BaseComponent {
  constructor() {
    super('thead', ['stats_table_header']);
    this.element.innerHTML = `
        <th>Word</th>
        <th>Category</th>
        <th>Translation</th>
        <th>Clicks</th>
        <th>Correct</th>
        <th>Wrong</th>
        <th>Erors %</th>
        `;
  }
}

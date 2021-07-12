import { BaseComponent } from '../base-component';
import { StatsTableHeader } from '../stats-table-header/stats-table-header';
import { StatsTableBody } from '../stats-table-body/stats-table-body';
import { sortBycategory } from '../../sort';
import { StatsTableRow } from '../stats-table-row/stats-table-row';
import './stats-table.scss';

export class StatsTable extends BaseComponent {
  public StatsTableHeader: StatsTableHeader;

  public StatsTableBody: StatsTableBody;

  constructor() {
    super('table', ['stats_table']);
    this.StatsTableHeader = new StatsTableHeader();
    this.element.appendChild(this.StatsTableHeader.element);
    this.StatsTableBody = new StatsTableBody();
    this.element.appendChild(this.StatsTableBody.element);
    this.sort();
  }

  sort(): void {
    this.element.addEventListener('click', (e) => {
      const el = e.target as HTMLTableCellElement;
      if (el.nodeName === 'TH') {
        const index = el.cellIndex;
        document.querySelector('.desc')?.classList.remove('desc');
        document.querySelector('.asc')?.classList.remove('asc');
        const sortedarray = sortBycategory(this.StatsTableBody.mass, index);
        if (el.classList.contains('sorted')) {
          sortedarray?.reverse();
          el.classList.add('asc');
          el.classList.remove('sorted');
        } else {
          el.classList.add('desc');
          el.classList.add('sorted');
        }
        this.StatsTableBody.element.innerHTML = '';
        sortedarray?.forEach((elem) => {
          this.StatsTableBody.element.appendChild(new StatsTableRow(elem).element);
        });
      }
    });
  }
}

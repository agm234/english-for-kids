import { BaseComponent } from '../base-component';
import { StatsTable } from '../stats-table/stats-table';
import { StatsTableBody } from '../stats-table-body/stats-table-body';
import { StatsTableHeader } from '../stats-table-header/stats-table-header';
import { TableBtns } from '../table-btns/table-btns';
import { difficult } from '../../wordsDiffic';
import { words } from '../../local';

import './table-wrapper.scss';

export class TableWrapper extends BaseComponent {
  private readonly StatsTable: StatsTable;

  private readonly TableBtns: TableBtns;

  constructor() {
    super('div', ['table_wrapper']);
    this.TableBtns = new TableBtns();
    this.element.appendChild(this.TableBtns.element);
    this.StatsTable = new StatsTable();
    this.element.appendChild(this.StatsTable.element);
    this.Reset();
    this.dufficultwords();
  }

  Reset(): void {
    this.TableBtns.Btnrest.element.addEventListener('click', async () => {
      await words();
      this.resettable();
    });
  }

  resettable(): void {
    this.StatsTable.element.innerHTML = '';
    this.StatsTable.StatsTableBody = new StatsTableBody();
    this.StatsTable.StatsTableHeader = new StatsTableHeader();
    this.StatsTable.element.appendChild(this.StatsTable.StatsTableBody.element);
    this.StatsTable.element.appendChild(this.StatsTable.StatsTableHeader.element);
  }

  dufficultwords(): void {
    this.TableBtns.Btndifficult.element.addEventListener('click', () => {
      difficult();
      window.location.hash = '#Hardwords';
    });
  }
}

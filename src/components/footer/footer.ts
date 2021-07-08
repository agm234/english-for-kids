import { BaseComponent } from '../base-component';
import './footer.scss';

export class Footer extends BaseComponent {
  constructor() {
    super('footer', ['footer']);
    this.element.innerHTML = `
    <div class="git">
    <a class="footer_link" href="https://github.com/agm234"><img class="img" src="../../images/Git.png" alt="git"></a>
    </div>
    <div class="year">
    <p>2021 ©</p>
    </div>
    <div class="course">
    <a class="footer_link" href="https://rs.school/js/"><img class="img" src="../../images/rs_school_js.svg" alt="git"></a>
    </div>
    `;
  }
}

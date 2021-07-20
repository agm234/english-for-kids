import { BaseComponent } from '../base-component';
import './footer.scss';

export class Footer extends BaseComponent {
  constructor() {
    super('footer', ['footer']);
    this.element.innerHTML = `
    <div class="git">
    <a class="footer_link" href="https://github.com/agm234"><img class="img" 
    src="https://res.cloudinary.com/dnddbsls8/image/upload/v1626271926/english-for-kids/images/Git_x8p8wd.png" alt="git"></a>
    </div>
    <div class="year">
    <p>2021 ©</p>
    </div>
    <div class="course">
    <a class="footer_link" href="https://rs.school/js/"><img class="img" 
    src="https://res.cloudinary.com/dnddbsls8/image/upload/v1626271927/english-for-kids/images/rs_school_js_nbgdqy.svg" alt="git"></a>
    </div>
    `;
  }
}

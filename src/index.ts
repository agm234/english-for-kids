import './styles.scss';
import { App } from './App';
import { words } from './local';

window.onload = () => {
  new App(document.body).routing();
  if (localStorage.length === 0) {
    words();
  }
};

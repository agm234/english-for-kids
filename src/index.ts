import './styles.scss';
import { App } from './App';
// import { words } from './local';

window.onload = async () => {
  new App(document.body).routing();
  localStorage.clear();
  window.location.hash = '';
  // if (localStorage.length === 0) {
  //   words();
  // }
};

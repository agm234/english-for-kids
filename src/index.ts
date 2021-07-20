import './styles.scss';
import { App } from './App';

window.onload = async () => {
  new App(document.body).routing();
  localStorage.clear();
  window.location.hash = '';
};

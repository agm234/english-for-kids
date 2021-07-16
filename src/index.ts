import './styles.scss';
import { App } from './App';
// import { words } from './local';

window.onload = async () => {
  new App(document.body).routing();
  localStorage.clear();
  window.location.hash = '';
  alert('Проверьте пожалуйста мою работу в последний день кросчека.Попытаюсь разобраться с хероку и доделать таск.Заранее спасибо.');
  // if (localStorage.length === 0) {
  //   words();
  // }
};

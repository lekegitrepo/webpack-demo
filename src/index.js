import _ from 'lodash';
import './style.css';
import img from './paris.jpg';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const image = new Image();
  image.src = img;

  element.appendChild(image);

  return element;
}
console.log('New webpack')

console.log('New webpack watch!');

document.body.appendChild(component());

import _ from 'lodash';
import './style.css';
import img from './paris.jpg';
import Data from './data.xml';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const image = new Image();
  image.src = img;

  element.appendChild(image);

  console.log(Data);

  return element;
}

console.log(Data);

console.log('New webpack')

console.log('New webpack watch!');

document.body.appendChild(component());

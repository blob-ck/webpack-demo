// import _ from 'lodash';

//commonJS spec
// var _ = require('lodash');

//webpack spec
import _ from 'lodash';
import './style.css';
import './hello.scss';

//개별 export : {동일한 변수명} 명시해야함
import {area, circumference} from './js/circle';

//전체 export : {} 필요없고, 이름 변경 가능함
import cube2 from './js/cube';

function component() {
  let element = document.createElement('div');

  //lodash 라이브러리 : global변수로 '_'가 등록되어있다.
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log(area(5));
console.log(circumference(5));
console.log(cube2.volume(5));
console.log(cube2.r(5));
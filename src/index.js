//commentJS 스펙 모듈 가져오기
//var _ = requiee('lodash');

//es6
//브라우저언어가 이해할수 없으므로, 컴파일이 필요함. (webpack의 기능
import _ from 'lodash';
//es6 방식이 아닌 webpack에서 지원되는 기능
import './style.css';
import './hello.scss';
// named import {컬리브레이스} 안에 export 한것과 동일한 이름 사용
import {area, circumference} from './js/circle'

//default export 규칙 은 {} 없고 이름을 마음대로 저장
import xxx from './js/cube';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log('hello webpack dev server');
console.log(area(10));
console.log(xxx(5));
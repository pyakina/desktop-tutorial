import ("./main.scss");
import {drawItem} from './item.js';
import items from './items.js';
const div = document.getElementById('gal');
items.map(item => div.appendChild(drawItem(item)));


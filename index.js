var snabbdom = require('./snabbdom.js');
var patch = snabbdom.init([
  require('./modules/class').default,
  require('./modules/hero').default,
  require('./modules/style').default,
  require('./modules/eventlisteners').default,
]);
var h = require('./h.js').default;
var thunk = require('./thunk.js').default;

var container = document.getElementById('container');


function renderNumber(num) {
  return h('span', num);
}

function render(num) {
  return thunk('div', renderNumber, [num]);
}

var vnode = patch(container, render(1))
// 由于num 相同，renderNumber 不会执行
patch(vnode, render(2))

var snabbdom = require('../snabbdom.js');
var patch = snabbdom.init([
  require('../modules/class').default,
  require('../modules/hero').default,
  require('../modules/style').default,
  require('../modules/eventlisteners').default,
]);
var h = require('../h.js').default;

function someFn() {
  console.log(arguments)
}

function anotherEventHandler() {
  console.log(2)
}
var container = document.getElementById('container');

var vnode = h('div#container.two.classes', { on: { click: someFn } }, [
  h('span', { style: { fontWeight: 'bold' } }, 'This is bold'),
  ' and this is just normal text',
  h('a', { props: { href: '/foo' } }, "I'll take you places!")
]);
// Patch into empty DOM element – this modifies the DOM as a side effect
patch(container, vnode);

// var newVnode = h('div#container.two.classes', { on: { click: anotherEventHandler } }, [
//   h('span', { style: { fontWeight: 'normal', fontStyle: 'italic' } }, 'This is now italic type'),
//   ' and this is still just normal text',
//   h('a', { props: { href: '/bar' } }, "I'll take you places!")
// ]);
// // Second `patch` invocation
// patch(vnode, newVnode); // Snabbdom efficiently updates the old view t

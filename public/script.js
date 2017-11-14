import { html, render } from './lit-html.js';

const greeting = (prefix, name) => {
  return html`
    <h1>Well, hello there ${prefix} ${name}</h1>
  `;
};

const el = document.querySelector('#container');

render(greeting('Mr.', 'Siddhartha'), el);
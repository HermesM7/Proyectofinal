// index.test.js

const fs = require('fs');
const path = require('path');
const htmlPath = path.resolve(__dirname, 'Index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Configuración básica de Jest
beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});

// Pruebas
test('La página tiene un encabezado', () => {
  const header = document.querySelector('header');
  expect(header).not.toBeNull();
  expect(header.querySelector('h1').textContent).toBe('MMi Proyecto final de DevOps');
});

test('La página tiene una sección de contenido', () => {
  const section = document.querySelector('section');
  expect(section).not.toBeNull();
  expect(section.querySelector('h2').textContent).toBe('¡Hola, mundo!');
});

test('La página tiene un pie de página', () => {
  const footer = document.querySelector('footer');
  expect(footer).not.toBeNull();
  expect(footer.querySelector('p').textContent).toContain('Proyecto final DevOps');
});

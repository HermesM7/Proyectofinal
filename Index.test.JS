const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Lee el contenido del archivo HTML
const htmlPath = path.resolve(__dirname, 'nombre_de_tu_archivo.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Configuración básica de Jest
beforeEach(() => {
  // Configura el entorno del DOM utilizando jsdom
  const dom = new JSDOM(html, { runScripts: 'dangerously' });
  global.document = dom.window.document;
});

// Pruebas unitarias
test('La página tiene un encabezado con el texto correcto', () => {
  const header = document.querySelector('header');
  const headerText = header.querySelector('h1').textContent;
  expect(headerText).toBe('Mi Página Personal');
});

test('La página tiene una sección de contenido con un título', () => {
  const section = document.querySelector('section');
  const sectionTitle = section.querySelector('h2').textContent;
  expect(sectionTitle).toContain('Bienvenido a mi página');
});

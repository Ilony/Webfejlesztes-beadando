
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Ilony.github.io/Webfejlesztes-beadando/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Webfejlesztes-beadando"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 642, hash: '517fff2d1618821566e6924d043813d8692cf57a39f90a56cc3a731f6cbf5ddd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1155, hash: '0a4cbc40822ebdb2aaac90e9dc2a33039ea22851a16ebb685b16068c6b6fe3eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4395, hash: 'd2459d120e8901998e7068f9e1a66571d3a559de7891adc30865f120aa114f27', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

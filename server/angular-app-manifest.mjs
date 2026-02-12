
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/RizzyMart/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/RizzyMart"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6962, hash: 'f7d5e650108e869feed8b9bd4e9f433dc494836fa229cb895baa4f23fbb74436', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2774, hash: '1f138c5841b7ce7063ee5102869f7cae21cd480a8fc72282fbef05d77e5767c0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15730, hash: '83c9ffe85c62e7f9b0b288e27e0efacfe638e1c265485b799b406f4c2fbd7d91', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QPP7R2EX.css': {size: 231014, hash: 'gH62Nv/LJHc', text: () => import('./assets-chunks/styles-QPP7R2EX_css.mjs').then(m => m.default)}
  },
};

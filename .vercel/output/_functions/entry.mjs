import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Be5YEi-H.mjs';
import { manifest } from './manifest_BaWtwUwB.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_CddsidcR.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_CZipuCHK.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/welcome.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.0.2_@types+node@22.10.1_jiti@1.21.6_rollup@4.28.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/welcome.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c907ca6c-34fb-4ca7-ab1b-284d2bd744c6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

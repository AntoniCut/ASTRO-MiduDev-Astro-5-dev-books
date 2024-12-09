import { c as createComponent, r as renderTemplate, d as addAttribute, f as renderScript, b as createAstro, m as maybeRenderHead, a as renderComponent, g as renderHead, h as renderSlot } from './astro/server_pWfPtKPM.mjs';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/node_modules/.pnpm/astro@5.0.2_@types+node@22.10.1_jiti@1.21.6_rollup@4.28.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/node_modules/.pnpm/astro@5.0.2_@types+node@22.10.1_jiti@1.21.6_rollup@4.28.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro();
const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavBar;
  return renderTemplate`${maybeRenderHead()}<nav class="navbar" data-astro-cid-ymhdp2rl> <ul class="navbar__list" data-astro-cid-ymhdp2rl> <li class="navbar__item" data-astro-cid-ymhdp2rl> <a href="/" data-astro-cid-ymhdp2rl> Home </a> </li> <li class="navbar__item" data-astro-cid-ymhdp2rl> <a href="/welcome" data-astro-cid-ymhdp2rl> Welcome Astro 5 </a> </li> </ul> </nav>`;
}, "C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/src/components/NavBar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title> ${title} </title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", $$NavBar, {})} <div> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

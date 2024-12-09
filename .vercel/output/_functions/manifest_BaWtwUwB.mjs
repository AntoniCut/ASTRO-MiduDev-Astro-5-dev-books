import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BLZgWryJ.mjs';
import { i as decodeKey } from './chunks/astro/server_pWfPtKPM.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/","adapterName":"@astrojs/vercel","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.0.2_@types+node@22.10.1_jiti@1.21.6_rollup@4.28.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DT0wH32H.css"},{"type":"inline","content":"#background{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;filter:blur(100px)}#container{font-family:Inter,Roboto,Helvetica Neue,Arial Nova,Nimbus Sans,Arial,sans-serif;height:100%}main{height:100%;display:flex;justify-content:center}#hero{display:flex;align-items:start;flex-direction:column;justify-content:center;padding:16px;margin-top:100px}h1{font-size:22px;margin-top:.25em}#links{display:flex;gap:16px}#links a{display:flex;align-items:center;padding:10px 12px;color:#111827;text-decoration:none;transition:color .2s}#links a:hover{color:#4e5056}#links a svg{height:1em;margin-left:8px}#links a.button{color:#fff;background:linear-gradient(83.21deg,#3245ff,#bc52ee);box-shadow:inset 0 0 0 1px #ffffff1f,inset 0 -2px #0000003d;border-radius:10px}#links a.button:hover{color:#e6e6e6;box-shadow:none}pre{font-family:ui-monospace,Cascadia Code,Source Code Pro,Menlo,Consolas,DejaVu Sans Mono,monospace;font-weight:400;background:linear-gradient(14deg,#d83333,#f041ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin:0}h2{margin:0 0 1em;font-weight:400;color:#111827;font-size:20px}p{color:#4b5563;font-size:16px;line-height:24px;letter-spacing:-.006em;margin:0}code{display:inline-block;background:linear-gradient(66.77deg,#f3cddd,#f5cee7) padding-box,linear-gradient(155deg,#d83333,#f041ff 18%,#f5cee7 45%) border-box;border-radius:8px;border:1px solid transparent;padding:6px 8px}.box{padding:16px;background:#fff;border-radius:16px;border:1px solid white}#news{position:absolute;bottom:16px;right:16px;max-width:300px;text-decoration:none;transition:background .2s;-webkit-backdrop-filter:blur(50px);backdrop-filter:blur(50px)}#news:hover{background:#ffffff8c}@media screen and (max-height: 368px){#news{display:none}}@media screen and (max-width: 768px){#container{display:flex;flex-direction:column}#hero{display:block;padding-top:10%}#links{flex-wrap:wrap}#links a.button{padding:14px 18px}#news{right:16px;left:16px;bottom:2.5rem;max-width:100%}h1{line-height:1.5}}\n"}],"routeData":{"route":"/welcome","isIndex":false,"type":"page","pattern":"^\\/welcome\\/?$","segments":[[{"content":"welcome","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/welcome.astro","pathname":"/welcome","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/src/pages/libro/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/libro/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/src/pages/welcome.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/libro/[id]@_@astro":"pages/libro/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.0.2_@types+node@22.10.1_jiti@1.21.6_rollup@4.28.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/welcome@_@astro":"pages/welcome.astro.mjs","C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/node_modules/.pnpm/astro@5.0.2_@types+node@22.10.1_jiti@1.21.6_rollup@4.28.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Ck5D0yUb.mjs","C:\\mi-desarrollo-web-y-programacion\\03-Desarrollo-Web\\06-astro\\02-astro-midudev\\astro-5\\dev-books\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\mi-desarrollo-web-y-programacion\\03-Desarrollo-Web\\06-astro\\02-astro-midudev\\astro-5\\dev-books\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BCbDi6De.mjs","C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/src/components/BookScore.astro":"chunks/BookScore_CddsidcR.mjs","C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/src/components/BuyButton.astro":"chunks/BuyButton_CZipuCHK.mjs","\u0000@astrojs-manifest":"manifest_BaWtwUwB.mjs","C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/node_modules/.pnpm/astro@5.0.2_@types+node@22.10.1_jiti@1.21.6_rollup@4.28.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/background.BPKAcmfN.svg","/_astro/astro.Dm8K3lV8.svg","/_astro/index.DT0wH32H.css","/aprendiendo-git.jpg","/favicon.svg","/learning-typescript.jpg","/programador-pragmatico.jpg","/refactoring.jpg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[["C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/src/components/BookScore.astro","BookScore"],["C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/src/components/BuyButton.astro","BuyButton"]],"key":"IxU3jWJm2zQ/lTxfeaC2gHzrZzlnmYF/1ifqATE+QLI=","envGetSecretEnabled":true});

export { manifest };

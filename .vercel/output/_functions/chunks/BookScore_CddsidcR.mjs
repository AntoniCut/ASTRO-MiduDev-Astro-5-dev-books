import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_pWfPtKPM.mjs';
import { s as setOnSetGetEnv } from './runtime_D4VX3l65.mjs';

// @ts-check

// used while generating the virtual module
// biome-ignore lint/correctness/noUnusedFunctionParameters: `reset` is used by the generated code
// biome-ignore lint/correctness/noUnusedVariables: `reset` is used by the generated code
setOnSetGetEnv((reset) => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(SCORE_API_ENDPOINT);
  const scoreValue = await res.text();
  return renderTemplate`${maybeRenderHead()}<span class="text-xs" id="score">
⭐ Puntuación: ${scoreValue.trim()}/5
</span>`;
}, "C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/src/components/BookScore.astro", void 0);

const $$file = "C:/mi-desarrollo-web-y-programacion/03-Desarrollo-Web/06-astro/02-astro-midudev/astro-5/dev-books/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };

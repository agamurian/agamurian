import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/8.Bf4htGvj.js","_app/immutable/chunks/DWzqSfxI.js","_app/immutable/chunks/LvNdeKyf.js","_app/immutable/chunks/BtzwvMBs.js","_app/immutable/chunks/Cy2ZQmBQ.js","_app/immutable/chunks/C5vp_C0f.js","_app/immutable/chunks/BbaS0uwr.js","_app/immutable/chunks/BSTOWzBo.js","_app/immutable/chunks/BjHfPZ7_.js","_app/immutable/chunks/DgQZ3w3Q.js","_app/immutable/chunks/Cv-OK6qP.js","_app/immutable/chunks/C1XTtcoT.js","_app/immutable/chunks/CbWk8usL.js","_app/immutable/chunks/CTrRe5wz.js"];
export const stylesheets = ["_app/immutable/assets/8.9ghhGv4B.css"];
export const fonts = [];

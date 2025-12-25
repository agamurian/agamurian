import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.VOC0vfyR.js","_app/immutable/chunks/C5vp_C0f.js","_app/immutable/chunks/LvNdeKyf.js","_app/immutable/chunks/BbaS0uwr.js","_app/immutable/chunks/BjHfPZ7_.js","_app/immutable/chunks/C1XTtcoT.js","_app/immutable/chunks/CC0uOOOu.js","_app/immutable/chunks/CbWk8usL.js","_app/immutable/chunks/DgQZ3w3Q.js"];
export const stylesheets = ["_app/immutable/assets/0.DOoRdZMi.css"];
export const fonts = [];

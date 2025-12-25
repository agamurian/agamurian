

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gallery/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.DmZ9cPKU.js","_app/immutable/chunks/C5vp_C0f.js","_app/immutable/chunks/LvNdeKyf.js","_app/immutable/chunks/BbaS0uwr.js"];
export const stylesheets = [];
export const fonts = [];

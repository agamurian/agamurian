

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C-YAiDyL.js","_app/immutable/chunks/C5vp_C0f.js","_app/immutable/chunks/LvNdeKyf.js","_app/immutable/chunks/BtzwvMBs.js"];
export const stylesheets = [];
export const fonts = [];

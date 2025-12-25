export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".~lock.cv.odt#","back0.webp","back1.webp","back2.webp","back3.webp","back4.webp","back5.webp","back6.webp","bck.jpeg","cv.odt","cv_andrey_golovin.pdf","fonts/cmunbx.ttf","fonts/cmunobi.ttf","fonts/cmunobx.ttf","fonts/cmunorm.ttf","fonts/cmunoti.ttf","fonts/cmunrm.ttf","fonts/cmuntb.ttf","fonts/cmunti.ttf","fonts/cmuntt.ttf","fonts/cmunui.ttf","fonts/cmunvt.ttf","me.jpg","og-image.png","robots.txt"]),
	mimeTypes: {".webp":"image/webp",".jpeg":"image/jpeg",".pdf":"application/pdf",".ttf":"font/ttf",".jpg":"image/jpeg",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CX8IIVdc.js",app:"_app/immutable/entry/app.CE7xcZnO.js",imports:["_app/immutable/entry/start.CX8IIVdc.js","_app/immutable/chunks/Dkjl7EFX.js","_app/immutable/chunks/LvNdeKyf.js","_app/immutable/chunks/BSTOWzBo.js","_app/immutable/chunks/BjHfPZ7_.js","_app/immutable/entry/app.CE7xcZnO.js","_app/immutable/chunks/DWzqSfxI.js","_app/immutable/chunks/LvNdeKyf.js","_app/immutable/chunks/BtzwvMBs.js","_app/immutable/chunks/DgQZ3w3Q.js","_app/immutable/chunks/C5vp_C0f.js","_app/immutable/chunks/BjHfPZ7_.js","_app/immutable/chunks/Cv-OK6qP.js","_app/immutable/chunks/CC0uOOOu.js","_app/immutable/chunks/CTrRe5wz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/404","/about","/blog","/blog/async","/contacts","/gallery","/projects","/blog/2025-04-new-beginnings","/blog/2025-03-functional-programming","/blog/2025-02-shaders-explained","/blog/2025-01-image-processing"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

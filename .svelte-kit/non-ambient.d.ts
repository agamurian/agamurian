
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/404" | "/about" | "/blog" | "/blog/async" | "/blog/[slug]" | "/contacts" | "/gallery" | "/projects";
		RouteParams(): {
			"/blog/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/404": Record<string, never>;
			"/about": Record<string, never>;
			"/blog": { slug?: string };
			"/blog/async": Record<string, never>;
			"/blog/[slug]": { slug: string };
			"/contacts": Record<string, never>;
			"/gallery": Record<string, never>;
			"/projects": Record<string, never>
		};
		Pathname(): "/" | "/404" | "/404/" | "/about" | "/about/" | "/blog" | "/blog/" | "/blog/async" | "/blog/async/" | `/blog/${string}` & {} | `/blog/${string}/` & {} | "/contacts" | "/contacts/" | "/gallery" | "/gallery/" | "/projects" | "/projects/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.~lock.cv.odt#" | "/back0.webp" | "/back1.webp" | "/back2.webp" | "/back3.webp" | "/back4.webp" | "/back5.webp" | "/back6.webp" | "/bck.jpeg" | "/cv.odt" | "/cv_andrey_golovin.pdf" | "/fonts/cmunbx.ttf" | "/fonts/cmunobi.ttf" | "/fonts/cmunobx.ttf" | "/fonts/cmunorm.ttf" | "/fonts/cmunoti.ttf" | "/fonts/cmunrm.ttf" | "/fonts/cmuntb.ttf" | "/fonts/cmunti.ttf" | "/fonts/cmuntt.ttf" | "/fonts/cmunui.ttf" | "/fonts/cmunvt.ttf" | "/me.jpg" | "/og-image.png" | "/robots.txt" | string & {};
	}
}
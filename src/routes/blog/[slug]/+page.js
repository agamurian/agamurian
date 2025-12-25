import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		// Dynamically import the markdown file
		const post = await import(`../../../posts/${params.slug}.md`);

		if (!post) {
			throw error(404, 'Post not found');
		}

		// Import all posts to find related posts
		const allPosts = import.meta.glob('../../../posts/*.md', { eager: true });
		const posts = Object.entries(allPosts)
			.map(([path, module]) => {
				const slug = path.split('/').at(-1)?.replace('.md', '');
				return { ...module.metadata, slug };
			})
			.filter(p => p.published !== false)
			.sort((a, b) => new Date(b.date) - new Date(a.date));

		const currentIndex = posts.findIndex(p => p.slug === params.slug);
		const previousPost = posts[currentIndex + 1] || null;
		const nextPost = posts[currentIndex - 1] || null;

		return {
			meta: post.metadata,
			content: post.default,
			previousPost,
			nextPost
		};
	} catch (err) {
		throw error(404, 'Could not load blog post');
	}
}

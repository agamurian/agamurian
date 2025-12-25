export async function load() {
	// Import all markdown files from the 'posts' directory
	const modules = import.meta.glob('/src/posts/*.md', { eager: true });

	const posts = Object.entries(modules)
		.map(([path, module]) => {
			// Extract slug from file path
			const slug = path.split('/').at(-1)?.replace('.md', '');
			// Combine the frontmatter metadata with the slug
			return { ...module.metadata, slug };
		})
		.filter(post => post.published !== false)
		.sort((a, b) => new Date(b.date) - new Date(a.date));

	return { posts };
}

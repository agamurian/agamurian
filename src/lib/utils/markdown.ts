export function extractExcerpt(content: string, length: number = 160): string {
	// Remove markdown syntax and get first N characters
	const text = content
		.replace(/^---[\s\S]*?---/, '') // Remove frontmatter
		.replace(/^#+ /, '') // Remove headers
		.replace(/[*_`\[\]()]/g, '') // Remove markdown formatting
		.replace(/\n+/g, ' ')
		.trim();

	return text.substring(0, length) + (text.length > length ? '...' : '');
}

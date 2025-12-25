export function formatDate(dateString: string): string {
	return new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export function calculateReadingTime(content: string): number {
	// Assuming ~200 words per minute
	const wordCount = content.split(/\s+/).length;
	return Math.ceil(wordCount / 200);
}

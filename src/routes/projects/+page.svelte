<script>
	import { formatDate } from '$lib/utils/date';
	export let data;
	const { posts } = data;

	let selectedCategory = 'all';
	let selectedTag = 'all';

	$: filteredPosts = posts.filter((post) => {
		const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
		const tagMatch = selectedTag === 'all' || post.tags.includes(selectedTag);
		return categoryMatch && tagMatch;
	});

	$: allTags = [...new Set(posts.flatMap((p) => p.tags))];
	$: allCategories = [...new Set(posts.map((p) => p.category))];
</script>

<svelte:head>
	<title>Projects - Andrey Golovin</title>
	<meta name="description" content="Articles about graphics, programming, and creative coding" />
</svelte:head>

<section>
	<h1 class="header">Projets</h1>
	<p class="subtitle">Thoughts on graphics, programming, and creative technology</p>

	<div class="filters">
		<div class="filter-group">
			<label>Category:</label>
			<select bind:value={selectedCategory}>
				<option value="all">All</option>
				{#each allCategories as category}
					<option value={category}>{category}</option>
				{/each}
			</select>
		</div>

		<div class="filter-group">
			<label>Tag:</label>
			<select bind:value={selectedTag}>
				<option value="all">All</option>
				{#each allTags as tag}
					<option value={tag}>{tag}</option>
				{/each}
			</select>
		</div>
	</div>

	<!--
	<div class="featured-posts">
		{#each filteredPosts.filter(p => p.featured) as post}
			<a href="/projects/{post.slug}" class="featured-card">
				<div class="featured-badge">Featured</div>
				<h2 class="header">{post.title}</h2>
				<p class="excerpt">{post.excerpt}</p>
				<div class="post-meta">
					<span class="date">{new Date(post.date).toLocaleDateString()}</span>
					<span class="reading-time">• {post.readingTime} min read</span>
				</div>
			</a>
		{/each}
	</div>
	-->

	<div class="posts-list">
		{#each filteredPosts as post}
			<article class="post-item">
				<a href="/projects/{post.slug}" class="post-link">
					<h3 class="post-title">{post.title}</h3>
				</a>
				<p class="post-excerpt">{post.excerpt}</p>
				<div class="post-footer">
					<span class="category">{post.category}</span>
					<span class="reading-time">{post.readingTime} min read</span>
					<time class="date"
						>{new Date(post.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'short',
							day: 'numeric'
						})}</time
					>
				</div>
			</article>
		{/each}
	</div>

	{#if filteredPosts.length === 0}
		<div class="no-posts">
			<p>No posts found with these filters.</p>
		</div>
	{/if}
</section>

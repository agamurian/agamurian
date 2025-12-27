<script>
	import { formatDate } from '$lib/utils/date';
	export let data;
	const { posts } = data;

	let selectedCategory = 'all';
	let selectedTag = 'all';

	$: filteredPosts = posts.filter(post => {
		const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
		const tagMatch = selectedTag === 'all' || post.tags.includes(selectedTag);
		return categoryMatch && tagMatch;
	});

	$: allTags = [...new Set(posts.flatMap(p => p.tags))];
	$: allCategories = [...new Set(posts.map(p => p.category))];
</script>

<svelte:head>
	<title>Projects - Andrey Golovin</title>
	<meta name="description" content="Articles about graphics, programming, and creative coding" />
</svelte:head>

<section class="section">
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
					<time class="date">{new Date(post.date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'short',
						day: 'numeric'
					})}</time>
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

<style>
	.subtitle {
		opacity: 1;
		font-size: 1.1rem;
		margin-bottom: 20px;
		font-family: 'CMU-ui';
	}

	.filters {
		display: flex;
		gap: 20px;
		margin-bottom: 40px;
		flex-wrap: wrap;
		font-family: 'CMU-ui';
	}

	.filter-group {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.filter-group label {
		font-weight: 600;
	}

	.filter-group select {
		padding: 5px 15px;
		border: 1px dashed rgba(125, 125, 125, 0.1);
		border-radius: 15px;
		background-color: rgba(128, 128, 128, 0.1);
		color: var(--color-text);
		font-family: inherit;
		cursor: pointer;
	}

	.featured-posts {
		display: grid;
		gap: 20px;
		margin-bottom: 50px;
	}

	.featured-card {
		position: relative;
		display: block;
		padding: 30px;
		border-color: #888888;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
	}

	.featured-card:hover {
		border-color: #888888;
		transform: translateX(-4px);
	}

	.featured-badge {
		position: absolute;
		top: 15px;
		right: 15px;
		padding: 6px 12px;
		background-color: #0004;
		color: white;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
	}

	.featured-card .header {
		margin: 0 0 10px 0;
		font-size: 1.8rem;
	}

	.excerpt {
		margin: 12px 0;
		opacity: 0.85;
		line-height: 1.6;
	}

	.post-meta {
		display: flex;
		gap: 15px;
		font-size: 0.9rem;
		opacity: 0.6;
		margin-top: 15px;
	}

	.posts-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.post-item {
		padding: 20px 0px;
		border-bottom: 2px dashed #8888;
		transition: all 0.3s ease;
	}

	.post-item:hover {
		color: var(--color-primary);
	}

	.post-link {
		text-decoration: none;
		color: inherit;
	}

	.post-title {
		margin: 0 0 10px 0;
		font-size: 2rem;
		font-family: 'CMU-nrm';
		text-decoration: underline 1px dashed #8888;
	}

	.post-item:hover .post-title {
		text-decoration: underline 1px dashed #888f;
		color: var(--color-primary);
	}

	.post-excerpt {
		margin: 10px 0;
		opacity: 0.8;
		line-height: 1.6;
		font-family: 'CMU-ui';
		font-family: 'CMU-nrm';
		font-family: 'Inconsolata';
	}

	.post-footer {
		display: flex;
		gap: 15px;
		align-items: center;
		font-size: 0.85rem;
		opacity: 0.6;
		margin-top: 12px;
		flex-wrap: wrap;
	}

	.category {
		display: inline-block;
		padding: 4px 10px;
		border-radius: 3px;
		text-transform: capitalize;
		font-weight: 600;
	}

	.no-posts {
		text-align: center;
		padding: 40px;
		opacity: 0.6;
	}

	@media (max-width: 600px) {
		.filters {
			flex-direction: column;
			gap: 15px;
		}

		.featured-card .header {
			font-size: 1.4rem;
			padding-right: 80px;
		}

		.featured-badge {
			top: 10px;
			right: 10px;
		}

	}
</style>

<script lang="ts">
	import { page } from '$app/stores';

	export let data;
	let y = 0;
	let headerBig = true;
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
	<title>{data.meta.title} - Notes</title>
	<meta name="description" content={data.meta.excerpt} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.excerpt} />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<article class="blog-post">
	<div class="blog-header" style={y - 120 > 0 ? 'opacity:0' : 'opacity:1'}>
		<div class="blog-meta">
			<span class="author">By {data.meta.author}</span>
			<span class="separator">•</span>
			<time class="date"
				>{new Date(data.meta.date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}</time
			>
			<span class="separator">•</span>
			<span class="reading-time">{data.meta.readingTime} min read</span>
		</div>
		<div class="tags" style={y - 60 > 0 ? 'opacity:0' : 'opacity:1'}>
			{#each data.meta.tags as tag}
				<span class="tag">#{tag}</span>
			{/each}
		</div>
	</div>

	<div class="blog-content">
		<svelte:component this={data.content} />
	</div>

	<div class="blog-footer">
		<hr />
		<h4>About the Author</h4>
		<p>
			<strong>{data.meta.author}</strong> is a software developer and digital artist
		</p>

		<div class="post-navigation">
			{#if data.previousPost}
				<a href="/secret/{data.previousPost.slug}" class="nav-link prev">
					← {data.previousPost.title}
				</a>
			{/if}
			{#if data.nextPost}
				<a href="/secret/{data.nextPost.slug}" class="nav-link next">
					{data.nextPost.title} →
				</a>
			{/if}
		</div>
	</div>
</article>

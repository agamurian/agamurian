<script lang="ts">
	import { page } from '$app/stores';

	export let data;
	let y = 0;
	let headerBig = true
	
	
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
	<title>{data.meta.title} - Blog</title>
	<meta name="description" content={data.meta.excerpt} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:image" content={data.meta.image || '/og-image.jpg'} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<article class="section blog-post">
	<div class="blog-header" style={ y-120>0 ? 'opacity:0' : 'opacity:1'}>
		
		<div class="blog-meta">
			<span class="author">By {data.meta.author}</span>
			<span class="separator">•</span>
			<time class="date">{new Date(data.meta.date).toLocaleDateString('en-US', { 
				year: 'numeric', 
				month: 'long', 
				day: 'numeric' 
			})}</time>
			<span class="separator">•</span>
			<span class="reading-time">{data.meta.readingTime} min read</span>
		</div>
		<div class="tags" style={ y-60>0 ? 'opacity:0' : 'opacity:1'  }>
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
				<a href="/blog/{data.previousPost.slug}" class="nav-link prev">
					← {data.previousPost.title}
				</a>
			{/if}
			{#if data.nextPost}
				<a href="/blog/{data.nextPost.slug}" class="nav-link next">
					{data.nextPost.title} →
				</a>
			{/if}
		</div>
	</div>
</article>

<style>

	.blog-header {
	transition: 0.8s ease-out;
		display: flex;
		flex-direction: column;
		margin: -2px -4px 0px -4px;
		padding: 4px 15px 15px 15px;
		border-radius: 4px;
		background-color: var(--color-bg);
		align-content: end;
		backdrop-filter: blur(10px);
		position: sticky;
		margin-top:-20px;
		top: 33px;
		z-index: 1;
	}

	.header {
		margin: 0 0 15px 0;
		line-height: 1.2;
	}

	.blog-meta {
		display: flex;
		align-items: center;
		gap: 18px;
		font-size: 0.9rem;
		opacity: 0.8;
		margin-bottom: 18px;
		margin-top: 8px;
		flex-wrap: wrap;
	}

	.separator {
		color: var(--color-primary);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
		margin-top: 4px;
		position: relative;
	}

	.tag {
		display: inline-block;
		padding: 4px 10px;
		background-color: rgba(120, 130, 146, 0.1);
		color: var(--color-primary);
		border-radius: 12px;
		font-size: 0.85rem;
		font-weight: 600;
		font-family: "Inconsolata";
	}

	.blog-content {
		line-height: 1.8;
		margin-bottom: 60px;
	}

	:global(.blog-content h1) {
		font-size: 2.2rem;
		margin: 40px 0 20px 0;
		line-height: 1.3;
		margin-bottom: 4rem;
	}

	:global(.blog-content h2) {
		font-size: 1.9rem;
		margin: 35px 0 15px 0;
		line-height: 1.3;
		border-bottom: 2px solid rgba(255, 255, 255, 0.1);
		padding-bottom: 10px;
	}

	:global(.blog-content h3) {
		font-size: 1.5rem;
		margin: 25px 0 12px 0;
	}

	:global(.blog-content p) {
		margin-bottom: 18px;
		text-align: justify;
	}

	:global(.blog-content code) {
		padding: 2px 6px;
		font-family: 'Courier New', monospace;
		font-size: 0.95rem;
	}

	:global(.blog-content pre) {
		padding: 20px;
		overflow-x: auto;
		margin: 20px 0;
	}

	:global(.blog-content pre code) {
		background: none;
		padding: 0;
		color: #e0e0e0;
	}

	:global(.blog-content blockquote) {
		border-left: 4px solid var(--color-primary);
		padding-left: 15px;
		margin: 20px 0;
		opacity: 0.8;
		font-style: italic;
	}

	:global(.blog-content ul),
	:global(.blog-content ol) {
		margin-left: 30px;
		margin-bottom: 18px;
	}

	:global(.blog-content li) {
		margin-bottom: 8px;
	}

	:global(.blog-content table) {
		width: 100%;
		border-collapse: collapse;
		margin: 20px 0;
	}

	:global(.blog-content th),
	:global(.blog-content td) {
		border: 1px solid rgba(255, 255, 255, 0.1);
		padding: 10px;
		text-align: left;
	}

	:global(.blog-content th) {
		background-color: rgba(59, 130, 246, 0.1);
		font-weight: 600;
	}

	.blog-footer {
		margin-top: 20px;
		padding-top: 30px;
		border-top: 2px dashed rgba(255, 255, 255, 0.2);
	}

	.author-bio {
		background-color: rgba(59, 130, 246, 0.05);
		padding: 20px;
		margin-bottom: 30px;
	}

	.author-bio h4 {
		margin: 0 0 10px 0;
	}

	.author-bio p {
		margin: 0;
		opacity: 0.9;
	}

	.post-navigation {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		margin-top: 40px;
	}

	.nav-link {
		display: block;
		padding: 15px;
		background-color: rgba(79, 30, 46, 0.1);
		border: 1px solid rgba(79, 30, 46, 0.3);
		text-decoration: none;
		font-weight: 600;
		transition: all 0.4s ease;
	}

	.nav-link:hover {
		background-color: rgba(79, 30, 46, 0.2);
		border-color: var(--color-primary);
		transform: translateY(-2px);
	}

	.nav-link.prev {
		text-align: left;
	}

	.nav-link.next {
		text-align: right;
	}

	:global(h1) {
		font-size-adjust: ic-height;
	}

	@media (max-width: 600px) {
		.post-navigation {
			grid-template-columns: 1fr;
		}

		:global(.blog-content h1) {
			font-size: 1.8rem;
		}

		:global(.blog-content h2) {
			font-size: 1.5rem;
		}

		.blog-meta {
			font-size: 0.85rem;
		}
	}
</style>

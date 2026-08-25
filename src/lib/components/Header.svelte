<script>
	let lastScrollTop = 0;
	let hideNav = $state(false);
	let marginTop = $state(0);
	import { menu } from '$lib/content/common';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	// let urs = $state([{text:"/",url:"/"}])
	let curr = $derived($page.url.toString().split('/').slice(3));

	let urs = $derived.by(() => {
		let prev = '';
		let els = [];
		for (const url of curr) {
			prev += '/' + url;
			els.push({ text: url, url: prev });
		}
		return els;
	});

	function toggleTheme() {
		document.documentElement.classList.toggle('dark-theme');
		localStorage.setItem(
			'theme',
			document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light'
		);
	}

	onMount(() => {
		const saved = localStorage.getItem('theme');
		if (saved === 'dark') {
			document.documentElement.classList.add('dark-theme');
		}
	});
</script>

<svelte:window
	on:scroll={() => {
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		if (scrollTop > lastScrollTop) {
			hideNav = true;
		} else hideNav = false;
		lastScrollTop = scrollTop;
		if (hideNav) {
			marginTop = -120;
		} else {
			marginTop = -10;
		}
	}}
/>

<div class="uptop" style="margin-top: calc({marginTop}px - 30px)" />
<div class="nav top" style="margin-top: {marginTop}px; transition: 0.3s ease">
	<div class="left">
		<ul>
			{#each menu as item}
				<a class="menuitem" class:active-route={item.href == $page.route.id} href={item.href}>
					<nobr>{item['en']}</nobr>
				</a>
			{/each}
		</ul>
	</div>

	<div class="center">
		<!--
    <div class="cards">
      <hr/>
      <div class="blockcard">
      <h1>Search</h1>
      <hr/>
        <h4>
          Sidenote:
        </h4>
        <p>
          Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words are the truncation of dolorem ipsum. Lorem ipsum's purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting
        </p>
      <hr/>
        <h4>
          Sidenote:
        </h4>
        <p>
          Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words are the truncation of dolorem ipsum. Lorem ipsum's purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting
        </p>
        </div>
    </div>
    -->
	</div>
	<div class="right">
		<ul>
			<nobr>
				<a href="javascript:if(window.print)window.print()"> 🖨 PDF </a>
				&nbsp
				<a
					href="#"
					onclick={(e) => {
						e.preventDefault();
						toggleTheme();
					}}
				>
					🌗
				</a>
			</nobr>
		</ul>
	</div>
	<div class="overdrop">
		<a href="/">~</a>
		{#each urs as ur}
			/
			<a href={ur.url}>{ur.text}</a>
		{/each}
		<!--
    <div class="cards">
      <div class="blockcard">
        <h4>
          Sidenote:
        </h4>
        <p>
          Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words are the truncation of dolorem ipsum. Lorem ipsum's purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting
        </p>
        </div>
    </div>
      -->
	</div>
</div>
<div class="downtop" />

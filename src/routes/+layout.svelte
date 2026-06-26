<script lang="javascript">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import favicon from '$lib/assets/favicon.svg';

</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Header />
<div class="container">
  <slot />
</div>


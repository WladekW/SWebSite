<script>
	import favicon from '$lib/assets/favicon.svg';
  import MainLayout from '$lib/layouts/MainLayout.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
  <link rel="stylesheet" href="src/app.css">
  <link rel="stylesheet" href="src/reset.css">
</svelte:head>

<MainLayout>
  {@render children?.()}
</MainLayout>
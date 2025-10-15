<script>
	import favicon from '$lib/assets/favicon.svg';
  import Header from '$lib/components/Header.svelte';

  var {children} = $props();
</script>


<Header/>

<main>
  {@render children?.()}
</main>

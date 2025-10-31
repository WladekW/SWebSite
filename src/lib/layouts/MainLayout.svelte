<script>
  import favicon from "$lib/assets/favicon.svg";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  var { children } = $props();
</script>

<Header />

<main>
  {@render children?.()}
</main>

<Footer />

<script>
  import favicon from "$lib/assets/favicon.svg";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  var { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="stylesheet" href="../../src/reset.css" />
  <link rel="stylesheet" href="../../src/app.css" />
</svelte:head>


<Header />

<main>
  {@render children?.()}
</main>

<Footer />

<script>
  import favicon from "$lib/assets/favicon.svg";
  import Header from "$lib/components/templates/Header.svelte";
  import Footer from "$lib/components/templates/Footer.svelte";

  var { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="stylesheet" href="/reset.css" />
  <link rel="stylesheet" href="/app.css" />
</svelte:head>


<Header />

<main>
  {@render children?.()}
</main>

<Footer />

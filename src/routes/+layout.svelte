<script>
  import favicon from "$lib/assets/favicon.svg";
  import MainLayout from "$lib/layouts/MainLayout.svelte";

  let { children } = $props();
</script>

<MainLayout>
  {@render children?.()}
</MainLayout>

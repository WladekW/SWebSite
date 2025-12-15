<script>
    import favicon from "$lib/assets/favicon.svg";
    import MainLayout from "$lib/layouts/MainLayout.svelte";
    // import "$static/app.css";

    let { children } = $props();
</script>

<MainLayout>
    {@render children?.()}
</MainLayout>

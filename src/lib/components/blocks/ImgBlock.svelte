<script>
    var { src, className, loading = "lazy" } = $props();
</script>

<enhanced:img
    {src}
    alt="normal_image"
    class="opt_block--img {className}"
    {loading}
    sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
/>

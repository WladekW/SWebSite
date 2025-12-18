<script>
    var { src, children, className, loading = "lazy" } = $props();
</script>

<div class={`wrapper ${className}`}>
    <enhanced:img
        {src}
        alt="background_image"
        class="bg_block--img"
        {loading}
        sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
    />
    <div class="content">
        {@render children?.()}
    </div>
</div>

<style>
    .wrapper {
        position: relative;
        border-radius: var(--std-radius);
        overflow: hidden;

        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }

    .bg_block--img {
        position: absolute;
        inset: 0;

        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;

        z-index: 0;
    }

    .content {
        position: relative;
        z-index: 1;
    }
</style>

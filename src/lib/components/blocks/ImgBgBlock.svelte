<script>
    var { src, children, className } = $props();
</script>

<div class={`wrapper ${className}`}>
    <enhanced:img
        {src}
        alt=""
        class="bg_block--img"
        fetchpriority="high"
        loading="lazy"
        sizes="(min-width: 1920px) 1920px,
                 (min-width: 1536px) 1536px,
                 (min-width: 1280px) 1280px,
                 (min-width: 1024px) 1024px,
                 (min-width: 768px) 768px,
                 (min-width: 640px) 640px,
                 (min-width: 480px) 480px,
                 100vw"
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

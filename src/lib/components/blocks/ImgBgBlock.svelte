<script>
    var { src, children, className } = $props();
</script>

<div class={`wrapper ${className}`}>
    <enhanced:img {src} alt="" class="bg_block--img" />
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

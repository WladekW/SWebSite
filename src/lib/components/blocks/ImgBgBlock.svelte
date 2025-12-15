<script>
    var { src, children, className } = $props();
</script>

<div style="background-image: url('{src}');" class={className}>
    {@render children?.()}
</div>

<style>
    div {
        background-image: url("/Img/koyasan.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: var(--std-radius);
        display: flex;
        align-items: end;
        justify-content: end;
    }
</style>

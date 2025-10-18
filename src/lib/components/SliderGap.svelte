<script>
  var { children, className} = $props();
</script>

<div class="slider {className}">
  {@render children?.()}
</div>

<style>
  .slider {
    align-items: center;
    padding: 40px 0;
    margin: var(--std-space) 0;
    display: flex;
    justify-content: space-around;
    overflow-x: auto;
  }
</style>
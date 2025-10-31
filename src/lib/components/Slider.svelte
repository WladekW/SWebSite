<script>
  import { onMount } from "svelte";

  var { children, className } = $props();
</script>

<div class="slider {className}">
  {@render children?.()}
</div>

<style>
  .slider {
    align-items: center;
    gap: var(--std-space);
    margin: var(--std-space) 0;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    align-items: normal;
  }
</style>

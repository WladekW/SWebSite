<script>
  import { tick } from 'svelte';

  let { children, className} = $props();
  let container;
  let numChildren = $state(0);

  $effect(async () => {
    await tick();
    if (container) {
      numChildren = container.children.length;
    }
  });
</script>

<div 
  bind:this={container} 
  class="slider {className}"
  style="grid-template-columns: repeat({numChildren}, 1fr);"
>
  {@render children?.()}
</div>

<style>
  .slider {
    display: grid;
    align-items: center;
    gap: 200px;
    padding: 40px var(--std-space);
    margin: var(--std-space) 0;
    overflow-x: auto;
  }

  .slider::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  .slider::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: #111;
  }

  .slider::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: var(--gray-color);
  }

  .slider::-webkit-scrollbar-thumb:hover {
    background-color: #333;
  }
  
</style>
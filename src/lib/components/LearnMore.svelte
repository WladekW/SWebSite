<script>
	import favicon from '$lib/assets/icons/arrow24dp.svg';
  import ArrowImg from '$lib/components/ui/ArrowLink.svelte';
  
  var {arrowDir = "45deg", href = "/"} = $props();
</script>

<a href={href} class="learn_more">
  <ArrowImg
    className = "arrow_img"
    href = {href}
    arrowDir = {arrowDir}
  />
  <span>
    LEARN MORE
  </span>
</a>

<style>
  .learn_more{
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: var(--std-space);
  }

  .learn_more:hover  :global(.arrow_img){
    background-color: transparent;
  } 
</style>
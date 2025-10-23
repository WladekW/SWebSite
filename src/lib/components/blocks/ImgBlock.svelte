<script>
	import favicon from '$lib/assets/icons/arrow24dp.svg';
  import ArrowImg from '$lib/components/ui/ArrowLink.svelte';
  
  var {src, children, className} = $props();
</script>

<div style="background-image: url('{src}');" class="{className}">
  {@render children?.()}
</div>

<style>
  div{
    background-image: url('/Img/koyasan.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: var(--std-radius);
    display: flex;
    align-items: end;
    justify-content: end;
    padding: var(--big-padding);
  }
</style>
<script>
  import ArrowLink from '$lib/components/ui/ArrowLink.svelte';

  var {title, text} = $props();
</script>

<div class="more_block">
  <div>
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
  <ArrowLink
    arrowDir="90deg"
  />
</div>

<style>
  .more_block{
    height: fit-content;
    background-color: var(--gray-color);
    border-radius: var(--std-radius);
    padding: var(--std-padding);
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    transition: .3s;
  }

  .more_block > div{
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }


  .more_block:hover{
    background-color: var(--gray-lighter-color);
  }
</style>
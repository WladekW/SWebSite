<script>
  import LearnMore from '$lib/components/LearnMore.svelte';

  var {category = "", title, text, className} = $props();
</script>

<div class="more_block {className}">
  {#if category != ""}
    <span>{category}</span>
  {/if}
  <div>
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
  <LearnMore/>
</div>

<style>
  .more_block{
    width: auto;
    min-width: 246px;
    padding: var(--std-padding);
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-between;
    background-color: var(--gray-color);
    border-radius: var(--std-radius);
    transition: .3s;
  }

  .more_block > div{
    display: flex;
    flex-direction: column;
    gap: var(--std-space);
  }

  .more_block:hover{
    background-color: var(--gray-lighter-color);
  }
</style>
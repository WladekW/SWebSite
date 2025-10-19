<script>
  import LearnMore from '$lib/components/LearnMore.svelte';

  var {title, text} = $props();
</script>

<div class="more_block">
  <h4>{title}</h4>
  <p>{text}</p>
  <LearnMore/>
</div>

<style>
  .more_block{
    width: fit-content;
    min-width: 246px;
    padding: var(--std-padding);
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: var(--gray-color);
    border-radius: var(--std-radius);
    transition: .3s;
  }

  .more_block:hover{
    background-color: var(--gray-lighter-color);
  }
</style>
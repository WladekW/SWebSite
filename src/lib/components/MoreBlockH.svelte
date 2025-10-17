<script>
  import LearnMore from '$lib/components/ui/LearnMore.svelte';

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
    padding: 54px 34px 34px 54px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: var(--gray-color);
    border-radius: var(--std-radius);
  }

  .more_block > p{
    color: #999;
    line-height: 1.4;
  }
</style>
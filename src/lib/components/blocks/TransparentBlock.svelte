<script>
  var {title, text} = $props();
</script>

<div class="transparent_block">
  <h4>{title}</h4>
  <p>{text}</p>
</div>

<style>
  .transparent_block{
    width: fit-content;
    min-width: 246px;
    padding: var(--std-padding);
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: transparent;
    border-radius: var(--std-radius);
    transition: .3s;
  }

  .transparent_block p{
    color: var(--text-color);
  }
</style>
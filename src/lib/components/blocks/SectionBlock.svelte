<script>
  var {className ,theme = "theme", title = "Title", text} = $props();
</script>

<div class="section_block {className}">
  <span>{theme}</span>
  <div>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
</div>


<style>
  .section_block {
    background-color: var(--gray-color);
    padding: var(--big-padding);
    border-radius: var(--std-radius);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .section_block span{
    color: var(--p-color);
    text-transform: uppercase;
  }

  .section_block h2{
    margin: 40px 0;
  }

  .section_block p{
    column-count: 2;
    column-gap: 80px;
  }
</style>
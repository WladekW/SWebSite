<script>
  var {className ,category = "category", title = "Title", text} = $props();
</script>


<div class="title_block {className}">
  <div class="title_part">
    <span>{category}</span>
    <h2>{title}</h2>
  </div>
  <p>{text}</p>
</div>


<style>
  .title_block{
    padding: var(--big-padding);
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 16px;
    align-items: end;
  }

  .title_part{
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .title_block > p{
    grid-column: 3;
  }

  
  @media (max-width: 1040px){
    .title_block{
      grid-template-columns: 1fr;
    }
    .title_block > p{
      grid-column: 1;
    }
  }

</style>
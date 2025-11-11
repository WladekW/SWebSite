<script>
  import LearnMore from "$lib/components/LearnMore.svelte";
  var { className, category = "category", title = "Title", text , href = "/404"} = $props();
</script>

<div class="title_block {className}">
  <div class="title_part">
    <span>{category}</span>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
  <div class="content_part">
    {#if href != "/404"}
      <LearnMore href = href/>
    {/if}
  </div>
</div>

<style>
  .title_block {
    display: grid;
    grid-template-columns: auto auto;
    margin: var(--std-space);
    padding: var(--big-padding);
    align-items: end;
  }

  .title_part {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    max-width: 960px;
  }

  .content_part {
    margin-left: auto;
  }

  @media (max-width: 1040px) {
    .title_block {
      grid-template-columns: 1fr;
      padding: 16px;
    }
    .content_part {
      grid-column: 1;
    }
  }

  @media (max-width: 600px) {
    .title_block {
      grid-template-columns: 1fr;
    }
  }
</style>

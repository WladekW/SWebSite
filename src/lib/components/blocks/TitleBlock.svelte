<script>
  import LearnMore from "$lib/components/LearnMore.svelte";
  var { className, category = "category", title = "Title", text , href = "/404"} = $props();
</script>

<div class="title_block {className}">
  <div class="title_part">
    <span>{category}</span>
    <h2>{title}</h2>
  </div>
  <div class="content_part">
    <p>{text}</p>
    {#if href != "/404"}
      <LearnMore href = href/>
    {/if}
  </div>
</div>

<style>
  .title_block {
    padding: var(--big-padding);
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 16px;
    align-items: end;
  }

  .title_part {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .content_part {
    grid-column: 3;
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

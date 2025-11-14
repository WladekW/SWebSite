<script>
  import arrowImg from "$lib/assets/icons/arrow24dp.svg";

  var { arrowDir = "45deg", href = "/", className } = $props();
</script>

{#if href !== "none"}
  <a {href} class="learn_more {className}">
    <img src={arrowImg} alt="arrow" style="transform: rotate({arrowDir});" />
  </a>
{:else}
  <div class="learn_more {className}">
    <img src={arrowImg} alt="arrow" style="transform: rotate({arrowDir});" />
  </div>
{/if}

<style>
  .learn_more {
    background-color: #fff2;
    min-width: 32px;
    height: 32px;
    border: 1px #999 solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }

  .learn_more:hover {
    background-color: transparent;
  }
</style>

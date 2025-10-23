<script>
  var {blur = "8px", className} = $props();
</script>

<div class="mask {className}" style="backdrop-filter: blur({blur});">
</div>


<style>
  div {
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: inherit;
  }
</style>
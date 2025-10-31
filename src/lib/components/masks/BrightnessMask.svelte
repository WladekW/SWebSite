<script>
  var { brightness = "02", className } = $props();
</script>

<div
  class="mask {className}"
  style="background-color: #000000{brightness};"
></div>

<style>
  div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: inherit;
  }
</style>

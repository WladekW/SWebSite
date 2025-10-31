<script>
  var { href, text = "Log in" } = $props();
</script>

<button>
  <a {href}>{text}</a>
</button>

<style>
  button {
    align-content: center;
    background-color: var(--orange-lighter-color);
    border: none;
    border-radius: var(--std-radius);
    transition: 0.3s;
  }

  a {
    color: var(--text-color);
    border-color: transparent;
    border-style: solid;
    border-width: 0 0 1px 0;
    transition: 0.3s;
  }

  button:hover {
    background-color: var(--orange-color);
  }

  button:hover > a {
    border-color: var(--text-color);
  }
</style>

<script>
  var {href, text = "Log in"} = $props();
</script>

<button>
  <a href={href}>{text}</a>
</button>

<style>
  button{
    padding: 0 16px;
    height: 32px;
    align-content: center;
    background-color: var(--orange-lighter-color);
    border: none;
    border-radius: var(--std-radius);
    transition: .3s;
  }
  
  a{
    color: black;
    border-color: transparent;
    border-style: solid;
    border-width: 0 0 1px 0;
    transition: .3s;
  }

  button:hover{
    background-color: var(--orange-color);
  }

  button:hover > a{
    color: var(--text-color);
    border-color: var(--text-color);
  }
</style>
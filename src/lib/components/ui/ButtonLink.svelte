<script>
  var {href="/", text} = $props();
</script>

<button>
  <a href={href}>{text}</a>
</button>

<style>
  button{
    padding: var(--ui-element-padding);
    align-content: center;
    background-color: var(--gray-color);
    border: none;
    border-radius: var(--std-radius);
    transition: .3s;
  }
  
  a{
    border-color: transparent;
    border-style: solid;
    border-width: 0 0 1px 0;
    transition: .3s;
  }

  button:hover{
    background-color: var(--gray-lighter-color);
  }

  button:hover > a{
    border-color: var(--text-color);
  }
</style>
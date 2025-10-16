<script>
  var {href="/", text} = $props();
</script>

<button>
  <a href={href}>{text}</a>
</button>

<style>
  button{
    padding: 0 16px;
    height: 32px;
    align-content: center;
    background-color: var(--gray-color);
    border: none;
    border-radius: 4px;
  }
  
  a{
    border-color: transparent;
    border-style: solid;
    border-width: 0 0 1px 0;
    transition: .3s;
  }

  button:hover > a{
    border-color: #fff;
  }
</style>
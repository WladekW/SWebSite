<script>
	import favicon from '$lib/assets/icons/arrow24dp.svg';
  
  var {arrowDir = "45deg", href = "/", className} = $props();
</script>

<a href={href} class="learn_more {className}">
  <img src="{favicon}" alt="arrow" style="transform: rotate({arrowDir});">
</a>

<style>
  .learn_more{
    background-color: #fff2;
    width: 32px;
    height: 32px;
    border: 1px #999 solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;
  }

  .learn_more:hover{
    background-color: transparent;
  } 
</style>
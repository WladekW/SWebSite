<script>
	import favicon from '$lib/assets/icons/arrow24dp.svg';
  
  var {arrowDir = "45deg", href = "/"} = $props();
</script>

<a href={href} class="learn_more">
  <div>
    <img src="{favicon}" alt="arrow" style="transform: rotate({arrowDir});">
  </div>
  <span>
    LEARN MORE
  </span>
</a>

<style>
  .learn_more{
    width: fit-content;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 10px;
  }

  .learn_more > div{
    background-color: #fff4;
    width: 32px;
    height: 32px;
    border: 1px #999 solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;
  }

  .learn_more:hover > div{
    background-color: transparent;
  } 
</style>
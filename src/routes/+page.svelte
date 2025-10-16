<script>
  import MoreBlockH from '$lib/components/MoreBlockH.svelte';
</script>

<section class="home_screen">

</section>
<section class="cards_list_h">
  <MoreBlockH
    title = "Humanity"
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  />
  <MoreBlockH
    title = "Humanity"
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  />
  <MoreBlockH
    title = "Humanity"
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  />
  <MoreBlockH
    title = "Humanity"
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  />
</section>
<style>
  .home_screen{
    height: calc(100vh - 44px);
    background-image: url('/Img/koyasan.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 6px;
  }

  .cards_list_h{
    padding: 6px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
  }
</style>
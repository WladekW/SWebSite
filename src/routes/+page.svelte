<script>
  import MoreBlockH from '$lib/components/MoreBlockH.svelte';
  import Slider from '$lib/components/Slider.svelte';
  import LearnMore from '$lib/components/ui/LearnMore.svelte';
</script>

<section class="home_screen">
  <div class="home_screen--content">
    <div class="home_screen--intro">
    <h1>Mechaniak - <br>The Golden Age</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facilis earum tenetur illum ducimus enim quod numquam possimus placeat quo, explicabo ab quasi praesentium, quis ad! Suscipit reiciendis necessitatibus nemo?</p>
  </div>
  <div class="home_screen--learn_more">
    <LearnMore 
      arrowDir="180deg"
    />
  </div>
  </div>
  
</section>

<section class="cards_list_h">
  <MoreBlockH
    title = "Mikroprocessor"
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  />
  <MoreBlockH
    title = "Apple"
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  />
  <MoreBlockH
    title = "Foto-Filmowe"
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  />
  <MoreBlockH
    title = "Rozszrzające z matematyki"
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  />
</section>

<Slider className="support_slider">
  <img src="/icons/logos/bkash.png" alt="bkash"/>
  <img src="/icons/logos/bluey.png" alt="bkash"/>
  <img src="/icons/logos/github.png" alt="bkash"/>
  <img src="/icons/logos/google.png" alt="bkash"/>
  <img src="/icons/logos/Jordan.png" alt="bkash"/>
  <img src="/icons/logos/mico.png" alt="bkash"/>
  <img src="/icons/logos/netflix.png" alt="bkash"/>
  <img src="/icons/logos/xbox.png" alt="bkash"/>
</Slider>

<style>

  .home_screen{
    height: 80vh;
    background-image: url('/Img/koyasan.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: var(--std-radius);
    align-content: end;
  }

  .home_screen--intro{
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
  }

  .home_screen--content{
    backdrop-filter: blur(10px);
    border-radius: var(--std-radius);
    background-color: #0001;
    border: var(--std-border);
    display: grid;
    grid-template-columns: auto auto;
    gap: 100px;
    align-items: end;
    margin: var(--std-space);
    padding: 40px;
  }

  .home_screen--learn_more{
    margin-left: auto;
  }

  .cards_list_h{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--std-space);
    margin: var(--std-space) auto;
  }

</style>
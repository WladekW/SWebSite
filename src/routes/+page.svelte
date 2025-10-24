<script>
  import MoreBlockH from '$lib/components/blocks/MoreBlockH.svelte';
  import GapSlider from '$lib/components/SliderGap.svelte';
  import Slider from '$lib/components/Slider.svelte';
  import LearnMore from '$lib/components/LearnMore.svelte';
  import ImgBlock from '$lib/components/blocks/ImgBlock.svelte';
  import SectionBlock from '$lib/components/blocks/SectionBlock.svelte';
  import MoreBlockV from '$lib/components/blocks/MoreBlockV.svelte';
  import BrightnessMask from '$lib/components/masks/BrightnessMask.svelte';
</script>



<section class="home_screen">
  <BrightnessMask brightness="88"/>
  <div class="home_screen--content">
    <div class="home_screen--intro">
      <h1>Mechaniak - <br>The Golden Age</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facilisearum tenetur illum ducimus enim quod numquam possimus placeat quo,explicabo ab quasi praesentium, quis ad! Suscipit reiciendisnecessitatibus nemo?</p>
    </div>
    <div class="home_screen--learn_more">
      <LearnMore 
        arrowDir="180deg"
      />
    </div>
  </div>
</section>

<Slider>
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
  <MoreBlockH
    title = "Brainroty w samorządzie"
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  />
</Slider>

<section class="support_slider">
  <img src="/icons/logos/bkash.png" alt="bkash"/>
  <img src="/icons/logos/Jordan.png" alt="bkash"/>
  <img src="/icons/logos/mico.png" alt="bkash"/>
  <img src="/icons/logos/xbox.png" alt="bkash"/>
</section>

<section class="project_about">
  <ImgBlock
    className="about--img_block"
    src="/Img/koyasan.webp"
  >
    <LearnMore/>
  </ImgBlock>
  <SectionBlock
    className="project_about--section_block"
    theme="about"
    title="The Golden Age"
    text="
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat fugit unde, cupiditate laudantium blanditiis adipisci quam aliquid sapiente sint voluptas laborum et perspiciatis ipsam dolor dignissimos iure. Quos id, porro ea quas delectus quis, a doloremque beatae pariatur modi aliquid debitis labore. Placeat unde nulla rerum ut officiis repellendus soluta libero velit illum, adipisci totam officia mollitia porro nemo, delectus eveniet earum debitis repudiandae? Rem quidem quam, velit itaque inventore similique corporis, magnam nihil, dolor fugit maiores. Possimus non, totam dignissimos quos atque voluptatem omnis? 
    "
  />
</section>

<section class="additional">
  <div>
    <MoreBlockV
      title = "Microcontrolers"
      text = "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
    />
    <MoreBlockV
      title = "Travels"
      text = "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
    />
    <MoreBlockV
      title = "Gallery"
      text = "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
    />
    <MoreBlockV
      title = "Calendar"
      text = "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
    />
    <MoreBlockV
      title = "How to get part?"
      text = "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
    />
  </div>
  <ImgBlock
    src="/Img/dhtang.webp"
    className="additional--img_block"
  />
</section>



<style>
  .home_screen{
    height: 800px;
    margin-top: 0;
    background-image: url('/Img/bg/(4).webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: var(--std-radius);
    align-content: end;
    position: relative;
  }

  .home_screen--intro{
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    max-width: 960px;
  }

  .home_screen--content{
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: auto auto;
    align-items: end;
    margin: var(--std-space);
    padding: var(--big-padding);
  }

  .home_screen--content p{
    color: var(--text-color);
  }

  .home_screen--learn_more{
    margin-left: auto;
  }

  .project_about{
    min-height: 540px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--std-space);
  }

  .additional{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--std-space);
  }

  .additional > div{
    display: grid;
    gap: var(--std-space);
  }

  :global(.about--img_block){
    padding: var(--big-padding);
  }

  .support_slider{
    align-items: center;
    padding: 40px 0;
    margin: var(--std-space) 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
  }

  @media (max-width: 1040px){
    .home_screen--content{
      gap: 32px;
      grid-template-columns: 1fr;
    }

    .support_slider{
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    .project_about,
    .additional{
      grid-template-columns: 1fr;
    }

    .additional > :first-child {grid-row: 2;}
    .additional > :last-child {grid-row: 1;}

    :global(.about--img_block),
    :global(.additional--img_block){
      height: 400px;
    }
  }

  @media (max-width: 600px){
    .home_screen{
      height: fit-content;
    }
    .home_screen--content{
      padding: 16px;
    }
    .support_slider{
      grid-template-columns: repeat(1, 1fr);
      gap: 32px;
    }

    :global(.about--img_block){
      padding: 16px;
    }

    .project_about > :global(.section_block p){
      column-count: 1;
    }
    .project_about > :global(.section_block){
      padding: 32px;
    }

  }

</style>
<script>
  import TitleBlock from '$lib/components/blocks/TitleBlock.svelte';
  import AdditionalBlock from '$lib/components/blocks/AdditionalBlock.svelte';
</script>

<TitleBlock
  category="Microprocessor"
  title="Micrprocessory z Panem B i Panem S"
  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad incidunt maiores non pariatur iure aperiam voluptatum officiis ducimus."
/>

<section class="additional">
  <AdditionalBlock
    name="Data"
    value="12.23.2095"
  />
  <AdditionalBlock
    name="Author"
    value="Someone Anyoneski"
  />
  <AdditionalBlock
    name="Club"
    value="Micromechaniak"
  />
</section>

<section class="welcome_img">
  <img src="/Img/bg/(3).webp" alt="welcom img">
</section>

<section class="article">
  
</section>


<style>
  .additional{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--std-space);
  }

  .welcome_img{
    height: 600px;
  }

  .welcome_img > img{
    width: 100%;
    height: 100%;
    object-fit: cover; 
    display: block;
    border-radius: var(--std-radius);
  }

  @media (max-width: 600px){
    .additional{
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
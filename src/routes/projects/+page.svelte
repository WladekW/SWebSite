<script>
  import TitleBlock from "$lib/components/blocks/TitleBlock.svelte";
  import LearnMore from "$lib/components/LearnMore.svelte";
  import ImgBgBlock from "$lib/components/blocks/ImgBgBlock.svelte";
  import SectionBlock from "$lib/components/blocks/SectionItemBlock.svelte";
</script>

<TitleBlock
  category="Projects"
  title="Projects in ZSMIO 2025/2026"
  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad incidunt maiores non pariatur iure aperiam voluptatum officiis ducimus."
/>

<section class="porjects_section">
  <div class="projects_item">
    <ImgBgBlock className="projects_item--img_block" src="/Img/projects/1.jpg">
      <LearnMore />
    </ImgBgBlock>
    <SectionBlock
      className="projects_item--section_block"
      category="Project"
      title="MicroHard"
      text="
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat fugit unde, cupiditate laudantium blanditiis adipisci quam aliquid sapiente sint voluptas laborum et perspiciatis ipsam dolor dignissimos iure. Quos id, porro ea quas delectus quis, a doloremque beatae pariatur modi aliquid debitis labore. Placeat unde nulla rerum ut officiis repellendus soluta libero velit illum, adipisci totam officia mollitia porro nemo, delectus eveniet earum debitis repudiandae? Rem quidem quam, velit itaque inventore similique corporis, magnam nihil, dolor fugit maiores. Possimus non, totam dignissimos quos atque voluptatem omnis? 
      "
    />
  </div>
  <div class="projects_item">
    <ImgBgBlock className="projects_item--img_block" src="/Img/projects/2.jpg">
      <LearnMore />
    </ImgBgBlock>
    <SectionBlock
      className="projects_item--section_block"
      category="Project"
      title="Photo and video editing"
      text="
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat fugit unde, cupiditate laudantium blanditiis adipisci quam aliquid sapiente sint voluptas laborum et perspiciatis ipsam dolor dignissimos iure. Quos id, porro ea quas delectus quis, a doloremque beatae pariatur modi aliquid debitis labore. Placeat unde nulla rerum ut officiis repellendus soluta libero velit illum, adipisci totam officia mollitia porro nemo, delectus eveniet earum debitis repudiandae? Rem quidem quam, velit itaque inventore similique corporis, magnam nihil, dolor fugit maiores. Possimus non, totam dignissimos quos atque voluptatem omnis? 
      "
    />
  </div>
  <div class="projects_item">
    <ImgBgBlock className="projects_item--img_block" src="/Img/projects/3.jpg">
      <LearnMore />
    </ImgBgBlock>
    <SectionBlock
      className="projects_item--section_block"
      category="Project"
      title="Jabcko"
      text="
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat fugit unde, cupiditate laudantium blanditiis adipisci quam aliquid sapiente sint voluptas laborum et perspiciatis ipsam dolor dignissimos iure. Quos id, porro ea quas delectus quis, a doloremque beatae pariatur modi aliquid debitis labore. Placeat unde nulla rerum ut officiis repellendus soluta libero velit illum, adipisci totam officia mollitia porro nemo, delectus eveniet earum debitis repudiandae? Rem quidem quam, velit itaque inventore similique corporis, magnam nihil, dolor fugit maiores. Possimus non, totam dignissimos quos atque voluptatem omnis? 
      "
    />
  </div>
  <div class="projects_item">
    <ImgBgBlock className="projects_item--img_block" src="/Img/projects/1.jpg">
      <LearnMore />
    </ImgBgBlock>
    <SectionBlock
      className="projects_item--section_block"
      category="Project"
      title="The Golden PCB"
      text="
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat fugit unde, cupiditate laudantium blanditiis adipisci quam aliquid sapiente sint voluptas laborum et perspiciatis ipsam dolor dignissimos iure. Quos id, porro ea quas delectus quis, a doloremque beatae pariatur modi aliquid debitis labore. Placeat unde nulla rerum ut officiis repellendus soluta libero velit illum, adipisci totam officia mollitia porro nemo, delectus eveniet earum debitis repudiandae? Rem quidem quam, velit itaque inventore similique corporis, magnam nihil, dolor fugit maiores. Possimus non, totam dignissimos quos atque voluptatem omnis? 
      "
    />
  </div>
</section>

<style>
  .porjects_section {
    display: grid;
    gap: var(--std-space);
  }

  .projects_item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--std-space);
  }

  .projects_item:nth-child(even) {
    direction: rtl;
  }

  :global(.projects_item--img_block) {
    padding: var(--std-padding);
  }

  :global(.projects_item--section_block) {
    padding: var(--std-padding);
    text-align: left;
    min-height: 440px;
  }

  @media (max-width: 1040px) {
    .projects_item {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
    .projects_item:nth-child(even) {
      direction: ltr;
    }
    :global(.projects_item--section_block) {
      padding: var(--std-padding);
      text-align: left;
      min-height: 320px;
    }
  }

  @media (max-width: 600px) {
    :global(.projects_item--img_block) {
      padding: 16px;
    }

    .projects_item > :global(.section_block){
      padding: 32px;
    }

    .projects_item > :global(.section_block p) {
      column-count: 1;
    }
    .projects_item {
      grid-template-rows: 1fr 2fr;
    }
  }
</style>

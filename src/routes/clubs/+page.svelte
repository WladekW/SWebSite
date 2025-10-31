<script>
  import TitleBlock from "$lib/components/blocks/TitleBlock.svelte";
  import MoreBlockH from "$lib/components/blocks/MoreBlockH.svelte";
  import ImgBlock from "$lib/components/blocks/ImgBgBlock.svelte";
</script>

<TitleBlock
  category="Clubs"
  title="Clubs in ZSMIO Hight School"
  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad incidunt maiores non pariatur iure aperiam voluptatum officiis ducimus."
/>

<section class="clubs_blocks">
  <MoreBlockH
    className="clubs_blocks--item"
    category="MICROCONTROLER"
    title="Mikroprocessor"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem ducimus nisi, sequi quod, necessitatibus, quidem cupiditate dolorum saepe quasi ratione? Tempora eius in accusantium qui fugit enim dolores, explicabo, sequi magni, odio dicta. Porro voluptas tempora ad optio nobis odit quidem at, sapiente libero praesentium sit alias deserunt aspernatur."
    href="/clubs/micro"
  />

  <img src="/Img/clubs/1.webp" alt="img" />
  <img src="/Img/clubs/2.webp" alt="img" />
  <img src="/Img/clubs/3.webp" alt="img" />
  <img src="/Img/clubs/4.webp" alt="img" />
  <MoreBlockH
    className="clubs_blocks--item"
    category="FOTO"
    title="Mikroprocessor"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem ducimus nisi, sequi quod, necessitatibus, quidem cupiditate dolorum saepe quasi ratione? Tempora eius in accusantium qui fugit enim dolores, explicabo, sequi magni, odio dicta. Porro voluptas tempora ad optio nobis odit quidem at, sapiente libero praesentium sit alias deserunt aspernatur."
  />
  <MoreBlockH
    className="clubs_blocks--item"
    category="MATH"
    title="Mikroprocessor"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem ducimus nisi, sequi quod, necessitatibus, quidem cupiditate dolorum saepe quasi ratione? Tempora eius in accusantium qui fugit enim dolores, explicabo, sequi magni, odio dicta. Porro voluptas tempora ad optio nobis odit quidem at, sapiente libero praesentium sit alias deserunt aspernatur."
  />
  <img src="/Img/clubs/1.webp" alt="img" />
  <img src="/Img/clubs/2.webp" alt="img" />
  <img src="/Img/clubs/3.webp" alt="img" />
  <img src="/Img/clubs/4.webp" alt="img" />
  <MoreBlockH
    className="clubs_blocks--item"
    category="ABRACADABRA"
    title="Mikroprocessor"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem ducimus nisi, sequi quod, necessitatibus, quidem cupiditate dolorum saepe quasi ratione? Tempora eius in accusantium qui fugit enim dolores, explicabo, sequi magni, odio dicta. Porro voluptas tempora ad optio nobis odit quidem at, sapiente libero praesentium sit alias deserunt aspernatur."
  />
</section>

<style>
  .clubs_blocks {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--std-space);
  }
  .clubs_blocks > * {
    aspect-ratio: 1 / 1;
    border-radius: var(--std-radius);
  }
  .clubs_blocks > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  @media (max-width: 1040px) {
    .clubs_blocks {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .clubs_blocks {
      grid-template-columns: 1fr;
    }
    :global(.clubs_blocks--item) {
      aspect-ratio: 1 / 1;
    }
  }
</style>

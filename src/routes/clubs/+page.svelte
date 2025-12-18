<script>
    import TitleBlock from "$lib/components/blocks/TitleBlock.svelte";
    import MoreBlockH from "$lib/components/blocks/MoreBlockH.svelte";
    import ImgBlock from "$lib/components/blocks/ImgBgBlock.svelte";

    //img import

    import club1 from "$lib/assets/Img/clubs/1.webp";
    import club2 from "$lib/assets/Img/clubs/2.webp";
    import club3 from "$lib/assets/Img/clubs/3.webp";
    import club4 from "$lib/assets/Img/clubs/4.webp";
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

    <ImgBlock src={club1} class="clubs_blocks--img" loading="eager" />
    <ImgBlock src={club2} class="clubs_blocks--img" loading="eager" />
    <ImgBlock src={club3} class="clubs_blocks--img" loading="eager" />
    <ImgBlock src={club4} class="clubs_blocks--img" loading="eager" />

    <MoreBlockH
        className="clubs_blocks--item"
        category="FOTO"
        title="FOTONUTKA"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem ducimus nisi, sequi quod, necessitatibus, quidem cupiditate dolorum saepe quasi ratione? Tempora eius in accusantium qui fugit enim dolores, explicabo, sequi magni, odio dicta. Porro voluptas tempora ad optio nobis odit quidem at, sapiente libero praesentium sit alias deserunt aspernatur."
        href="/clubs/photo"
    />
    <MoreBlockH
        className="clubs_blocks--item"
        category="MATH"
        title="Mikroprocessor"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem ducimus nisi, sequi quod, necessitatibus, quidem cupiditate dolorum saepe quasi ratione? Tempora eius in accusantium qui fugit enim dolores, explicabo, sequi magni, odio dicta. Porro voluptas tempora ad optio nobis odit quidem at, sapiente libero praesentium sit alias deserunt aspernatur."
    />
    <ImgBlock src={club1} class="clubs_blocks--img" />
    <ImgBlock src={club2} class="clubs_blocks--img" />
    <ImgBlock src={club3} class="clubs_blocks--img" />
    <ImgBlock src={club4} class="clubs_blocks--img" />
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
    :global(.clubs_blocks > *) {
        aspect-ratio: 1 / 1;
        border-radius: var(--std-radius);
    }
    :global(.clubs_blocks--img) {
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

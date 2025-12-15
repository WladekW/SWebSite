<script>
    import favicon from "$lib/assets/favicon.svg";
    import TitleBlock from "$lib/components/blocks/TitleBlock.svelte";
    import AdditionalBlock from "$lib/components/blocks/AdditionalBlock.svelte";

    var {
        TitleBlockCategory,
        TitleBlockTitle,
        TitleBlockText,
        data,
        author,
        club,
        ImgSrc,
        article,
    } = $props();
</script>

<TitleBlock
    category={TitleBlockCategory}
    title={TitleBlockTitle}
    text={TitleBlockText}
/>

<section class="additional">
    <AdditionalBlock name="Data" value={data} />
    <AdditionalBlock name="Author" value={author} />
    <AdditionalBlock name="Club" value={club} />
</section>

<section class="welcome_img">
    <img
        src={ImgSrc}
        alt="welcoming img"
        loading="eager"
        fetchpriority="high"
    />
</section>

<section class="article">
    {#each article as a}
        <div class="article_item">
            {#if a == article[0]}
                <h2>{a.title}</h2>
            {:else}
                <h3>{a.title}</h3>
            {/if}
            <p>
                {a.text}
            </p>
        </div>
    {/each}
</section>

<style>
    .additional {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--std-space);
    }

    .welcome_img {
        height: 600px;
    }

    .welcome_img > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: var(--std-radius);
    }

    .article {
        padding: 32px 8px;
        max-width: 920px;
        display: grid;
        gap: 42px;
    }

    .article_item {
        display: grid;
        gap: 12px;
    }

    @media (max-width: 600px) {
        .additional {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>

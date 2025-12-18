<script>
    import ImgBlock from "$lib/components/blocks/ImgBgBlock.svelte";
    import TransparentBlock from "$lib/components/blocks/TransparentBlock.svelte";
    import LoginForm from "$lib/components/LoginForm.svelte";
    import BlurMask from "$lib/components/masks/BlurMask.svelte";

    //img import
    import bgLogin from "$lib/assets/Img/bg/(2).webp?enhanced&w=1280;640;400";
</script>

<section class="login_section">
    <ImgBlock className="login--img_block" src={bgLogin} loading="eager">
        <div class="img_block--content">
            <BlurMask />
            <TransparentBlock
                title="Hello my dear frouinde! How are you From? And what country are you do?"
                text="-Huaj! Aim from good! And Ich doibeen form DeGermanion - Don!"
            />
        </div>
    </ImgBlock>
    <div class="auth_content">
        <h2>Log In</h2>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
            voluptatibus.
        </p>
        <LoginForm className="auth_content--form" />
    </div>
</section>

<style>
    .login_section {
        height: 100vh;
        max-height: 1080px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    :global(.login--img_block) {
        padding: var(--std-padding);
    }

    .img_block--content {
        position: relative;
        z-index: 2;
        border-radius: var(--std-radius);
    }

    .auth_content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        padding: 0 20%;
    }

    :global(.auth_content--form) {
        width: 100%;
    }

    @media (max-width: 1040px) {
        .login_section {
            grid-template-columns: 1fr;
            height: auto;
        }

        :global(.login--img_block) {
            height: fit-content;
        }

        .auth_content {
            padding: 64px 0;
        }
    }

    @media (max-width: 600px) {
        :global(.login--img_block) {
            padding: 0;
        }
    }
</style>

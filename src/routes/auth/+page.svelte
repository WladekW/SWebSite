<script>
    import ImgBlock from '$lib/components/blocks/ImgBlock.svelte';
    import LoginForm from '$lib/components/LoginForm.svelte';
</script>


<section class="login_section">
    <ImgBlock
        className="login--img_block"
        src="/Img/bg/(2).webp"
    >

    </ImgBlock>
    <div class="auth_content">
        <h2>Log In</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,  voluptatibus.</p>
        <LoginForm className="auth_content--form"/>
    </div>
</section>


<style>
    .login_section{
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .auth_content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        padding: 0 192px;
    }

    :global(.auth_content--form){
        width: 100%;
    }
</style>
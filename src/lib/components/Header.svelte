<script>
  import ButtonLink from '$lib/components/ui/ButtonLink.svelte';
  import ButtonLogin from '$lib/components/ui/ButtonLogin.svelte';
  import favicon from '$lib/assets/favicon.svg';
</script>

<header>
  <nav class="main_menu">
    <a href="/" class="main_menu--logo">
      <img src={favicon} alt="">
    </a>
    <ul class="main_menu--list">
      <li><ButtonLink href="/" text="Home"/></li>
      <li><ButtonLink href="/" text="Clubs"/></li>
      <li><ButtonLink href="/" text="Projects"/></li>
      <li><ButtonLink href="/" text="About Us"/></li>
      <li><ButtonLink href="/" text="Contact Us"/></li>
      <li><ButtonLogin href="/" text="Log in"/></li>
    </ul>
  </nav>
</header>

<style>
  .main_menu{
    display: flex;
    justify-content: space-between;
    padding: var(--std-space) 0;
  }

  .main_menu--logo{
    height: 32px;
    img{
      height: 100%;
    }
  }
  
  .main_menu--list{
    display: flex;
    gap: var(--std-space);
  }
</style>
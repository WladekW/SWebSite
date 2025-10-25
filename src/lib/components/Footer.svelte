<script>
  import SocialMediaBlock from '$lib/components/blocks/SocialMediaBlock.svelte';
</script>

<footer>
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2011.62271940284!2d22.061026890411775!3d53.15980381419067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471e347628cf15fd%3A0x3d81b353e3859a67!2zWmVzcMOzxYIgU3prw7PFgiBNZWNoYW5pY3pueWNoIGkgT2fDs2xub2tzenRhxYJjxIVjeWNoIG5yIDUgdyDFgW9txbx5!5e0!3m2!1spl!2sus!4v1760870636002!5m2!1spl!2sus" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"
    title="school location"
  >
  </iframe>
  <div class="footer--content">
    <nav class="footer_menu">
      <ul class="footer_menu--list">
        <li>
          <a href="/"><h5>Home</h5></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
      </ul>
      <ul class="footer_menu--list">
        <li>
          <a href="/clubs"><h5>Clubs</h5></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
      </ul>
      <ul class="footer_menu--list">
        <li>
          <a href="/"><h5>Projects</h5></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
      </ul>
      <ul class="footer_menu--list">
        <li>
          <a href="/calendar"><h5>Calendar</h5></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
      </ul>
      <ul class="footer_menu--list">
        <li>
          <a href="/"><h5>Contact Us</h5></a>
        </li>
        <li>
          <a href="/"><span>Section</span></a>
        </li>
      </ul>
    </nav>
    <div class="footer_policy">
      <a href="/">© 2025 ZSMiO nr 5</a>
      <a href="/terms">Terms</a>
      <a href="/security">Security</a>
      <a href="/privacy">Privacy</a>
    </div>
  </div>
  <SocialMediaBlock className="footer_socials"/>
</footer>

<style>
  footer{
    display: grid;
    grid-template-columns: 1fr 2fr auto;
    gap: var(--std-space);
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: var(--std-space);
  }

  footer > iframe{
    align-self: stretch;
    justify-self: stretch;
    border-radius: var(--std-radius);    
  }

  .footer--content{
    display: flex;
    flex-direction: column;
    gap: var(--std-space);
  }

  .footer_menu{
    background-color: var(--gray-color);
    padding: var(--std-padding);
    border-radius: var(--std-radius);    
    display: flex;
    gap: 32px;
    justify-content: center; 
  }

  .footer_menu--list{
    display: flex;
    flex-direction: column;
    gap: var(--std-space);
  }

  .footer_menu--list h5{
    margin-bottom: 12px;
  }

  .footer_menu--list span{
    color: var(--p-color);
  }

  :global(.footer_socials){
    flex-direction: column;
  }

  .footer_policy{
    background-color: var(--gray-color);
    padding: var(--std-padding);
    border-radius: var(--std-radius);
    display: flex;
    justify-content: center;
    gap: 32px;
  }

  .footer_policy > a{
    color: var(--p-color);
  }

  .footer--content > nav,
  .footer--content > div{
    transition: .3s;
  }


  .footer--content > nav:hover,
  .footer--content > div:hover{
    background-color: var(--gray-lighter-color);
  }

  @media (max-width: 1040px) {
    footer{
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr auto;
    }
    :global(.footer_socials){
      flex-direction: row;
    }
  }

  @media (max-width: 600px){
    .footer_menu--list>li:not(:first-child){
      display: none;
    }
    .footer_menu, .footer_policy{
      flex-direction: column;
      gap: var(--std-space);
      align-items: center;
      padding: 16px;
    }
  }

</style>
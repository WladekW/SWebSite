<script></script>

<footer>
  <div class="footer--content">
    <nav class="footer_menu">
      <ul class="footer_menu--list">
        <li>
          <a href="/"><h5>Home</h5></a>
        </li>
        <li>
          <a href="/clubs"><h5>Clubs</h5></a>
        </li>
        <li>
          <a href="/projects"><h5>Projects</h5></a>
        </li>
        <li>
          <a href="/calendar"><h5>Calendar</h5></a>
        </li>
        <li>
          <a href="/contact"><h5>Contact Us</h5></a>
        </li>
      </ul>
      <a href="/">© 2025 ZSMiO nr 5</a>
    </nav>
  </div>
</footer>

<style>
  footer {
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: var(--std-space);
  }

  .footer--content {
    display: flex;
    flex-direction: column;
    gap: var(--std-space);
  }

  .footer_menu {
    background-color: var(--gray-color);
    padding: var(--std-padding);
    border-radius: var(--std-radius);
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
  }

  .footer_menu--list {
    display: flex;
    /* flex-direction: column; */
    gap: 32px;
  }

  .footer_menu--list h5 {
    margin-bottom: 12px;
  }

  .footer_menu {
    transition: 0.3s;
  }

  .footer_menu:hover {
    background-color: var(--gray-lighter-color);
  }

  @media (max-width: 1040px) {
    footer {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr auto;
    }
  }

  @media (max-width: 600px) {
    .footer_menu {
      flex-direction: column;
      gap: var(--std-space);
      align-items: center;
      padding: 16px;
    }
  }
</style>

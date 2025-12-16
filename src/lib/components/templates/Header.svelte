<script>
    import { onMount } from "svelte";
    import ButtonLink from "$lib/components/ui/ButtonLink.svelte";
    import ButtonOrange from "$lib/components/ui/ButtonOrange.svelte";
    import favicon from "$lib/assets/favicon.svg";

    var isOpen;
    function toggleMenu() {
        isOpen = !isOpen;
    }
</script>

<header>
    <nav class="main_menu">
        <a href="/" class="main_menu--logo">
            <img src={favicon} alt="" />
        </a>
        <ul class="main_menu--list">
            <li><ButtonLink href="/" text="Home" /></li>
            <li><ButtonLink href="/clubs" text="Clubs" /></li>
            <li><ButtonLink href="/projects" text="Projects" /></li>
            <li><ButtonLink href="/calendar" text="Calendar" /></li>
            <li><ButtonOrange href="/contact" text="Contact Us" /></li>
        </ul>
        <button aria-label="menu" class="burger_menu" on:click={toggleMenu}>
            <hr />
            <hr />
            <hr />
        </button>
        <ul class="burger_menu--list" class:open={isOpen}>
            <li><a href="/" on:click={toggleMenu}>Home</a></li>
            <li><a href="/clubs" on:click={toggleMenu}>Clubs</a></li>
            <li><a href="/projects" on:click={toggleMenu}>Projects</a></li>
            <li><a href="/calendar" on:click={toggleMenu}>Calendar</a></li>
            <li><a href="/contact" on:click={toggleMenu}>Contact Us</a></li>
        </ul>
    </nav>
</header>

<style>
    header {
        position: sticky;
        top: 0;
        z-index: 10;
        background-color: var(--background-color);
        /* background-color: #0008;
    backdrop-filter: blur(32px); */
    }

    .main_menu {
        position: relative;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--std-space) 0;
    }

    .main_menu--logo {
        height: 36px;
        img {
            height: 100%;
        }
    }

    .main_menu--list {
        display: flex;
        gap: var(--std-space);
    }

    .burger_menu {
        width: 32px;
        background: none;
        border: none;
        padding: 0;
        display: none;
    }

    .burger_menu--list {
        height: 100vh;
        width: -webkit-fill-available;
        background-color: var(--background-color);
        /* display: none; */
        position: absolute;
        z-index: -1;
        top: -100vh;
        display: flex;
        flex-direction: column;
        gap: 24px;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
    }

    .burger_menu--list.open {
        top: 0;
    }

    .burger_menu > hr {
        border: 1px var(--text-color) solid;
    }

    @media (max-width: 600px) {
        .main_menu--list {
            display: none;
        }
        .burger_menu {
            display: block;
        }
    }
</style>

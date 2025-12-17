<script>
    import arrowImg from "$lib/assets/icons/arrow24dp.svg";

    var { arrowDir = "45deg", onClick, className } = $props();
</script>

<button class="clalendar_button {className}" onclick={onClick}>
    <img src={arrowImg} alt="arrow" style="transform: rotate({arrowDir});" />
</button>

<style>
    .clalendar_button {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #060503b9;
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .clalendar_button:hover {
        background-color: transparent;
    }
</style>

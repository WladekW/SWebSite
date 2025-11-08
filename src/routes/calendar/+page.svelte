<script>
  import TitleBlock from "$lib/components/blocks/TitleBlock.svelte";
  import ImgBgBlock from "$lib/components/blocks/ImgBgBlock.svelte";
  import months from "$lib/data/months.json";

  var monthNames = Object.keys(months);
  var monthIndex = 0;
  var selectedMonth = monthNames[monthIndex];
  var monthDays = months[selectedMonth];
</script>

<TitleBlock
  category="Calendar"
  title="Projects calendar"
  text='Tu się znajduje harmonogram zajęć dodatkowych w ramach projektu "Stań się lepszy"'
/>

<section>
  <ImgBgBlock src="Img/bg/(6).jpg" className="calendar_section">
    <div class="calendar_body">
      {#each Array(monthDays) as _, i}
        <div class="calendar_item">
          <p>{i}</p>
        </div>
      {/each}
    </div>
  </ImgBgBlock>
</section>

<style>

  .calendar_body{
    height: 100%;
    width: 100%;
    display: grid;
    gap: var(--std-space);
    grid-template-columns: repeat(7, 1fr);
    padding: var(--std-padding);
  }

  .calendar_item {
    padding: var(--std-space);
    background-color: #060503b9;
    border-radius: var(--std-radius);
    backdrop-filter: blur(8px);
  }

</style>

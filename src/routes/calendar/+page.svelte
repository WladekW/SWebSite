<script>
  import TitleBlock from "$lib/components/blocks/TitleBlock.svelte";
  import ImgBgBlock from "$lib/components/blocks/ImgBgBlock.svelte";
  import CalendarArrow from "$lib/components/ui/CalendarArrow.svelte";
  import months from "$lib/data/months.json";

  var monthNames = Object.keys(months);
  var monthIndex = 0;
  var selectedMonth = monthNames[monthIndex];
  var monthDays = months[selectedMonth];

function prevMonth() {
  monthIndex = monthIndex > 0 ? monthIndex - 1 : 11;
  selectedMonth = monthNames[monthIndex];
  monthDays = months[selectedMonth];
}

function nextMonth() {
  monthIndex = monthIndex < 11 ? monthIndex + 1 : 0;
  selectedMonth = monthNames[monthIndex];
  monthDays = months[selectedMonth];
}

</script>

<TitleBlock
  category="Calendar"
  title="Projects calendar"
  text="Tu się znajduje harmonogram zajęć dodatkowych w ramach projektu Stań się lepszy"
/>

<section>
  <ImgBgBlock src="Img/bg/(6).jpg" className="calendar_section">
    <div class="calendar_main">
      <div class="calendar_menu">
        <CalendarArrow arrowDir="270deg" onClick={prevMonth} />
        <span>{selectedMonth}</span>
        <CalendarArrow arrowDir="90deg" onClick={nextMonth} />
      </div>
      <div class="calendar_body">
        {#each Array(monthDays) as _, i}
          <div class="calendar_item">
            <p>{i + 1}</p>
          </div>
        {/each}
      </div>
    </div>
  </ImgBgBlock>
</section>

<style>
  .calendar_main {
    width: 100%;
    height: 100%;
    padding: var(--std-padding);
    display: grid;
    gap: var(--std-space);
  }
  .calendar_menu {
    width: 200px;
    display: flex;
    justify-content: space-between;
  }
  .calendar_menu span {
    padding: var(--std-space);
    background-color: #060503b9;
    border-radius: var(--std-radius);
    backdrop-filter: blur(8px);
  }
  .calendar_body {
    display: grid;
    gap: var(--std-space);
    grid-template-columns: repeat(7, 1fr);
  }

  .calendar_item {
    padding: var(--std-space);
    background-color: #060503b9;
    border-radius: var(--std-radius);
    backdrop-filter: blur(8px);
  }
</style>

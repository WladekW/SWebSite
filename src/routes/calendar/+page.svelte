<script>
    import TitleBlock from "$lib/components/blocks/TitleBlock.svelte";
    import ImgBgBlock from "$lib/components/blocks/ImgBgBlock.svelte";
    import CalendarArrow from "$lib/components/ui/CalendarArrow.svelte";
    import { onMount } from "svelte";

    const date = new Date();
    let selectedMonth = date.getMonth();
    let monthName = $state("");
    let dayCount = $state(0);
    let selectedYear = $state(date.getFullYear());

    let events = $state([]);

    async function getEvents(year, month) {
        const res = await fetch(`/api/calendar?year=${year}&month=${month}`);
        const data = await res.json();

        monthName = data["monthName"];
        dayCount = data["dayCount"];
        selectedYear = data["year"];

        events = data["events"];
    }

    async function prevMonth() {
        if (selectedMonth > 0) {
            selectedMonth--;
        } else {
            selectedMonth = 11;
            selectedYear--;
        }

        await getEvents(selectedYear, selectedMonth);
    }

    async function nextMonth() {
        if (selectedMonth < 11) {
            selectedMonth++;
        } else {
            selectedMonth = 0;
            selectedYear++;
        }

        await getEvents(selectedYear, selectedMonth);
    }

    onMount(async () => {
        getEvents(selectedYear, selectedMonth);
    });
</script>

<TitleBlock
    category="Calendar"
    title="Projects calendar"
    text="Tu się znajduje harmonogram zajęć dodatkowych w ramach projektu Stań się lepszy"
/>

<section>
    <ImgBgBlock src="Img/bg/(6).jpg" className="calendar_section">
        <div class="calendar_main">
            <div class="calendar_top">
                <div class="calendar_menu">
                    <CalendarArrow arrowDir="270deg" onClick={prevMonth} />
                    <span class="month_name">{monthName}</span>
                    <CalendarArrow arrowDir="90deg" onClick={nextMonth} />
                </div>

                <span>{selectedYear}</span>
            </div>
            <div class="calendar_body">
                {#each Array(dayCount) as _, i}
                    <div class="calendar_item">
                        <p>{i + 1}</p>

                        {#each events.filter((event) => event.Day == i + 1 && event.Month == selectedMonth && event.Year == selectedYear) as event}
                            <p>{event.Title}</p>
                            <p>{event.Description}</p>
                        {/each}
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
    .calendar_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .calendar_top span {
        padding: var(--std-space);
        background-color: #060503b9;
        border-radius: var(--std-radius);
        backdrop-filter: blur(8px);
    }
    .calendar_menu {
        width: 200px;
        display: flex;
        justify-content: space-between;
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

    .month_name {
        text-transform: capitalize;
    }
</style>

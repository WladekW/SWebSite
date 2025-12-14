<script>
    import { onMount } from "svelte";

    const date = new Date();
    let selectedMonth = date.getMonth();
    let monthName = $state("");
    let dayCount = $state(0);
    let selectedYear = $state(date.getFullYear());

    let events = $state([]);

    let form_date = $state("");
    let form_title = $state("");
    let form_desc = $state("");

    async function getEvents(year, month) {
        const res = await fetch(`/api/calendar?year=${year}&month=${month}`);
        const data = await res.json();

        monthName = data["monthName"];
        dayCount = data["dayCount"];
        selectedYear = data["year"];

        events = data["events"];
    }

    async function deleteEvent(_id) {
        await fetch("/api/admin/delete", {
            method: "DELETE",
            body: JSON.stringify({ id: _id }),
        });

        await getEvents(selectedYear, selectedMonth);
    }

    async function createNewEvent() {
        if (!form_date || !form_title || !form_desc) return;

        await fetch("/api/admin/add", {
            method: "POST",
            body: JSON.stringify({
                date: form_date,
                title: form_title,
                description: form_desc,
            }),
        });

        await getEvents(selectedYear, selectedMonth);
    }

    onMount(async () => {
        getEvents(selectedYear, selectedMonth);
    });
</script>

<section>
    <div class="w-full">
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Id</th>
                    <th>Rok</th>
                    <th>Miesiąc</th>
                    <th>Dzień</th>
                    <th>Tytuł</th>
                    <th>Opis</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {#each events as event, index}
                    <tr>
                        <td>{index + 1}</td>
                        <td>{event.Id}</td>
                        <td>{event.Year}</td>
                        <td>{event.Month + 1}</td>
                        <td>{event.Day}</td>
                        <td>{event.Title}</td>
                        <td>{event.Description}</td>
                        <td>
                            <div class="table-controls">
                                <button>Edit</button>
                                <button onclick={() => deleteEvent(event.Id)}
                                    >Delete</button
                                >
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

    <div>
        <!-- <form preventDefault> -->
        <label for="date">Data</label>
        <input bind:value={form_date} type="date" name="date" id="date" />

        <label for="title">Tytuł</label>
        <input bind:value={form_title} type="title" name="title" id="title" />

        <label for="desc">Opis </label>
        <textarea bind:value={form_desc} type="desc" name="desc" id="desc"
        ></textarea>

        <button onclick={createNewEvent}>Wyślij</button>
        <!-- </form> -->
    </div>
</section>

<style>
    table,
    tr,
    td,
    th {
        border: 1px solid white;
    }

    td,
    th {
        padding: 0.5rem;
        text-align: center;
    }

    .table-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .table-controls button {
        background-color: red;
        padding: 0.5rem;
    }
</style>

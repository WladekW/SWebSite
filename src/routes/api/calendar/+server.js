import db from "$lib/server/db";

function daysInMonth(year, month) {
  return new Date(parseInt(year), parseInt(month) + 1, 0).getDate();
}

const monthNames = [
  "styczeń",
  "luty",
  "marzec",
  "kwiecień",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpień",
  "wrzesień",
  "październik",
  "listpoad",
  "grudzień",
];

export async function GET({ url }) {
  const month = parseInt(url.searchParams.get("month"));
  const year = parseInt(url.searchParams.get("year"));
  const monthName = monthNames[month];
  const dayCount = daysInMonth(year, month);

  const query = `SELECT * FROM events WHERE date >= '${year}-${String(month + 1).padStart(2, 0)}-01' AND date < '${month + 2 > 12 ? year + 1 : year}-${String(month + 2 > 12 ? 1 : month + 2).padStart(2, "0")}-01' ORDER BY date DESC`;

  const eventsQuery = db.prepare(query).all();

  let events = [];

  eventsQuery.forEach((el) => {
    const d = new Date(el.date.replace(" ", "T"));

    const newEvent = {
      Id: el.id,
      Year: d.getFullYear(),
      Month: d.getMonth(),
      Day: d.getDate(),
      Title: el.title,
      Description: el.description,
    };

    events.push(newEvent);
  });

  // console.log(eventsQuery, query);

  return new Response(
    JSON.stringify({
      ok: true,
      satus: 200,
      year,
      monthName,
      dayCount,
      events,
    }),
  );
}

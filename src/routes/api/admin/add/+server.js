import db from "$lib/server/db";
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  const { date, title, description } = await request.json();

  // console.log(date, title, description)

  if (!date || !title) return json({ success: false });

  const query = `
  INSERT INTO events (date, title, description) VALUES ('${date}', '${title}', '${description}')
  `;

  const result = db.prepare(query).run();

  return json({ success: result.changes > 0 });
}

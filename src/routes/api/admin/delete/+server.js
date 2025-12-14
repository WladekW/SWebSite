import db from "$lib/server/db";
import { json } from "@sveltejs/kit";

export async function DELETE({ request }) {
  const { id } = await request.json();

  // console.log(id);

  const result = db.prepare(`DELETE FROM events WHERE id = ${id}`).run();

  return json({ success: result.changes > 0 });
}

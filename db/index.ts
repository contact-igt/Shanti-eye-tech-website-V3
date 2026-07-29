// @ts-expect-error Cloudflare virtual module is provided by the worker build.
import * as cloudflareWorkers from "cloudflare:workers";

const { env } = cloudflareWorkers as unknown as { env: { DB?: D1Database } };
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export function getDb() {
  if (!env.DB) {
    throw new Error(
      "Cloudflare D1 binding `DB` is unavailable. Set the `d1` field in .openai/hosting.json to `DB` or let your control plane inject the real binding values before using the database."
    );
  }

  return drizzle(env.DB, { schema });
}

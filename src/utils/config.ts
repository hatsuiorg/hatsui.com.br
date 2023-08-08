import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

import { DiscordRegexes } from "./regexes";

const CONFIG = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]),
  },
  client: {
    NEXT_PUBLIC_DISCORD_INVITE: z.string().regex(DiscordRegexes.Invite, {
      message: "Invalid Discord invite URL provided.",
    }),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_DISCORD_INVITE: process.env.NEXT_PUBLIC_DISCORD_INVITE,
  },
});

export default CONFIG;

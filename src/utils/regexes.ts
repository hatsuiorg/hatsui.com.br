export const DiscordRegexes = {
  Invite:
    /(?:^|\b)discord(?:(?:app)?\.com\/invite|\.gg(?:\/invite)?)\/(?<code>[\w-]{2,255})(?:$|\b)/gi,
} as const;

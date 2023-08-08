import { NextRequest, NextResponse } from "next/server";
import CONFIG from "@/utils/config";

export async function GET(_req: NextRequest, _res: NextResponse) {
  return NextResponse.redirect(CONFIG.NEXT_PUBLIC_DISCORD_INVITE, {
    status: 302,
  });
}

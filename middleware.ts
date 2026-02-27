import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * TEMP: build unblocker
 * - Edgeで禁止モジュール（crypto等）を参照しない
 * - 何もしない（NextResponse.next）
 * - matcherは存在しないパスへ（実行されない）
 */
export function middleware(_req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/__m55_noop_middleware__"],
};

import { CacheTags } from "@/common/cache";
import envConfig from "@/common/env-config";
import { validateSignature } from "@/lib/hashnode/validate";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const SECRET = envConfig.HASHNODE.REVALIDATE_SECRET;
  const headers = req.headers;
  const receivedSecret = headers.get("x-hashnode-signature");

  const body = await req.json();

  const isValidRequest = validateSignature({
    secret: SECRET,
    incomingSignatureHeader: receivedSecret,
    payload: body,
  });

  if (!isValidRequest) {
    return Response.json(
      { message: "Invalid Hashnode signature" },
      { status: 401 }
    );
  }

  revalidateTag(CacheTags.HN_POSTS);
  revalidateTag(CacheTags.HN_PINNED);

  return Response.json(
    { message: "Valid Hashnode signature" },
    { status: 200 }
  );
}

import { CacheTags } from "@/common/cache";
import envConfig from "@/common/env-config";
import { TCMSContentType } from "@/types/cms/common";
import { verifyWebhookSignature } from "@hygraph/utils";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const SECRET = envConfig.CMS.REVALIDATE_SECRET;
  const headers = req.headers;
  const receivedSecret = headers.get("gcms-signature");

  if (!receivedSecret) {
    return Response.json({ message: "Missing CMS signature" }, { status: 400 });
  }

  const body = await req.json();

  const isValidRequest = verifyWebhookSignature({
    body,
    secret: SECRET,
    signature: receivedSecret,
  });

  if (!isValidRequest) {
    return Response.json({ message: "Invalid CMS signature" }, { status: 401 });
  }

  const type = body?.data?.__typename as TCMSContentType | null;

  if (!type) {
    return Response.json({ message: "Invalid type" }, { status: 400 });
  }

  try {
    switch (type) {
      case TCMSContentType.PAGE:
        revalidateTag(CacheTags.CMS_PAGES);
        revalidateTag(`${CacheTags.CMS_PAGES}-${body?.data.slug}`);
        break;
      case TCMSContentType.PRODUCT:
        revalidateTag(CacheTags.CMS_PRODUCTS);
        break;
      case TCMSContentType.PROFILE:
        revalidateTag(CacheTags.CMS_PROFILE);
        break;
      case TCMSContentType.STACK:
        revalidateTag(CacheTags.CMS_STACKS);
        break;
      case TCMSContentType.WORK:
        revalidateTag(CacheTags.CMS_WORKS);
        break;
      default:
        return Response.json({ message: "Invalid type" }, { status: 400 });
    }
  } catch (err) {
    return Response.json({ message: "Revalidation failed" }, { status: 500 });
  }

  return Response.json({ message: "Revalidation successful" });
}

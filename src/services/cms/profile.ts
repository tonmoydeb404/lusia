import { CacheTags } from "@/common/cache";
import envConfig from "@/common/env-config";
import { TCMSProfile } from "@/types/cms/db/profile";
import { cmsRequest } from "../common";
import { fetchProfileQuery } from "./profile.query";

type ProfileResponse = {
  profile: TCMSProfile;
};

export async function fetchProfile() {
  try {
    const data = await cmsRequest<ProfileResponse>(
      fetchProfileQuery,
      {
        id: envConfig.CMS_PROFILE_ID,
      },
      [CacheTags.CMS_PROFILE]
    );
    return data.profile;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

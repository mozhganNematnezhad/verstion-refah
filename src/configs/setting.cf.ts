import { linkConfig } from "./links.cf";
import { authConfig } from "./auth.cf";
import { panelConfig } from "./panel.cf";
import { storageTypeEnum } from "@/core/enums/storage-type.enum";

export const projectSetting = {
  auth: { ...authConfig },
  panel: { ...panelConfig },
  link: { ...linkConfig },
  storage: storageTypeEnum.cookies,
};

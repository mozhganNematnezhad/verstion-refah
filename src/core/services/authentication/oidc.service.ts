import { projectSetting } from "@/configs/setting.cf";
import {
  UserManagerSettings,
  UserManager,
  WebStorageStateStore,
} from "oidc-client-ts";

//UserManagerSettings
let config: UserManagerSettings = {
  authority: "",
  client_id: "",
  redirect_uri: "",
};

config = {
  // the URL of our identity server
  authority: projectSetting.auth.sso.sso_url,

  // this ID maps to the client ID in the identity client configuration
  client_id: projectSetting.auth.sso.client_id,

  // URL to redirect to after login
  redirect_uri: projectSetting.auth.sso.redirect_uri,

  // the scopes or resources we would like access to
  response_type: "code",
  scope: "openid profile api1 role offline_access",

  //save in localstorge when is in client
  userStore:
    typeof localStorage === "undefined"
      ? undefined
      : new WebStorageStateStore({ store: localStorage }),
};

//userManager
export const userManager = new UserManager(config);

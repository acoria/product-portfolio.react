import { error } from "./core/utils/error";

export const AppConfig = {
  IMPRINT_URL:
    process.env.REACT_APP_IMPRINT_URL ??
    error(`Error while getting imprint url from environment variables`),
  PRIVACY_POLICY_URL:
    process.env.REACT_APP_PRIVACY_POLICY_URL ??
    error(`Error while getting privacy policy url from environment variables`),
};

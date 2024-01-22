const generalTypes = {
  UPDATE_SUCCESS_NOTIFICATION: "UPDATE_SUCESS_NOTIFICATION",
  UPDATE_INFORMATION_NOTIFICATION: "UPDATE_INFORMATION_NOTIFICATION",
  CLEAR_NOTIFICATION: "CLEAR_NOTIFICATION",
  UPDATE_FAIL_NOTIFICATION: "UPDATE_FAIL_NOTIFICATION",
  UPDATE_LANG: "UPDATE_LANG",
  SET_COOKIE_POLICY: "SET_COOKIE_POLICY",
  POSITION_VERTICAL: "POSITION_VERTICAL",
  CHANGE_COOKIE_SETTINGS: "CHANGE_COOKIE_SETTINGS",
  DECLINE_ALL_COOKIES: "DECLINE_ALL_COOKIES",
  ACCEPT_ALL_COOKIES: "ACCEPT_ALL_COOKIES",
};
export interface Dial<T extends "number" | "text" | null> {
  dialType: T;
  open: boolean;
  title: string;
  min?: number | null;
  max?: number | null;
  type: string;
  setValue: T extends "number" ? number : string | number;
  onSetValue?: (value: T extends "number" ? number : string | number) => void;
  hasNegative?: boolean;
  inputType?: string;
}

export type CookieSettings = {
  functional: boolean;
  analytics: boolean;
  advertisement: boolean;
  uncategorized: boolean;
};

export interface General {
  lang: string;
  cookiePolicy: boolean;
  positionVertical: boolean;
  notificationMessage: string;
  notificationType: null | "success" | "fail";
  cookieSettings: CookieSettings;
}

export default generalTypes;

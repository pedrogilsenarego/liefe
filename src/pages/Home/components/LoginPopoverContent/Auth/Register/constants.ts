import { i18n } from "../../../../../../translations/i18n";

type Option = {
  value: string;
  label: string;
};

export const countryOptions: Option[] = [
  {
    value: "PT",
    label: i18n.t("pages.access.subpages.manage.admin", "Portugal"),
  },
  {
    value: "CH",
    label: i18n.t("pages.access.subpages.manage.user", "Switzerland"),
  },
];
export const defaultValues = {
  usernamenotname: undefined,
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
  phone: undefined,
  birthday: undefined,
  fullName: undefined,
  address1: undefined,
  address2: undefined,
  city: undefined,
  postalCode: undefined,
  country: countryOptions[0].value,
};

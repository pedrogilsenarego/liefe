import { z } from "zod";
import { i18n } from "../../../../../../translations/i18n";

export const CreateProductSchema = z.object({
  email: z
    .string()
    .email({
      message: i18n.t(
        "pages.access.subpages.login.validation.invalidEmail",
        "Invalid email address"
      ),
    })
    .min(1, {
      message: i18n.t(
        "pages.access.subpages.login.validation.emailRequired",
        "The email is required"
      ),
    }),
  password: z
    .string({
      required_error: i18n.t(
        "pages.access.subpages.login.validation.passwordRequired",
        "The password is required"
      ),
    })
    .min(
      3,
      i18n.t(
        "pages.access.subpages.login.validation.passwordShort",
        "The password is to short"
      )
    ),
});

export type CreateProductSchemaType = z.infer<typeof CreateProductSchema>;

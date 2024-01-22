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
});

export type CreateProductSchemaType = z.infer<typeof CreateProductSchema>;

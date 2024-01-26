import { Control, get, useController } from "react-hook-form";

type Props = {
  name: string;
  control?: Control<any, any>;
};

const useDateControlledInput = ({ name, control }: Props) => {
  const {
    field,
    formState: { isSubmitting, errors },
  } = useController({
    name,
    control,
  });

  const error = get(errors, name, "");
  const hasError = Boolean(error?.message);
  return { hasError, isSubmitting, errors, error };
};

export default useDateControlledInput;

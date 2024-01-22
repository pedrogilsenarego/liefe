import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../../../../redux/user/actions";
import { ROUTE_PATHS } from "../../../../../../routes/constants";

import { userServices } from "../../../../../../services/user.services";
import { CurrentUser, RecoverPassword } from "../../../../../../types/user";
import { defaultValues } from "./constants";
import { CreateProductSchema, CreateProductSchemaType } from "./validation";

const useRecoverPassword = () => {
  const navigate = useNavigate();

  const { reset, control, handleSubmit } = useForm<CreateProductSchemaType>({
    resolver: zodResolver(CreateProductSchema),
    defaultValues,
  });

  const { mutate: signInMutation, isLoading: isLogin } = useMutation(
    userServices.recoverPassword,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSuccess: (data: any) => {
        reset();
      },
    }
  );

  const onSubmit: SubmitHandler<CreateProductSchemaType> = async (
    formData: RecoverPassword
  ) => {
    signInMutation(formData.email);
  };
  return {
    handleSubmit,
    onSubmit,
    control,
    navigate,
    isLogin,
  };
};

export default useRecoverPassword;

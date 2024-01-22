import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../../../../redux/user/actions";
import { ROUTE_PATHS } from "../../../../../../routes/constants";

import { userServices } from "../../../../../../services/user.services";
import { CurrentUser, Login } from "../../../../../../types/user";
import { defaultValues } from "./constants";
import { CreateProductSchema, CreateProductSchemaType } from "./validation";

const useLogin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { reset, control, handleSubmit } = useForm<CreateProductSchemaType>({
    resolver: zodResolver(CreateProductSchema),
    defaultValues,
  });

  const { mutate: signInMutation, isLoading: isLogin } = useMutation(
    userServices.loginUser,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSuccess: (data: any) => {
        dispatch(setUser(data?.userData as CurrentUser));
        reset();
        navigate(ROUTE_PATHS.HOME);
      },
    }
  );

  const onSubmit: SubmitHandler<CreateProductSchemaType> = async (
    formData: Login
  ) => {
    signInMutation(formData);
  };
  return {
    handleSubmit,
    onSubmit,
    control,
    navigate,
    isLogin,
  };
};

export default useLogin;

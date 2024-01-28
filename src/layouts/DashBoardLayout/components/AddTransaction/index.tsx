import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Icons } from "../../../../components/Icons";
import ControlledFormInput from "../../../../components/Inputs/ControlledInput";
import ControlledSelect from "../../../../components/Inputs/ControlledSelect";
import DateInput from "../../../../components/Inputs/DateControlledInput";
import Popup from "../../../../components/Popup";
import AddButton from "../../../../components/Ui/Buttons/AddButton";
import Button from "../../../../components/Ui/Buttons/Button";
import { categories } from "../../../../constants/categories";
import { State } from "../../../../redux/types";
import { businessServices } from "../../../../services/business.services";
import { queryIdentifiers } from "../../../../services/constants";
import { expensesServices } from "../../../../services/expenses.services";
import { CurrentUser } from "../../../../types/user";
import Details from "./Details";
import formMapper from "./mapper";
import { AddExpenseSchema, AddExpenseSchemaType } from "./validation";

const AddTransaction = () => {
  const [open, setOpen] = useState(false);
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );
  const userId = currentUser?.docId || "";

  const defaultValues = {
    business: currentUser?.business?.[0]?.businessDocId || "",
    category: categories[0].value,
    amount: "0",
    dateTransaction: new Date(),
    note: "",
  };

  const { control, handleSubmit, watch } = useForm<AddExpenseSchemaType>({
    resolver: zodResolver(AddExpenseSchema),
    defaultValues,
    mode: "onChange",
  });

  const watchBusiness = watch("business");
  const businessId =
    currentUser?.business?.find(
      (business) => business.businessDocId === watchBusiness
    )?.businessDocId || "";
  const businessDocId = businessId || "";

  const queryKey = [queryIdentifiers.BUSINESS_DETAIL, businessId];
  const {
    data: businessData,
    isLoading,
    isError,
    error: businessError,
    refetch,
  } = useQuery(
    queryKey,
    () => businessServices.getBusiness({ businessDocId, userId }),
    {
      refetchOnWindowFocus: false,
      enabled: !!businessDocId || !!userId || !open,
    }
  );

  const { mutate: addExpense, isLoading: isAddingExpense } = useMutation(
    expensesServices.addNewExpense,
    {
      onError: (error: any) => {
        console.log("error", error);
      },
      onSuccess: () => {
        setOpen(false);
      },
    }
  );

  const onSubmit: SubmitHandler<AddExpenseSchemaType> = async (formData) => {
    if (!userId || !businessData?.docId) return;
    const mappedData = formMapper(
      formData,
      userId,
      businessData?.docId,
      businessData?.settings
    );

    addExpense({ data: mappedData });
  };
  if (!currentUser?.business) return null;
  return (
    <>
      <AddButton
        icon={<Icons.Money color="red" size={"35px"} />}
        onClick={() => setOpen(true)}
      />
      <Popup openPopup={open} onClose={() => setOpen(false)}>
        <>
          <div>
            <form id="add expense" onSubmit={handleSubmit(onSubmit)}>
              <DateInput control={control} name="dateTransaction" />
              <ControlledSelect
                defaultValue={defaultValues.business}
                control={control}
                name="business"
                options={currentUser?.business.map((business) => ({
                  value: business.businessDocId,
                  label: business.businessName,
                }))}
              />
              <ControlledSelect
                defaultValue={defaultValues.category}
                control={control}
                name="category"
                options={categories}
              />
              <ControlledFormInput
                inputPlaceholder="0€"
                control={control}
                name="amount"
              />
              <ControlledFormInput
                name="note"
                inputPlaceholder="Note"
                control={control}
              />
              <Details control={control} businessData={businessData} />
              <Button fullWidth darkenColors type="submit">
                Add expense
              </Button>
            </form>
          </div>
        </>
      </Popup>
    </>
  );
};

export default AddTransaction;

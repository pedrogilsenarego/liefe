import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ControlledSelect from "../../../../components/Inputs/ControlledSelect";
import Popup from "../../../../components/Popup";
import AddButton from "../../../../components/Ui/Buttons/AddButton";
import Button from "../../../../components/Ui/Buttons/Button";
import { categories } from "../../../../constants/categories";
import { State } from "../../../../redux/types";
import { CurrentUser } from "../../../../types/user";
import { AddExpenseSchema, AddExpenseSchemaType } from "./validation";

const AddTransaction = () => {
  const [open, setOpen] = useState(false);
  const currentUser = useSelector<State, CurrentUser | null>(
    (state) => state.user.currentUser
  );

  const defaultValues = {
    business: currentUser?.business?.[0]?.businessDocId || "",
    category: categories[0].value,
  };
  const { control, handleSubmit } = useForm<AddExpenseSchemaType>({
    resolver: zodResolver(AddExpenseSchema),
    defaultValues,
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<AddExpenseSchemaType> = async (formData) => {
    console.log(formData);

    //   const mappedData = formMapper(formData);
    //   editSettingsBusiness({
    //     businessDocId: businessData?.docId,
    //     userId: businessData?.userId,
    //     settings: mappedData,
    //   });
  };
  if (!currentUser?.business) return null;
  return (
    <>
      <AddButton iconStyle={{ color: "green" }} onClick={() => setOpen(true)} />
      <Popup openPopup={open} onClose={() => setOpen(false)}>
        <>
          <div>
            <form id="add expense" onSubmit={handleSubmit(onSubmit)}>
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

import { useForm } from "react-hook-form";
import { Stack } from "@mui/material";

import { useGlobalDispatcher } from "../../../hooks";
import { login } from "../../../store";
import { AuthenticationLayout } from "../layouts";
import {
  Button,
  ButtonTypes,
  Input,
  InputTypes,
  InputValidations,
  Spacing,
} from "../../../ui";

const initialInputValue = Object.freeze({
  fullName: "",
});

export const LoginPage = () => {
  const { dispatch } = useGlobalDispatcher();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: initialInputValue,
  });

  const onLogin = (data) => {
    dispatch(login(data));
    reset();
  };

  return (
    <AuthenticationLayout title="Login">
      <Stack direction="column" spacing={Spacing.MD}>
        <Input
          type={InputTypes.TEXT}
          name="fullName"
          label="Full name"
          placeholder="Example: John Doe"
          helperText="Introduce your full name"
          control={control}
          validations={{
            ...InputValidations.REQUIRED("Full name"),
            ...InputValidations.MAX_LENGTH("Full name", 30),
          }}
          fullWidth
        />
        <Button
          type={ButtonTypes.BUTTON}
          label="Login"
          fullWidth
          onClick={handleSubmit(onLogin)}
        />
      </Stack>
    </AuthenticationLayout>
  );
};

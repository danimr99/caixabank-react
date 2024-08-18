import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formValues, setFormValues] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({});
  const isFormValid = useMemo(
    () => Object.keys(formErrors).length === 0,
    [formErrors]
  );

  useEffect(() => {
    console.log("current errors", formErrors);
  }, [formErrors]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((previousState) => ({
      ...previousState,
      [name]: value,
    }));
    validateFormField(name);
  };

  const handleSelectionChange = (event) => {
    const { name, value } = event.target;

    setFormValues((previousState) => ({
      ...previousState,
      [name]: value,
    }));
    validateFormField(name);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setFormValues((previousState) => ({
      ...previousState,
      [name]: checked,
    }));
    validateFormField(name);
  };

  const resetForm = () => {
    setFormValues(initialForm);
    setFormErrors({});
  };

  const validateFormField = (formField) => {
    const failedValidations = {};
    const fieldValidations = formValidations[formField];

    for (const validation of fieldValidations) {
      const { validationFn, errorMessage } = validation;
      const isValid = validationFn(formValues[formField]);

      if (!isValid) {
        failedValidations[formField] = errorMessage;
        break;
      }
    }

    setFormErrors((previousState) => {
      const newEntry =
        Object.entries(failedValidations).length > 0
          ? failedValidations
          : { [formField]: "" };

      return { ...previousState, ...newEntry };
    });
  };

  return {
    formValues,
    formErrors,
    isFormValid,
    handleInputChange,
    handleSelectionChange,
    handleCheckboxChange,
    resetForm,
  };
};

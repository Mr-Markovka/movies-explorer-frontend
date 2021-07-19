import React, { useCallback } from 'react';

export function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = (evt) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validatioonMessage });
    setIsValid(input.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsVaild = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsVaild);
    },
    [setValues, setErrors, setIsValid]
  );
  return { values, handleChange, resetForm, errors, isValid };
}

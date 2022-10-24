import { useState } from 'react';

const useInput = (validation) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validation(value);
  const hasError = !isValid && isTouched;

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const blurInputHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    changeHandler,
    blurInputHandler,
    reset,
  };
};

export default useInput;

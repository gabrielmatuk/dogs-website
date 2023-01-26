import React from "react";
import {
  MSG_INVALID_EMAIL,
  MSG_WEAKER_PSWD,
  REGEX_EMAIL,
  REGEX_PSWD,
} from "../constants";

const types = {
  email: {
    regex: REGEX_EMAIL,
    message: MSG_INVALID_EMAIL,
  },
  password: {
    regex: REGEX_PSWD,
    message: MSG_WEAKER_PSWD,
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  const validate = (value) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;

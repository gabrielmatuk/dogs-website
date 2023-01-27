export const REGEX_EMAIL =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const MSG_INVALID_EMAIL = "Preencha um E-mail válido";

export const REGEX_PSWD =
  /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,20}$/g;
export const MSG_WEAKER_PSWD =
  "Senha fraca. Informe uma senha com pelo menos uma letra maiúscula, um número e um caractere especial. ";

export const REGEX_NUMBER = /^\d+$/;
export const MSG_ONLY_NUMBER = "Utilize números apenas.";
//URLS:

export const API_URL = "https://dogsapi.origamid.dev/json";
export const TOKEN_POST = (body) => {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const USER_GET = (token) => {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
};

export const TOKEN_POST_VALIDATE = (token) => {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
};

export const USER_POST = (body) => {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const PHOTO_POST = (formData, token) => {
  return {
    url: API_URL + "/api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
    body: formData,
  };
};

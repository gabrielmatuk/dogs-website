import React from "react";
import { Link } from "react-router-dom";
import { TOKEN_POST, USER_GET } from "../../constants";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser();
    }
  }, []);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const res = await fetch(url, options);
    const json = await res.json();
    console.log(json);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const res = await fetch(url, options);
      const json = await res.json();
      window.localStorage.setItem("token", json.token);
      getUser(json.token);
      console.log(json);
    }
  };

  return (
    <section>
      LoginForm
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;

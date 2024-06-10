import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/app", { replace: true, state: "test" });
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={submitHandler}>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;

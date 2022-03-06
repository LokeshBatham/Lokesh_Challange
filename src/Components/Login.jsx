import React from "react";

const Login = () => {
  return (
    <div className="container">
      <form className="login">
        <label htmlFor="email">
          <p>Email</p>
          <input type="email" id="email" />
        </label>

        <label htmlFor="passward">
          <p>Passward</p>
          <input type="passward" id="passward" />
        </label>

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

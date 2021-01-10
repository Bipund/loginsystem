import * as React from "react";

export default function Login() {
  const [email, set_email] = React.useState("");
  const [password, set_password] = React.useState("");

  const [err, set_err] = React.useState("");

  const login = () => {
    if (email == "") {
      set_err("please enter username");
    }else{
        if(password==""){
            set_err("please enter password")
        }else{
            if(email.trim()=="demo"&& password.trim()=="demo"){
                window.location.href="/home"
            }else{
                set_err("User not found.")
            }
        }
    }
  };

  return (
    <div className="container">
      <h1 className="form-heading">login Form</h1>
      <div className="login-form">
        <div className="main-div">
          <div className="panel">
            <h2>User Login</h2>
            <p>Please enter your email and password</p>
          </div>
          <form id="Login" onSubmit={(e)=>{e.preventDefault(); login()}}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="inputEmail"
                onChange={(e) => {
                  set_email(e.target.value);
                }}
                placeholder="Email Address"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                onChange={(e) => {
                  set_password(e.target.value);
                }}
                placeholder="Password"
              />
            </div>
            <div className="forgot">
              <a href="reset.html">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn bg-info text-light btn-primary"
            >
              Login
            </button>
            <span className="text-danger">{err}</span>
            <h6>
              create a free account <a href="/signup">signup</a>
            </h6>
          </form>
        </div>
        <p className="botto-text"> Designed by Sunil Rajput</p>
      </div>
    </div>
  );
}

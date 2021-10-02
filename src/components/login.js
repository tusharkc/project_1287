import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSetState } from "react-use";
import { AuthContext } from "../contexts/auth.context";
import { useMutation } from "react-query";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";
export default function Login() {
  const [localState, setLocalState] = useSetState(null);
  const history = useHistory();
  const { setState, setToken, setRole } = useContext(AuthContext);
  const { mutate, isLoading } = useMutation((form) =>
    axios.post(
      "https://biltyapi.mobileprogramming.net/api/v1/auth/login",
      form
    )
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ localState });
    await mutate(
      { username: localState.email, password: localState.password },
      {
        onSuccess: (data) => {
          console.log({ data });
          if(data.data.code ==='AUTHENTICATION_SUCCESSFULL'){
            setState(data.data);
            setToken(data?.data?.data?.token);
            setRole(data?.data?.data?.userDetails[0].role_name)
            history.push("/dashboard");
          } else if(data.data.code === 'AUTHENTICATION_ERROR'){
            toast.error(data.data.data.message);
          }
        },
      }
    );
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "checked") {
      setLocalState({ [name]: e.target.checked });
    } else {
      setLocalState({ [name]: value });
    }
  };

  return (
    <div className="wrapper d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="centerbox align-items-center ">
            <div className="row">
              <div className="col-md-6 pr-5 pl-0 text-center">
                <img src="images/graphic_login.png" alt="logo" />
                <h1 className="text-uppercase">
                  We bring to you
                  <br />
                  best in class services!
                </h1>
                <p>
                  We helps you to manage your work{" "}
                  <span className="text-primary">remotely!</span>
                </p>
                <Link  to={{pathname : '/signUp'}} className="btn btn-secondary px-4 p-2 text-uppercase">New User? Register Here</Link>
              </div>
              <div className="col-md-6 colformbox pl-5 loginform">
                <h1 className="text-uppercase text-primary">Login</h1>
                <p className="text-uppercase font-weight-bold">
                  Please enter your details
                </p>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <div className="txtfield">
                        <label htmlFor="exampleInputEmail1">
                          Enter Username
                        </label>
                        <input
                          type="text"
                          name="email"
                          onChange={handleChange}
                          className="form-control pr-2"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          required
                        />
                        <span className="txticon">
                          <img src="images/icon_email.png" alt="icon email" />{" "}
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="txtfield">
                        <label htmlFor="exampleInputPassword1">
                          Enter Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          className="form-control pr-2"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          required
                        />
                        <span className="txticon">
                          <img src="images/icon_pass.png" alt="icon pass" />
                        </span>
                      </div>
                    </div>
                    <div className="form-check d-flex">
                      <span>
                        <input
                          type="checkbox"
                          name="checked"
                          onChange={handleChange}
                          className="form-check-input pr-2"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          Stay Signed In
                        </label>
                      </span>
                      <span className="ml-auto mr-0">
                        <Link to="/forgot-password" className="ml-auto mr-0">
                          forgotpassword
                        </Link>
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary text-uppercase px-4 p-2  my-4 btnlogin"
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <span className="mr-3">Login</span>
                        {isLoading && (
                          <Loader
                            type="TailSpin"
                            color="#00BFFF"
                            height={20}
                            width={20}
                            timeout={3000} //3 secs
                          />
                        )}
                      </div>
                    </button>
                    <p>Or log in using social media</p>
                    <button
                      className="social btn-google py-2 mr-2"
                      type="submit"
                    >
                      <i className="fab fa-google">
                        <img src="images/icon_google.png" alt="icong google" />
                      </i>
                    </button>
                    <button className="social btn-facebook py-2" type="submit">
                      <i className="fab fa-facebook-f">
                        <img src="images/icon_fb.png" alt="icon fb" />
                      </i>{" "}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

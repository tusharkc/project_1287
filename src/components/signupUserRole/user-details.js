import React, { useRef } from "react";
import { useForm } from "react-hook-form";

export default function UserDetails(props) {

  const { register, getValues, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    //console.log(data)
    props.handleChange(data)
    props.handleNext(2)
  }
  return (<div className="wrapper d-flex align-items-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="centerbox align-items-center ">
          <div className="row justify-content-center">
            <h1 className="text-uppercase text-primary ">Signup as {props.user}</h1>
          </div>
          <div className="row justify-content-center">
            <div className="steps my-4">

              {props.user === 'Trader' ?
                <ul className="step1 d-flex justify-content-between mb-4">
                  <li></li>
                  <li ></li>
                  <li></li>
                  <li></li>
                </ul>
                : <ul className="step1 d-flex justify-content-between mb-4">
                  <li></li>
                  <li ></li>
                  <li></li>
                </ul>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pr-5 pl-0 text-center">
              <img alt="" src="images/graphic_signup.png" />
              <p className="mt-5">Or Sign Up</p>
              <button className="social btn-google py-2 mr-2" type="submit"><i className="fab fa-google"><img alt="" src="images/icon_google.png" /></i></button>
              <button className="social btn-facebook py-2" type="submit"><i className="fab fa-facebook-f"><img alt="" src="images/icon_fb.png" /></i> </button>
            </div>
            <div className="col-md-6 colformbox pl-5 loginform">
              <h2 className="text-uppercase font-weight-bold">Enter your Details</h2>
              <div className="">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group d-flex">
                    <div className="txtfield col mr-1">
                      <label htmlFor="exampleInputEmail1">Enter First Name</label>
                      <input type="text" className="form-control pr-2" placeholder="First Name"  {...register("firstName", { required: true })} />
                      {errors.firstName?.type === 'required' && (<p style={{ color: 'red', margin: '5px 0 0' }}>"First name is required"</p>)}
                    </div>
                    <div className="txtfield col ml-1">
                      <label htmlFor="exampleInputEmail1">Enter Last Name</label>
                      <input type="text" className="form-control pr-2" placeholder="Last Name"  {...register("lastName", { required: true })} />
                      {errors.lastName?.type === 'required' && (<p style={{ color: 'red', margin: '5px 0 0' }}>Last name is required</p>)}

                    </div>
                  </div>
                  <div className="form-group">
                    <div className="txtfield">
                      <label htmlFor="exampleInputEmail1">Mobile Number/ Eamil ID</label>
                      <input type="text" className="form-control pr-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" {...register("emailId", { required: true })} />
                      {errors.emailId?.type === 'required' && (<p style={{ color: 'red', margin: '5px 0 0' }}>Email Id is required</p>)}
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="txtfield">
                      <label htmlFor="password">Enter Password</label>
                      {/* <input type="password" className="form-control pr-2" id="password" placeholder="Password"  */}
                      <input className="form-control pr-2" id="password" placeholder="Password"
                        name="password"
                        type="password"
                        {...register(
                          "password", { required: true })}
                      />
                      {errors.password && (
                        <p style={{ color: 'red', margin: '5px 0 0' }}> Password is required!</p>
                      )}

                      {/* {...register("password", { required: true })} /> */}
                      {/* {errors.password?.type === 'required' && "Password is required"} */}
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="txtfield">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      {/* <input type="password" className="form-control pr-2" id="confirmPassword" placeholder="Password" {...register("confirmPassword", { required: true })}  /> */}
                      {/* {errors.confirmPassword?.type === 'required' && "Confirm Password is required"} */}
                      <input type="password" className="form-control pr-2" id="confirmPassword" placeholder="Password"
                        {...register("passwordConfirmation", {
                          required: true, validate: {
                            matchesPreviousPassword: (value) => {
                              const { password } = getValues();
                              return password === value || 'Passwords should match!';
                            },
                          },
                        })}
                      />
                      {errors.passwordConfirmation && (
                        <p style={{ color: 'red', margin: '5px 0 0' }}>
                          Passwords should match!
                        </p>
                      )}
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary text-uppercase px-4 p-2  my-4 btnlogin">Create</button>
                </form>
               
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>)


}
import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function AccountType(props) {

  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log('log', props.typeOfUser)
  const onSubmit = data => {
    props.handleChange(data)
    props.handleNext(3)
  }
  return (
    <div className="wrapper d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="centerbox align-items-center ">
            <div className="row justify-content-center"><h1 className="text-uppercase text-primary ">Signup as {props.user}</h1></div>
            <div className="row justify-content-center">
              <div className="steps my-4">
                <ul className="step2 d-flex justify-content-between mb-4">
                  <li></li>
                  <li ></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 pr-5 pl-0 text-center">
                <img alt="" src="images/graphic_signup.png" />
                <p className="mt-5">Or Sign Up</p>
                <button className="social btn-google py-2 mr-2" type="submit"><i className="fab fa-google"><img alt="" src="images/icon_google.png" /></i></button>
                <button className="social btn-facebook py-2" type="submit"><i className="fab fa-facebook-f"><img alt="" src="images/icon_fb.png" /></i> </button>
              </div>
              <div className="col-md-6 colformbox pl-5 loginform">
                <h2 className="text-uppercase font-weight-bold">Select Account type</h2>
                <div className="">
                  <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <div className="txtfield userrole align-items-center">
                        <span className="iconrole justify-content-center align-items-center" ><img alt="" src="images/iconTrade.png" /> </span>
                        <label className="font-weight-bold m-0 flex-grow-1" htmlFor="accountTypeBusiness" >Business Account</label>
                        <input type="radio" id="accountTypeBusiness" name="accountType" value="businessAcc"  {...register("accountType", { required: true })} />
                        <span className="icontick d-flex mr-0 ml-auto"><img alt="" src="images/icon_tick.png" /></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="txtfield userrole align-items-center">
                        <span className="iconrole justify-content-center align-items-center"><img alt="" src="images/iconTrans.png" /> </span>
                        <label className="font-weight-bold m-0" htmlFor="accountTypeIndividual" >Individual Account</label>
                        <input type="radio" id="accountTypeIndividual" name="accountType" value="individualAcc"  {...register("accountType", { required: true })} />
                        <span className="icontick d-flex mr-0 ml-auto"><img alt="" src="images/icon_tick.png" /></span>
                      </div>
                    </div>

                    {errors.userType?.type === 'required' && <p style={{ color: 'red', margin: '5px 0 0' }}>Please select an Account Type</p>}
                    <button type="submit" className="btn btn-primary text-uppercase px-4 p-2  my-4 btnlogin">Next</button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}
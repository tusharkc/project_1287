import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
export default function SignUpUserRole(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        props.handleChange(data);
        props.handleNext(1);
    }
    return (<div className="wrapper d-flex align-items-center">
        <div className="container">
            <div className="row justify-content-center">
                <div className="centerbox align-items-center ">
                    <div className="row">
                        <div className="col-md-6 pr-5 pl-0 text-center">
                            <img alt="" src="images/graphic_login.png" />
                            <h1 className="text-uppercase">We bring to you<br />best in class services!</h1>
                            <p>We helps you to manage your work <span className="text-primary">remotely!</span></p>
                            <Link className="btn btn-secondary px-4 p-2 text-uppercase" to={{ pathname: "/" }} >Already Registred? Login</Link>
                            {/* <a href="index.html" className="btn btn-secondary px-4 p-2 text-uppercase"  >Already Registred? Login</a> */}
                        </div>
                        <div className="col-md-6 colformbox pl-5 loginform">
                            <h1 className="text-uppercase text-primary">Sign Up</h1>
                            <p className="text-uppercase font-weight-bold">Register as</p>
                            <div className="">
                                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <div className="txtfield userrole align-items-center">
                                            <span className="iconrole justify-content-center align-items-center" ><img alt="" src="images/iconTrade.png" /> </span>
                                            <label className="font-weight-bold m-0 flex-grow-1" htmlFor="usertypeTrade" >Trader</label>
                                            <input type="radio" id="usertypeTrade" name="userType" value="Trader"  {...register("userType", { required: true })} />
                                            <span className="icontick d-flex mr-0 ml-auto"><img alt="" src="images/icon_tick.png" /></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="txtfield userrole align-items-center">
                                            <span className="iconrole justify-content-center align-items-center"><img alt="" src="images/iconTrans.png" /> </span>
                                            <label className="font-weight-bold m-0" htmlFor="usertypeTrans" >Transporter</label>
                                            <input type="radio" id="usertypeTrans" name="userType" value="Transporter"  {...register("userType", { required: true })} />
                                            <span className="icontick d-flex mr-0 ml-auto"><img alt="" src="images/icon_tick.png" /></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="txtfield userrole align-items-center">
                                            <span className="iconrole justify-content-center align-items-center"><img alt="" src="images/iconSupServ.png" /> </span>
                                            <label className="font-weight-bold m-0" htmlFor="usertypeSS" >Support Service</label>
                                            <input type="radio" id="usertypeSS" name="userType" value="Support Service" {...register("userType", { required: true })} />
                                            <span className="icontick d-flex mr-0 ml-auto"><img alt="" src="images/icon_tick.png" /></span>
                                        </div>
                                    </div>
                                    {errors.userType?.type === 'required' && <p style={{ color: 'red', margin: '5px 0 0' }}>Please select a User Role</p>}
                                    <button type="submit" className="btn btn-primary text-uppercase px-4 p-2  my-4 btnlogin">Create</button>
                                    <p>By proceeding, you agree to our <Link to="/termsAndConditions" className="ml-auto mr-0">Terms &amp; Conditions</Link> &amp; <Link to="/privacyPolicy" className="ml-auto mr-0">Privacy Policy.</Link></p>
                                    <p>Or Sign Up</p>
                                    <button className="social btn-google py-2 mr-2" type="submit"><i className="fab fa-google"><img alt="" src="images/icon_google.png" /></i></button>
                                    <button className="social btn-facebook py-2" type="submit"><i className="fab fa-facebook-f"><img alt="" src="images/icon_fb.png" /></i> </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
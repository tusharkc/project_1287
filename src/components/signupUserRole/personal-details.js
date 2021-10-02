import React from "react";
import { useForm } from "react-hook-form";

export default function PersonalDetails(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        props.handleChange(data);
        props.handleNext(4);
    }
    return (
        <div className="wrapper d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="centerbox align-items-center ">
                        <div className="row justify-content-center"><h1 className="text-uppercase text-primary ">Signup as {props.user}</h1></div>
                        <div className="row justify-content-center">
                            <div className="steps my-4">
                                <ul className="step3 d-flex justify-content-between mb-4">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
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
                                <h2 className="text-uppercase font-weight-bold">Personal Information</h2>
                                <div className="">
                                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <div className="txtfield">
                                                <label htmlFor="fullName">Full Name</label>
                                                <input type="text" className="form-control pr-2" id="fullName" placeholder="johnsmith" {...register("fullName", { required: true })} />
                                                {errors.companyName?.type === 'required' && <p style={{ color: 'red', margin: '5px 0 0' }}>Full Name is required</p>}
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="txtfield">
                                                <label htmlFor="Email1">Email Address</label>
                                                <input type="email" className="form-control pr-2" id="Email1" aria-describedby="emailHelp" placeholder="Enter email" {...register("emailAddress", { required: true })} />
                                                {errors.companyEmailId?.type === 'required' && <p style={{ color: 'red', margin: '5px 0 0' }}>Email ID is required</p>}
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="txtfield">
                                                <label htmlFor="mobNumb">Mobile Number</label>
                                                <input type="number" className="form-control pr-2" id="mobNumb" placeholder="Enter number" {...register("mobileNumb", { required: true, maxLength: 10  })} />
                                                {errors.contactNumOfAuthPerson?.type === 'required' && <p style={{ color: 'red', margin: '5px 0 0' }}>Mobile number is required</p>}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="txtfield">
                                                <label htmlFor="PanNum">PAN Number</label>
                                                <input type="file" className="form-control pr-2" id="PanNum"  {...register("PANNumber", { required: true })} />
                                                {errors.GSTNNumber?.type === 'required' && <p style={{ color: 'red', margin: '5px 0 0' }}>PAN Number is required</p>}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="txtfield">
                                                <label htmlFor="aadharCard">Aadhar Card Number</label>
                                                <input type="file" className="form-control pr-2" id="aadharCard" {...register("aadharCard", { required: true })} />
                                                {errors.pancard?.type === 'required' && <p style={{ color: 'red', margin: '5px 0 0' }}>Aadhar Card is required</p>}
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary text-uppercase px-4 p-2  my-2 btnlogin">Next</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
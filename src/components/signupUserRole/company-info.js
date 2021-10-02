import React from "react";
import { useForm } from "react-hook-form";

export default function CompanyInfo(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    props.handleChange(data)
    props.handleNext(4)
  }
  return (
    <div className="wrapper d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="centerbox align-items-center ">
            <div className="row justify-content-center"><h1 className="text-uppercase text-primary ">Signup as {props.user}</h1></div>
            <div className="row justify-content-center">
              <div className="steps my-4">
                {props.user === 'Trader' ?
                  <ul className="step3 d-flex justify-content-between mb-4">
                    <li></li>
                    <li ></li>
                    <li></li>
                    <li></li>
                  </ul>
                  : <ul className="step2 d-flex justify-content-between mb-4">
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
                <h2 className="text-uppercase font-weight-bold">Company Information</h2>
                <div className="">
                  <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <div className="txtfield">
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" className="form-control pr-2" id="companyName" placeholder="johnsmith" {...register("companyName", { required: true })} />
                        {errors.companyName?.type === 'required' && <p style={{ color: 'red', margin: '5px 0 0' }}>Company Name name is required</p>}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="txtfield">
                        <label htmlFor="landline">Landine Number</label>
                        <input type="number" className="form-control pr-2" id="landline" placeholder="Enter number" {...register("landline", { required: true, minLength:10, maxLength: 10 })} />
                        {errors.landline?.type === 'required' && <p style={{ color: 'red', margin: '5px 0 0' }}>Landine Number is required</p>}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="txtfield">
                        <label htmlFor="exampleInputEmail1">Company Email ID</label>
                        <input type="email" className="form-control pr-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" {...register("companyEmailId", { required: true })} />
                        {errors.companyEmailId?.type === 'required' && <p style={{ color: 'red', margin: '5px 0 0' }}>Company Email ID is required</p>}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="txtfield">
                        <label htmlFor="landline">Name of Authorised Person</label>
                        <input type="text" className="form-control pr-2" id="authPerson" placeholder="John Doe" {...register("nameOfAuthPerson", { required: true })} />
                        {errors.companyEmailId?.type === 'required' && <p style={{ color: 'red', margin: '5px 0 0' }}>Name of Authorised Person is required</p>}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="txtfield">
                        <label htmlFor="landline">Contact Number of Authorised Person</label>
                        <input type="number" className="form-control pr-2" id="landline" placeholder="Enter number" {...register("contactNumOfAuthPerson", { required: true, minLength:10, maxLength: 10  })} />
                        {errors.contactNumOfAuthPerson?.type === 'required' && <p style={{ color: 'red', margin: '5px 0 0' }}>Contact Number of Authorised Person is required</p>}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="txtfield">
                        <label htmlFor="GSTN">GSTN Number</label>
                        <input type="file" className="form-control pr-2" id="GSTN"  {...register("GSTNNumber", { required: true })} />
                        {errors.GSTNNumber?.type === 'required' && <p style={{ color: 'red', margin: '5px 0 0' }}>GSTN Number is required</p>}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="txtfield">
                        <label htmlFor="pancard">Pancard</label>
                        <input type="file" className="form-control pr-2" id="pancard" {...register("pancard", { required: true })} />
                        {errors.pancard?.type === 'required' && <p style={{ color: 'red', margin: '5px 0 0' }}>Pancard is required</p>}
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
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Action from "../../actions";

export default function AddressInfo(props) {
  const [state, setState] = useState([])
  const [city, setCity] = useState([])
  const [pincodeState, setPincodeState] = useState('')
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  console.log(props);

  const onSubmit = data => {
    if (pincodeState === data.state) {
      // props.handleChange(data);
      props.userRegister();
    } else {
      setError("pincode", {
        type: "match",
        message: "Pincode is not valid for state",
      });
    }
  }

  const stateChange = (e) => {
    let stateCode = e.target[e.target.selectedIndex].getAttribute('data-stid')
    Action.cityByState(stateCode).then(res => {
      if (res.data) {
        setCity(res.data)
      }
    }).catch((err) => {
      console.log('someting went wrong')

    })
  }


  const pinVerify = (e) => {
    //pinCodeVerify

    Action.pinCodeVerify(e.target.value).then(res => {
      if (res.data) {
        if (res.data[0].PostOffice !== null) {
          setPincodeState(res.data[0].PostOffice[0].State)
        } else {
          setPincodeState('')
        }
      }
    }).catch((err) => {
      console.log('someting went wrong')
    })
  }
  useEffect(() => {
    Action.stateByCounry().then(res => {
      if (res.data) {
        setState(res.data)
      }
    }).catch((err) => {
      console.log('someting went wrong')
    })
  }, []);
  return (<div className="wrapper d-flex align-items-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="centerbox align-items-center ">
          <div className="row justify-content-center"><h1 className="text-uppercase text-primary ">Signup as {props.user}</h1></div>
          <div className="row justify-content-center">
            <div className="steps my-4">
              {props.user === 'Trader' ?
                <ul className="step4 d-flex justify-content-between mb-4">
                  <li></li>
                  <li ></li>
                  <li></li>
                  <li></li>
                </ul>
                : <ul className="step3 d-flex justify-content-between mb-4">
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
              <h2 className="text-uppercase font-weight-bold">Address Info</h2>
              <div className="">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <div className="txtfield">
                      <label htmlFor="addLocation">Add Location</label>
                      <input type="text" className="form-control pr-2" id="addLocation" placeholder="Add here.."  {...register("addLocation", { required: true })} />
                      {errors.addLocation?.type === 'required' && "addLocation is required"}
                    </div>
                  </div>
                  <div className="form-group d-flex">
                    <div className="txtfield col mr-2">
                      <label htmlFor="state">State</label>
                      <select name="state" className="form-control" id="state" {...register("state", { required: true })} onChange={stateChange} >
                        <option value="" key="state">Select state</option>
                        {state.length > 0 && state.map(list => <option value={list.name} data-stid={list.iso2} key={list.id}>{list.name}</option>)}
                      </select>
                    </div>
                    <div className="txtfield col ml-2">
                      <label htmlFor="city">City</label>
                      <select className="form-control" id="city"  {...register("city", { required: true })} >
                        <option value="" key="city">Select city</option>
                        {/* //{city.length > 0 ? <option value="" key="city">select city</option> : ""} */}
                        {city.length > 0 && city.map((list, index) => <option value={list.name} key={list.id}>{list.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-group d-flex">
                    <div className="txtfield col mr-2">
                      <label htmlFor="pincode">Pincode</label>
                      <input type="text" className="form-control pr-2" placeholder="Enter here" id="pincode"  {...register("pincode", { required: true })} onKeyUp={pinVerify} />
                      {errors.pincode?.type === 'required' && "Pincode is required"}
                      {errors.pincode?.type === 'match' && "Pincode is not valid for state"}
                    </div>

                    <div className="txtfield col ml-2">
                      <label htmlFor="landmark">Landmark</label>
                      <input type="text" className="form-control pr-2" id="landmark" placeholder="landmark"  {...register("landmark", { required: true })} />
                      {errors.landmark?.type === 'required' && "landmark is required"}
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="txtfield">
                      <label htmlFor="about">Write about company</label>
                      <textarea className="form-control pr-2" id="about" placeholder="About company"></textarea>
                    </div>
                  </div>
                  <button className="btn btn-primary text-uppercase px-4 p-2  my-2 btnlogin">Submit</button>
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
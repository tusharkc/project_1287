import React, { useState, useEffect } from "react";

import SignUpUserRole from './signup-user-role'
import UserDetails from "./user-details";
import CompanyInfo from "./company-info";
import AddressInfo from "./address-info";
import AccountType from "./account-type";
import PersonalDetails from "./personal-details";
import Action from "../../actions";


export default function SignUp(props) {

  /*All State Define between this block */

  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(0);
  //const [role, setRole] = useState(0);

  /***************************** */

  // Give the current Date
  const currentDate = () => {

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = yyyy + '-' + dd + '-' + mm;

    return today;
  }
  // Set the user type for Registration form
  // const handleUseRole = (signUpAs) => {
  //   setRole(signUpAs);
  // }
  // Set the step number for Registration form
  const handleNext = (stepNumber) => {
    console.log(stepNumber)
    console.log(formData)

    setStep(stepNumber);
  }
  // Get all values from the fileds   
  const handleChange = (newData) => {
    let data = formData;
    Object.assign(data, newData);
    setFormData(data);
  };

  //User Register API call
  const userRegister = () => {
    console.log(formData)
    let payLoad = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      user_type: formData.userType,
      userid: formData.emailId,
      password: formData.confirmPassword,
      registered_on: currentDate(),
      device_token: "11009988991",
      support_service_category: "Hotels",
      support_service_name: "Hotels"
    }
    Action.userRegisterAction(payLoad).then(res => {
      console.log(res.data)
      alert('user Register')
    }).catch((err) => {
      console.log('someting went wrong')
    })
  }
  useEffect(() => {
  });

  return (

    <div>
      {step === 0 ?
        <SignUpUserRole
          handleNext={handleNext}
          handleChange={handleChange}
        />
        : ""}
      {step === 1 ?
        <UserDetails
          user={formData.userType}
          handleNext={handleNext}
          handleChange={handleChange}
        />
        : ""}
      {(formData.userType === 'Trader' && step === 2) ?
        <AccountType
          user={formData.userType}
          handleNext={handleNext}
          handleChange={handleChange}
        />
        : ""}
      {formData.userType === 'Trader' && formData.accountType === 'businessAcc' && step === 3 ?
        <CompanyInfo
          user={formData.userType}
          handleNext={handleNext}
          handleChange={handleChange}
          userRegister={userRegister}
        />
        : ""}
      {formData.userType === 'Trader' && formData.accountType === 'individualAcc' && step === 3 ?
        <PersonalDetails
          user={formData.userType}
          handleNext={handleNext}
          handleChange={handleChange}
          userRegister={userRegister}
        />
        : ""}
      {formData.userType === 'Trader' && step === 4 ?
        <AddressInfo
          user={formData.userType}
          handleNext={handleNext}
          handleChange={handleChange}
          userRegister={userRegister}
        />
        : ""}

      {(formData.userType === 'Transporter' || formData.userType === 'Support Service') && step === 2 ?
        <CompanyInfo
          user={formData.userType}
          handleNext={handleNext}
          handleChange={handleChange}
          userRegister={userRegister}
        />
        : ""}

      {(formData.userType === 'Transporter' || formData.userType === 'Support Service') && step === 4 ?
        <AddressInfo
          user={formData.userType}
          handleNext={handleNext}
          handleChange={handleChange}
          userRegister={userRegister}
        />
        : ""}
    </div>
  );
}
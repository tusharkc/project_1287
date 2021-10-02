import React from "react";
import { useHistory } from "react-router-dom";
import { useSetState } from "react-use";
import AddCompanyForm from "./components/add-company-form";
import moment from "moment";
export const CompanyContext = React.createContext(null);

export default function AddCompany() {
  const history = useHistory();
  let [formData, setFormData] = useSetState({
    userid: 0,
    company_name: "",
    company_logo: "https://picsum.photos/100",
    company_emailid: "",
    company_mobile_number: "",
    company_address: "",
    created_on: moment().format("YYYY-MM-DD"), //"2021-09-09"
  });

  return (
    <div className="container">
      {/* Add New Company {JSON.stringify(formData)} */}
      <div className="row my-4">
        <div className="col d-flex align-items-center">
          <button
            className="btn btn-primary mr-3"
            onClick={() => history.goBack()}
          >
            Back
          </button>
          <h3>Add new company</h3>
        </div>
      </div>

      <CompanyContext.Provider value={{ formData, setFormData }}>
        <AddCompanyForm />
      </CompanyContext.Provider>
    </div>
  );
}

// Render Prop
import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CompanyContext } from "../add-company";
import { useMutation } from "react-query";
import axios from "../../../api_client";
import { AuthContext } from "../../../contexts/auth.context";
import { toast } from "react-toastify";
import Loader from "../../../components/loader";

const AddCompanyForm = () => {
  const { formData, setFormData } = useContext(CompanyContext);
  const { mutate, isLoading } = useMutation((form) =>
    axios.post("/user/addCompany", form)
  );
  const { user } = useContext(AuthContext);
  return (
    <div className="row">
      <div className="col">
        {isLoading && <Loader />}

        <Formik
          initialValues={{ ...formData }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            setFormData(values);
            mutate(
              { ...values, userid: user.userid },
              {
                onSuccess(data) {
                  console.log({ data });
                  setSubmitting(false);
                  toast.success(data.data.message);
                },
                onError(error) {
                  setSubmitting(false);
                  toast.error(error.message);
                },
              }
            );
            //   mutate({...values,userId:user.userId})
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <Field
                  type="text"
                  className="form-control"
                  required
                  name="company_name"
                  placeholder="Company Name"
                />
              </div>
              <div className="form-group">
                <Field
                  type="email"
                  className="form-control"
                  required
                  name="company_emailid"
                  placeholder="Company Email"
                />
              </div>

              <div className="form-group">
                <Field
                  type="text"
                  className="form-control"
                  required
                  name="company_mobile_number"
                  placeholder="Company Landline"
                />
              </div>

              <div className="form-group">
                <Field
                  type="text"
                  className="form-control"
                  required
                  name="company_address"
                  placeholder="Company Address"
                />
              </div>

              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="col"></div>
    </div>
  );
};

export default AddCompanyForm;

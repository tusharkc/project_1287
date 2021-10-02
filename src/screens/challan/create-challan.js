import React from 'react';
import { BiltyCard } from '../bilty/bilty-list';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup,Input } from 'reactstrap';

export default function CreateChallan(){
    return <div className="my-3 mx-3">
        <h5>Selected Builty</h5>
        <div className="d-flex">
        <BiltyCard />
        <BiltyCard/>
        </div>
        <ChallanForm/>
    </div>
}


function ChallanForm(){
    return <div>
    <Formik
      initialValues={{
        driver_name:"",
        vehicle_owner_name:"",
        consignee_name:"",
        from:"",
        to:"",
        payment_terms:"",
        advance:"",
        total_amount:""
      }}
      
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormGroup>
              <Field placeholder="Driver name" name="driver_name" component={Input} />
              <Field placeholder="Vehicle owner name" name="vehicle_owner_name" component={Input}/>
              <Field placeholder="Consignee name" name="consignee_name" component={Input}/>
              <Field placeholder="From" name="from" component={Input}/>
              <Field placeholder="To" name="to" component={Input}/>
              <Field placeholder="Payment Terms" name="payment_terms" component={Input}/>
              <Field placeholder="Advance" name="advance" component={Input}/>
              <Field placeholder="Total amount" name="total_amount" component={Input}/>
              </FormGroup>
          <button type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
}
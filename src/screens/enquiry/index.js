import React, { useEffect, useRef, useState } from "react";
import Stepper from "react-stepper-horizontal";
import {
  FormGroup,Label,Input, Row,Col} from 'reactstrap'
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import { useSetState } from "react-use";

import { Formik, Form, Field, ErrorMessage } from 'formik';
 

export default function Enquiry() {
  const [activeStep, setActiveStep] = useState(0);
  
  const [steps,setSteps] = useState([
    {
      title: "Loading Location",
      onClick: () => {
        console.log("clicked");
        setActiveStep(0);
      },
    },
    {
      title: "Unloading Location",
      onClick: () => {
        console.log("clicked");
        setActiveStep(1);
      },
    },
    {
      title: "Delivery Info",
      onClick: () => {
        console.log("clicked");
        setActiveStep(2);
      },
    },
    {
      title: "Freight Payable",
      onClick: () => {
        console.log("clicked");
        setActiveStep(3);
      },
    },
  ]);
  const onClickNext = ()=> {
    if(activeStep >=3){
      setActiveStep(3)
    } else {
      setActiveStep(
        activeStep+1
      );
    }
  }
  const onClickPrev = ()=> {
    if(activeStep<=0){
      setActiveStep(
        0
      );
    } else {
      setActiveStep(activeStep-1)
    }
  }
  const [totalLocations,setTotalLocations] = useSetState({locations:[{id:1}]})
  const [totalUnloadingLocations,setTotalUnloadingLocations] = useSetState({locations:[{id:1}]})

  return (
    <div className="mx-3">
      <h6>
        Fill the following details to get the quote from selected transporters
      </h6>
      <p>Please fill in the details to proceed</p>
      <Stepper steps={steps} activeStep={activeStep} />
      
      <Row >
          <Col sm="12" md="6">




    {activeStep===0 && <div>{totalLocations.locations.map(v => <LoadingLocationForm key={v.id} id={v.id}/>)}
    <button className="btn" onClick={() => {
        setTotalLocations(data => ({locations:[...data.locations,{id:data.locations.length+1}]}))
      }}>+ Add more loading location</button>
     
     </div>}
     {activeStep===1 && <div>{totalUnloadingLocations.locations.map(v => <UnloadingLocationForm key={v.id} id={v.id}/>)} 
      <button className="btn" onClick={() => {
        setTotalUnloadingLocations(data => ({locations:[...data.locations,{id:data.locations.length+1}]}))
      }}>+ Add more unloading location</button></div>}


      {activeStep ===2 && <DeliveryInfo/>}
      {activeStep ===3 && <FreightPayable/>}
     
     
      
     
      </Col>

      </Row>
      <div className="d-flex justify-content-center">
      <button className="btn my-5  btn-primary mr-3" onClick={ onClickPrev }>Prev</button>
      <button className="btn my-5  btn-primary" onClick={ onClickNext }>Next</button>


      </div>

    </div>
  );
}





export function LoadingLocationForm({id}){
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState('10:00');
  return <>
  <Formik>
    {() => {
      return <Form>
      <h6 className="my-3">Loading location {id}</h6>

      <FormGroup>
        <Label for="exampleEmail">Name of seller</Label>
        <Input type="text" name="aaa" id="exampletext" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampletext">Date of pickup</Label>
        <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
        {/* <Input type="text" name="bbb" id="exampletext" placeholder="with a placeholder" /> */}
      </FormGroup>
      <FormGroup>
        <Label for="exampletext">Time of pickup</Label>
        <TimePicker
        className="form-control"
        onChange={onChange}
        value={value}
      />
        {/* <Input type="text" name="ccc" id="exampletext" placeholder="with a placeholder" /> */}
      </FormGroup>
      <FormGroup>
        <Label for="address">Address of loading location</Label>
        <Input type="text" name="address" id="address" placeholder="address" />
      </FormGroup>
      </Form>
    }}
  </Formik>
  </>
} 


export function UnloadingLocationForm({id}){
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState('10:00');
  return <>
  <Formik>
    {() => {
      return <Form>
      <h6 className="my-3">Unloading location {id}</h6>

      <FormGroup>
        <Label for="exampleEmail">Name of buyer</Label>
        <Input type="text" name="aaa" id="exampletext" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampletext">Address of unloading location</Label>
        {/* <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} /> */}
        <Input type="text" name="bbb" id="exampletext" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampletext">Expected time of delivery</Label>
        <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
        {/* <Input type="text" name="bbb" id="exampletext" placeholder="with a placeholder" /> */}
      </FormGroup>
      <FormGroup>
        <Label for="exampletext">Delivery timings</Label>
        <TimePicker
        className="form-control"
        onChange={onChange}
        value={value}
      />
        {/* <Input type="text" name="ccc" id="exampletext" placeholder="with a placeholder" /> */}
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">No entry timezone</Label>
        <Input type="text" name="no_entry" id="examplePassword" placeholder="no entry timezone" />
      </FormGroup>
      </Form>
    }}
  </Formik>
  </>
} 



function DeliveryInfo(){
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState('10:00');
  return <>
  <Formik>
    {() => {
      return <Form>
      <h6 className="my-3">Goods and delivery info</h6>

      <FormGroup>
        <Label for="exampleEmail">Name of Goods</Label>
        <Input type="text" name="aaa" id="exampletext" placeholder="with a placeholder" />
      </FormGroup>
        <Label for="exampletext">Delivery Type</Label>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Door Delivery
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           Godown Delivery
          </Label>
        </FormGroup>

        <Label for="exampletext">Delivery Type</Label>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Door Delivery
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           Godown Delivery
          </Label>
        </FormGroup>

        <Label for="exampletext">Delivery Type</Label>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Door Delivery
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           Godown Delivery
          </Label>
        </FormGroup>


        <Label for="exampletext">Door delivery unloading by</Label>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Consignee
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           Transporter
          </Label>
        </FormGroup>

        <Label for="exampletext">Insurance/Risk by</Label>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Owner
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           Carrier
          </Label>
        </FormGroup>

      </Form>
    }}
  </Formik>
  </>
} 



function FreightPayable(){
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState('10:00');
  return <>
  <Formik>
    {() => {
      return <Form>
      <h6 className="my-3">Freight Payable (select at least one)</h6>

        
        
        <Label for="exampletext">Paid (by consigner/seller)</Label>
        <p>you may fill the number below</p>
        <Input type="text" placeholder="% percentage"/>

        <Label for="exampletext">To pay (by consigner/buyer)</Label>
        <p>you may select from the options below</p>
        <div class="form-check ">
  <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1"/>
  <label class="form-check-label" for="exampleRadios1">
  COD Cash
  </label>
</div>
<div class="form-check ">
  <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label class="form-check-label" for="exampleRadios2">
  Cheque
  </label>
</div>
<div class="form-check ">
  <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios3" value="option3"/>
  <label class="form-check-label" for="exampleRadios3">
 Online
  </label>
</div>
        {/* <Input type="checkbox"/>
        COD Cash
        <Input type="checkbox"/>
        Cheque
        <Input type="checkbox"/>
        Online */}

<br/>

        <Label for="exampletext">To be billed</Label><br/>
        <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label" for="exampleRadios1">
   Consignor Seller
  </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label" for="exampleRadios1">
   Consignor Buyer
  </label>
</div>




      </Form>
    }}
  </Formik>
  </>
} 
import React,{useState,useCallback} from 'react';
import Stepper from "react-stepper-horizontal";
import { useSetState } from 'react-use';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useDropzone} from 'react-dropzone'
import { FormGroup, Input } from 'reactstrap';

export default function Bilty(){
    const [activeStep, setActiveStep] = useState(0);
  
    const [steps,setSteps] = useState([
      {
        title: "Consigner/Consignee",
      },
      {
        title: "Goods Info",
      },
      {
        title: "Freight Charges",
       
      },
      {
        title: "EwayBill/Invoice",
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
  
    return <>
    <div className="my-3 mx-3">
    <h4>ID - GYH67868768</h4>

    <div className="d-flex">

    <p className="mr-4">Loading location 1</p>
    <p>Unloading location 1</p>
    </div>
    <p>Proceed to fill bilty details</p>
    <p>The builty will be generated on completion of below mentioned fields</p>
    <Stepper steps={steps} activeStep={activeStep} />
    {activeStep===0 && <ConsignerConsigneeForm/>}
    {activeStep===1 && <GoodsInfo/>}
    {activeStep===2 && <FreightForm/>}
    {activeStep===3 && <div>
    <h5 className="d-flex justify-content-center">Business Documents</h5>
    <div className="d-flex justify-content-center">
     <BusinessDocuments/>
    </div>
    </div>}
    <div className="d-flex justify-content-center">

    <button className="btn my-5  btn-primary mr-3" onClick={ onClickPrev }>Prev</button>
      <button className="btn my-5  btn-primary" onClick={ onClickNext }>Next</button>
      </div>
    </div>
    </>
}




function ConsignerConsigneeForm(){
    return <div>
    <Formik
      initialValues={{ seller_name: '', seller_address: '',seller_gstn:'',consigner_name:'',consigner_contact_person_name:'',consigner_contact_person_number:'',
      buyer_name:'',buyer_address:'',buyer_gstn:'',
      consignee_name:'',consignee_contact_person:'',consignee_contact_person_mobile:'' }}
     
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h5>Seller details</h5>
          <FormGroup>
              <Input placeholder="Seller Name" name="seller_name"/>
              <Input placeholder="Seller Address" name="seller_address"/>
              <Input placeholder="Seller GSTN" name="seller_gstn"/>


              </FormGroup>
          <h5>Consignor details</h5>
          <FormGroup>

          <Input placeholder="Consignor Name" name="consigner_name"/>
              <Input placeholder="Consignor Contact Person Name" name="consigner_name"/>
              <Input placeholder="Consignor Contact Person Mobile Number" name="consigner_contact_person_number"/>
              </FormGroup>
          <h5>Buyer details</h5>
          <FormGroup>

          <Input placeholder="Buyer Name" name="buyer_name"/>
              <Input placeholder="Buyer Address" name="buyer_address"/>
              <Input placeholder="Buyer GSTN" name="buyer_gstn"/>
              </FormGroup>
          <h5>Consignee details</h5>
          <FormGroup>

          <Input placeholder="Consignee Name" name="consignee_name"/>
              <Input placeholder="Consignee Contact Person Name Address" name="consignee_contact_person"/>
              <Input placeholder="Consignee Contact Person Mobile Number" name="consignee_contact_person_mobile"/>
              </FormGroup>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
}


function GoodsInfo(){
    return <div>
    <Formik
      initialValues={{ description_of_goods:'',
      quantity_of_goods:'',net_weight_of_goods:'',
      gross_weight_of_goods:'',
      tare_weight_of_lorry:'',
      gross_weight_of_lorry:'',
      weight_on_which_freight_chargable:''
     }}
     
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h5>Seller details</h5>
          <FormGroup>
             <Input placeholder="description of the goods" name="description_of_goods"/>
             <Input placeholder="quantity of goods" name="quantity_of_goods"/>
             <Input placeholder="net weight of goods" name="net_weight_of_goods"/>
             <Input placeholder="gross weight of goods" name="gross_weight_of_goods"/>
             <Input placeholder="tare weight of lorry" name="tare_weight_of_lorry"/>
             <Input placeholder="gross weight of lorry" name="gross_weight_of_lorry"/>
             <Input placeholder="weight on which freight chargable" name="weight_on_which_freight_chargable"/>







            </FormGroup>
         
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  
  </div>
}

function FreightForm(){
    return <div>
        Weight on which freight chargable
        10,000Kg
        <Formik
      initialValues={{ 
        loading_charges:'',
        unloading_charges:'',
        bilty_charges:'',
        high_volume_charges:'',
        delivery_charges:'',
        demurrage_charges:'',
        insurance_cover_note_number:'',
        general_tpnd:'',
        transit_insurance:'',
        value_of_goods:'',
        invoice_number:'',
        invoice_date:'',
        seal_number:''
     }}
     
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h5>Freight Charges</h5>
          <FormGroup>
             <Input placeholder="loading charges" name="loading_charges"/>
             <Input placeholder="unloading charges" name="unloading_charges"/>
             <Input placeholder="bilty charges" name="bilty_charges"/>
             <Input placeholder="high volume charges" name="high_volume_charges"/>
             <Input placeholder="delivery charges" name="delivery_charges"/>
             <Input placeholder="demurrage charges" name="demurrage_charges"/>

            </FormGroup>
         

            <p>Insurance</p>
            <FormGroup>
             <Input placeholder="insurance cover note number" name="insurance_cover_note_number"/>
             <Input placeholder="general TPND" name="general_tpnd"/>
             <Input placeholder="transit insurance (20%-30%)" name="transit_insurance"/>
            <p>GST & Invoice</p>
            <Input placeholder="value of goods" name="value_of_goods"/>
            <Input placeholder="invoice number" name="invoice_number"/>
            <Input placeholder="invoice date" name="invoice_date"/>
            <Input placeholder="seal number" name="seal_number"/>

            </FormGroup>


          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  
    </div>
}


function DragDropUploader({text}){
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return <div className="border p-3" {...getRootProps()}>
    <input {...getInputProps()} />
    {
      isDragActive ?
        <p>drag or click to upload {text}</p> :
        <p>drag or click to upload {text}</p>
    }
  </div>
}

function BusinessDocuments(){
    return <>

    <div className="d-flex mt-3">
        <div className="mr-2">

        <DragDropUploader text="business invoice"/>
        </div>

        <DragDropUploader text="e-way bill"/>

    </div>
    </>
}
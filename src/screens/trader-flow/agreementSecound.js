
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FormGroup,Label,Input, Row,Col,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
  import {FaArrowLeft, FaRocketchat,FaEye } from 'react-icons/fa';
import { Router } from "react-router";
import { useHistory } from "react-router-dom";

const AgreementSecound=()=>{
    let [frieghtType,setFrieghtType] =useState()
    let history = useHistory();

    const openAgreementCopy=()=>{
     // openAgreementCopy
     alert('open the agreement copy here');
     //useHistory().push('/agreement-list')
     history.push("agreement-list");
    }
    return (<>
    
    <div className="mx-3">
            <span><FaArrowLeft /> Aggrement</span>
    </div>
    <Col sm="12" style={{marginLeft:"28px"}} >
      <Row><span style={{color:"#aab3bb"}}>The following contract is being genrated on the basis of Enquiry ID</span></Row>
      <Row><strong style={{color:"rgba(218, 126, 82, 0.85)"}}>CI00001234</strong></Row>
      <Row><span style={{color:"#aab3bb"}}>Do you fill the agreement yourself?</span></Row>
      <Row>
        
        <button className="btn my-5    mr-3"  style={{color:"rgba(218, 126, 82, 0.85)"}} > Yes, I want to fill </button>
        <button className="btn my-5   " style={{color:"rgba(218, 126, 82, 0.85)"}}>Request Transporter</button>
      </Row>
       <Row>
        <Col sm="3" >
        <strong style={{margin :"7px 23px -7px -14px"}}> Trader Name</strong> 
        </Col>
        <Col  sm="3">
        <strong style={{margin :"7px 23px -7px -14px"}}>Transporater Name </strong> 
        </Col>
      </Row>
      <Row>

        <Col sm="3" style={{display: "grid",weidth:"50px",margin :"7px 23px -7px -14px"}}>
          <strong >Krishna Trader </strong>
          <div>
            you can choice nay company registred in your profile in in this app
            <p>GSTN-03234242353</p>
            <p>Address 4375,roshan ara road,delhi</p>
          </div>
        </Col>
        
        <Col >
        <strong >Jetways Trader </strong>
        <div>
            you can choice nay company registred in your profile in in this app
            <p>GSTN-03234242353</p>
            <p>Address 4375,roshan ara road,delhi</p>
          </div>
        </Col>
      </Row>
      <Row>

        <Col sm="3" style={{display: "grid",weidth:"50px",margin :"7px 23px -7px -14px"}}>
          <strong >Form </strong>
          <div>
           KOta,Rajasthan
            
          </div>
        </Col>
        
        <Col >
        <strong >TO </strong>
        <div>
            Gurugram,Haryana
          </div>
        </Col>
      </Row>
     
      <Row>
        <span style={{color:"#aab3bb"}}>Load Type</span>
      </Row>
      <Row>
        <strong  >Part Load</strong>
      </Row>
      <Row>
        <span style={{color:"#aab3bb"}}>Good Type</span>
      </Row>
      <Row>
        <strong  >Solid</strong>
      </Row>
      <Row>
        <span style={{color:"#aab3bb"}}>Name of Goods</span>
      </Row>
      <Row>
        <strong  >Wheat</strong>
      </Row>
      <Row>
        <span style={{color:"#aab3bb"}}>Nature of goods</span>
      </Row>
      <Row>
        <strong  >Inflammable,Non Hazardous,Commercial,Light&loas</strong>
      </Row>
      <Row> 
        <p style={{color:"#aab3bb"}}>The above special T&C prevall over the normal T&C of the trader and transporter.</p>
      </Row>
      <Row>
        <span style={{color:"#aab3bb"}}>Quantity/Units</span>
      </Row>
      <Row>
        <strong  >10000Kilogram/200 Sacks</strong>
      </Row>

       <Row style={{justifyContent: "center"}}>
        <button className="btn my-5  btn-primary mr-3"  style={{background:"#33416A",}}  onClick={openAgreementCopy}  >
        {/* <Link to="agreement" style={{ color:'white',display: "inline-block"  }}>I AGREE</Link> */}
        I AGREE
        </button>
        <button className="btn my-5  " >CANCLE</button>
      </Row> 
    </Col>
    </>)
}
export default AgreementSecound;
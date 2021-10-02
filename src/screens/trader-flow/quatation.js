import   { useContext, useState } from 'react';
import {
    FormGroup,Label,Input, Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,  Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { FaStar,FaChevronDown } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AgreementContextProvider } from "../../contexts/agreement.context";
import  QuatationDetails  from "./quatationDetail";
const Quatation = ()=>{
     
        
    return (<>
            <AgreementContextProvider>
            <div className="mx-3">
                <span>Quatation</span>
            </div>
            <Row>
                <Col sm="12" style={{marginLeft:"4px"}} >
                    <span className="align-left">Sort by:</span>
                    <span className="align-right">Top rated<FaChevronDown /></span>
                
                </Col>
            </Row>
            <QuatationDetails />
            </AgreementContextProvider>
    </>)
    
}
export default Quatation;
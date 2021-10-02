import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { FaArrowLeft, FaShareAlt, FaChevronDown } from "react-icons/fa";

const MyEnquiry = () => {
  let [frieghtType, setFrieghtType] = useState();

  // const {
  //   state,
  //  dispatch,
  // } = useContext(AgreementContext);

  //console.log('statestatestate',state)

  let [tab, setTab] = useState(0);

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);
  //console.log('agreement',agreement)
  const tabOpen = (n) => {
    // dispatch({type:'SET_AGREMENT_PAGE',payload:n})
    setTab(n);
  };

  return (
    <>
      <div className="mx-3">
        <span>
          <FaArrowLeft /> My Enquiry
        </span>
      </div>
      <Col sm="12" style={{ marginLeft: "28px" }}>
         
        <Row className="quatation-bootam-border-bootam">
           
          <span  style={{float:"right",display: "block" ,marginRight:"2px"}}>
            Filter By: 
          </span>  
        </Row>

        <Card>
          <div style={{ marginLeft: "29px" }}>
            <Row>
              <span> Enquiry Id:</span>
              <strong>CNE01234</strong>
            </Row>
            <Row>
              <span>Goods :</span>
              <strong>Wheat 50 Quintal</strong>
            </Row>
            <Row>
              <span>Date  :</span>
              <strong>16/9/2021</strong>
            </Row>
            <Row>
              <span>Description: </span>
              <strong>lorem Ipsum</strong>
            </Row>
             

            <div className="quatation-bootam-border-top">
              <span
                style={{ float: "left", display: "block", marginLeft: "34px" }}
              >
                {" "} 
                VIEW CONTRACT:{" "}
              </span>
              <span
                style={{
                  color: "rgba(218, 126, 82, 0.85) ",
                  marginRight: "50px",
                  float: "right",
                  display: "block",
                }}
              >
                {" "}
                CREATE TRIP:{" "}
              </span>
            </div>
          </div>
        </Card>
        <Card style={{  marginTop: "29px" }}>
          <div style={{ marginLeft: "29px" }}>
            <Row>
              <span> Enquiry Id:</span>
              <strong>CNE01234</strong>
            </Row>
            <Row>
              <span>Goods :</span>
              <strong>Wheat 50 Quintal</strong>
            </Row>
            <Row>
              <span>Date  :</span>
              <strong>16/9/2021</strong>
            </Row>
            <Row>
              <span>Description: </span>
              <strong>lorem Ipsum</strong>
            </Row>
            <div className="quatation-bootam-border-top">
              <span
                style={{ float: "left", display: "block", marginLeft: "34px" }}
              >
                {" "} 
                VIEW CONTRACT:{" "}
              </span>
               
            </div>
          </div>
        </Card>
      </Col>
      <div>

      </div>
    </>
  );
};
export default MyEnquiry;

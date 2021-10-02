import { useContext, useState } from "react";
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
import { FaStar, FaChevronDown ,FaPencilAlt} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AgreementContext } from "../../contexts/agreement.context";

const QuatationDetails = () => {
  const { state, dispatch } = useContext(AgreementContext);

  console.log("statestatestate", state);

  let [tab, setTab] = useState(0);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  //console.log('agreement',agreement)
  const tabOpen = (n) => {
    dispatch({ type: "SET_AGREMENT_PAGE", payload: n });
    setTab(n);
  };

  return (
    <>
    {

    [1,2,3].map((val,index)=>{
        return(
      <Row>
        <Col sm="12" style={{ marginLeft: "4px", marginBottom: "8px" }}>
          <Card body style={{ borderRadius: "15px" }}>
            <Row>
              <span> Transporter Name:</span>
              <strong>Jetways Transporater</strong>
            </Row>
            <Row>
              <span>Form Location: </span>
              <strong>Haryana</strong>
            </Row>
            <Row>
              <span>To Location: </span>
              <strong>Panjab</strong>
            </Row>
            <Row>
              <span> Rating: </span>
              <strong>
                <FaStar />
              </strong>
            </Row>
            <Row className="quatation-bootam">
              
              <Col sm="12" style={{ marginLeft: "4px" }}>
                <Row>
                  <Col
                    sm="4"
                    className="quatation-bootam-right"
                    onClick={() => tabOpen(!tab ? index+1 : 0)}
                  >
                    <span>
                      <span style={{ color: "rgba(218, 126, 82, 0.85)" }}>
                        &#8377;
                      </span>
                      45000/Fixed
                    </span>
                    <br />
                    <span>
                      VIEW DETAILS
                      <FaChevronDown />
                    </span>
                  </Col>
                  <Col sm="4" className="quatation-bootam-right">
                    <strong>
                      {" "}
                      <Link to="/negotiation-chat" style={{ color: "black" }}>
                        Negotiation Chat
                      </Link>
                    </strong>
                  </Col>
                  <Col sm="4" className="" onClick={toggle}>
                    <span style={{ color: "grey" }}>PROCEED >></span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Col
              sm="12"
              style={{ marginLeft: "4px" }}
              className={tab == index+1 ? "show" : "hide"}
            >
              <span>
                <strong>Notes</strong>
              </span>
              <p>
                Lorem ipsun is simply dummy text of the printing and typesetting
              </p>
              <span>
                <strong>PAYMENT ITEM</strong>
              </span>{" "}
              <br />
              <span>To pay COD Cash</span>
              <br />
              <span>
                <strong>PRICE DETAILS</strong>
              </span>
              <br />
              <span>Fright Charges: </span>{" "}
              <span className="align-right">&#8377;15000</span>
              <br />
              <span>Landing Charges: </span>
              <span className="align-right">&#8377;15000</span>
              <br />
              <span>Unloading Charges: </span>
              <span className="align-right">&#8377;15000</span>
              <br />
              <span>Lorem Charges: </span>
              <span className="align-right">&#8377;15000</span>
              <br />
              <span>Miscellaneous Charges:</span>{" "}
              <span className="align-right">&#8377; 15000</span>
              <br />
              <Row className="quatation-bootam">
                <Col sm="12">
                  <span className="align-left">TOTAL:</span>
                  <span className="align-right">&#8377;299999</span>
                </Col>
              </Row>
              <Row className="row justify-content-center">
                <Button color="  sm-btn"><FaPencilAlt  style={{ color: "rgba(218, 126, 82, 0.85)" }}/>Edit Enquiry</Button>
              </Row>
            </Col>
          </Card>
        </Col>
      </Row>)
      })
        
    }    
      <div>
            <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
            Do you want to proceed for agreement with Jaipur Golden?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
            <Link to="agreement" style={{color:"white"}}>Yes</Link>
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              No
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};
export default QuatationDetails;

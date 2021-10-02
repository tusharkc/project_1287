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
import { FaArrowLeft, FaRocketchat, FaEye } from "react-icons/fa";

const Agreement = () => {
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
          <FaArrowLeft /> Aggrement
        </span>
      </div>
      <Col sm="12" style={{ marginLeft: "28px" }}>
        <Row>
          <span style={{ color: "#aab3bb" }}>Demmurage Charges</span>
        </Row>
        <Row>
          <strong>Lorem Ipsum</strong>
        </Row>
        <Row>
          <span style={{ color: "#aab3bb" }}>Frieght Payable</span>
        </Row>
        <Row>
          <strong>To pay COD cash</strong>
        </Row>
        <Row style={{ padding: "2px 2px 2px 2px" }}>
          <FormGroup check style={{ weidth: "102px", marginRight: "75px" }}>
            <Label check>
              <Input type="radio" name="radio1" /> <strong> To Driver </strong>
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{" "}
              <strong> To transporter </strong>
            </Label>
          </FormGroup>
        </Row>
        <Row>
          <span style={{ color: "#aab3bb" }}>Tare Weight of vehicle</span>
        </Row>
        <Row style={{ padding: "2px 2px 2px 2px" }}>
          <FormGroup check style={{ weidth: "102px", marginRight: "75px" }}>
            <Label check>
              <Input type="radio" name="radio1" /> <strong>Transporter</strong>
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> <strong>Trader</strong>
            </Label>
          </FormGroup>
        </Row>
        <Row>
          <span style={{ color: "#aab3bb" }}>Permitted Delay</span>
        </Row>
        <Row>
          <Col sm="3">
            <strong style={{ margin: "7px 23px -7px -14px" }}> Pick Up</strong>
            <strong>Loading </strong>
          </Col>
          <Col sm="3">
            <strong style={{ margin: "7px 23px -7px -14px" }}>Delivery </strong>
            <strong>Unloading </strong>
          </Col>
        </Row>
        <Row>
          <FormGroup
            style={{ display: "grid", weidth: "102px", marginRight: "167px" }}
          >
            <Label for="exampleSelectMulti">Upto Hours</Label>
            <select name="selectMulti" id="Hours">
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
            </select>
          </FormGroup>

          <FormGroup style={{ display: "grid" }}>
            <Label for="exampleSelectMulti">Delay Charge</Label>
            <select name="selectMulti" id="DelayCharge">
              <option>150/Hr</option>
              <option>2/Hr</option>
              <option>3/Hr</option>
              <option>4/Hr</option>
              <option>5/Hr</option>
            </select>
          </FormGroup>
        </Row>
        <Row>
          <span style={{ color: "#aab3bb" }}>Extra Quantity</span>
        </Row>
        <Row>
          <div>
            <p>Up to 1% no extra charge</p>
            <p>vehicle capacity weight of good,transporter will bear.</p>
            <p>vehicle capacity weight of good,trader will bear.</p>
          </div>
        </Row>
        <Row>
          <p style={{ color: "#aab3bb" }}>
            The above special T&C prevall over the normal T&C of the trader and
            transporter.
          </p>
        </Row>
        <Row>
          <span style={{ color: "#da7e52d9" }}>
            <FaEye />
            View T&C of Trader
          </span>
        </Row>
        <Row>
          <span style={{ color: "#da7e52d9" }}>
            <FaEye />
            View T&C of Transporater
          </span>
        </Row>
        <Row>
          <span>
            <FaEye style={{ color: "#da7e52d9" }} />
            Add More To Contract{" "}
          </span>
        </Row>
        <Row>
          <span style={{ color: "#aab3bb" }}>
            constomize your contract by ading more categories
          </span>
        </Row>
        <Row>
          <span>
            <FaRocketchat style={{ color: "#da7e52d9" }} />
            Comicating with Transporater
          </span>
        </Row>
        <Row>
          <span style={{ color: "#aab3bb" }}>
            You can message transporter here and negoctiate the trem of contract
          </span>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <button className="btn my-5  btn-primary mr-3"  style={{backgroundColor:"rgb(51, 65, 106)",}}>
            <Link
              to="agreement-secound"
              style={{ color: "white", display: "inline-block" }}
            >
              I AGREE
            </Link>
          </button>
          <button className="btn my-5  btn-primary">CANCLE</button>
        </Row>
      </Col>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
            <h6> Sorry to hear you want to cancle</h6>
            <p>Please Give Your Reason...</p>
            <FormGroup check style={{ weidth: "102px", marginRight: "75px" }}>
              <Label check>
                <Input type="radio" name="radio1" style={{    marginLeft: "-189px"}}/>{" "}
                <span> I did not like to agreement </span>
              </Label>
            </FormGroup>
            <FormGroup check style={{ weidth: "102px", marginRight: "75px" }}>
              <Label check>
                <Input type="radio" name="radio1" style={{    marginLeft: "-189px"}}/>{" "}
                <span> Agreement is not clear</span>
              </Label>
            </FormGroup>
            <FormGroup check style={{ weidth: "102px", marginRight: "75px" }}>
              <Label check>
                <Input type="radio" name="radio1" style={{    marginLeft: "-189px"}}/>{" "}
                <span> Payment term not satisfactory</span>
              </Label>
            </FormGroup>
            <FormGroup check style={{ weidth: "102px", marginRight: "75px" }}>
              <Label check>
                <Input type="radio" name="radio1" style={{    marginLeft: "-189px"}}/>{" "}
                <span>Trader behaviour not ok</span>
              </Label>
            </FormGroup>
            <FormGroup check style={{ weidth: "102px", marginRight: "75px" }}>
              <Label check>
                <Input type="radio" name="radio1" style={{    marginLeft: "-189px"}}/>{" "}
                <span>Other issue</span>
              </Label>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button   onClick={toggle} style={{backgroundColor:'rgb(51, 65, 106)' }}>
              <Link to="agreement" style={{ color:'white'}}>Submit</Link>
            </Button>{" "}
             
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};
export default Agreement;

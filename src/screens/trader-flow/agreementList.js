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

const AgreementList = () => {
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
          <button
            className="btn my-5    mr-3"
            style={{
              marginLeft: "28px",
              backgroundColor: "white",
              color: "black",
              border: "2px solid grey",
            }}
          >
            One Time Contract{" "}
          </button>
          <button className="btn my-5   " style={{ color: "grey" }}>
            Long Time Contract
          </button>
        </Row>

        <Row className="quatation-bootam-border-bootam">
          <div style={{ float: "left", display: "block" }}>
            <select class="form-select" aria-label="Default select example" style={{border: "none"}}>
              <option selected>Sort By: Latest</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div style={{ float: "right", display: "block" }}>
            <select class="form-select" aria-label="Default select example" style={{border: "none"}}>
              <option selected>Filter By:Confirmed</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
 
        </Row>

        <Card>
          <div style={{ marginLeft: "29px" }}>
            <Row>
              <span> Transporater Name:</span>
              <strong>Panjab</strong>
            </Row>
            <Row>
              <span> Form Location :</span>
              <strong>Panjab</strong>
            </Row>
            <Row>
              <span> To Location :</span>
              <strong>Panjab</strong>
            </Row>
            <Row>
              <span>Date: </span>
              <strong>10/9/2020</strong>
            </Row>
            <Row>
              <span>Contact ID: </span>
              <strong>CN013444</strong>
            </Row>
            <Row>
              <span> Status: </span>
              <strong style={{ color: "green" }}>
                {/* <FaStar /> */}Confirm
              </strong>
            </Row>

            <div className="quatation-bootam-border-top">
              <span
                style={{ float: "left", display: "block", marginLeft: "34px" }}
              >
                {" "}
                <FaShareAlt
                  style={{ color: "rgba(218, 126, 82, 0.85) " }}
                />{" "}
                Share:{" "}
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
      </Col>
      <div>
      <div>
          <Modal isOpen={modal} toggle={toggle}  style={{maxWidth: "900px "}} >
          <div  style={{margin: "10px", }}>
            
            <h6>Loading Location (LL)</h6>
            
            <Card style={  { width: "48%",display: "inline-block",marginRight:" 3px", padding: "inherit"}}>
              <div style={{width:"100%",borderBottom:"2px solid "}}>
              <strong>LL1</strong>
              <input type="checkbox"  style={{float:"right",marginRight: "-149px" ,marginTop: "7px"}}/>
              </div>
              
              <div >Seller: <strong>Sunny Trader,kota</strong> </div>
              <div>Cosigner: <strong>Sunny Trader,kota</strong> </div>
              <div>Date: <strong>10/34/2002</strong> </div>
              <div>Time: <strong>10 AM To 2PM</strong> </div>
            </Card>
            <Card style={{ width: "48%" ,display: "inline-block", marginTop:"4px" , padding: "inherit"}}>
              <div style={{width:"100%",borderBottom:"2px solid "}}>
              
              <strong>LL2</strong>
              <input type="checkbox"  style={{float:"right",marginRight: "-149px",    marginTop: "7px"}}/>
              </div>
              <div>Seller: <strong>Sunny Trader,kota</strong> </div>
              <div>Cosigner: <strong>Sunny Trader,kota</strong> </div>
              <div>Date: <strong>10/34/2020</strong> </div>
              <div>Time: <strong>10 AM To 2PM</strong> </div>
            
            </Card>
            <Card style={  { width: "48%",display: "inline-block",marginRight:" 3px", padding: "inherit"}}>
              <div style={{width:"100%",borderBottom:"2px solid "}}>
              <strong>LL1</strong>
              <input type="checkbox"  style={{float:"right",marginRight: "-149px" ,marginTop: "7px"}}/>
              </div>
              
              <div >Seller: <strong>Sunny Trader,kota</strong> </div>
              <div>Cosigner: <strong>Sunny Trader,kota</strong> </div>
              <div>Date: <strong>10/34/2002</strong> </div>
              <div>Time: <strong>10 AM To 2PM</strong> </div>
            </Card>
            <Card style={{ width: "48%" ,display: "inline-block", marginTop:"4px" , padding: "inherit"}}>
              <div style={{width:"100%",borderBottom:"2px solid "}}>
              
              <strong>LL2</strong>
              <input type="checkbox"  style={{float:"right",marginRight: "-149px",    marginTop: "7px"}}/>
              </div>
              <div>Seller: <strong>Sunny Trader,kota</strong> </div>
              <div>Cosigner: <strong>Sunny Trader,kota</strong> </div>
              <div>Date: <strong>10/34/2020</strong> </div>
              <div>Time: <strong>10 AM To 2PM</strong> </div>
            
            </Card>
         
          </div>
          <ModalFooter>
            <Button color="primary" onClick={toggle} >
            <Link to="create-trip" style={{color:"white"}}>Next</Link>
            </Button>{" "}
             
          </ModalFooter>
        </Modal>
      </div>
      </div>
    </>
  );
};
export default AgreementList;


import {
    FormGroup,Label,Input, Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap'
const NegotiationChat=()=>{
    
    return(
        <>
        <div className="mx-3">
        <span>Negotiation Chat</span>
    </div>
	<Row style={{marginLeft:"14px"}}>

        <Col sm="6"  >
          <strong >Enquire ID</strong>
          <div>
             <p>03234242353</p> 
          </div>
        </Col>
        <Col style={{float:"right"}}>
        <strong >Request From</strong>
        <div> 
            <p>Jaipur Golden</p>
        </div>
        </Col>
	</Row>
    <Row>
    <div class="container-fluid h-100">
			 	 
				<div class="col-md-12 col-xl-6 chat">
					<div style={{width: "100%;"}}>
						 
						<div class="card-body msg_card_body">
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg1">
 								</div>
								<div class="msg_cotainer">
									Hi, how are you samim?
									<span class="msg_time">8:40 AM, Today</span>
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									Hi Khalid i am good tnx how about you? 
								</div>
								<div class="img_cont_msg">
 								</div>
							</div> 
							 
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg1">
 								</div>
								<div class="msg_cotainer">
									I am good too, thank you for your chat template 
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									You are welcome 
								</div>
								<div class="img_cont_msg">
 								</div>
							</div>
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg1">
									 
								</div>
								<div class="msg_cotainer">
									I am looking for your next templates 
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									Ok, thank you have a good day 
								</div>
								<div class="img_cont_msg">
 								</div>
							</div>
							<div class="d-flex justify-content-start mb-4">
								<div class="img_cont_msg1">
 								</div>
								<div class="msg_cotainer">
									Bye, see you 
								</div>
							</div>
						</div>
						<div class="card-footer">
							<div class="input-group">
								<div class="input-group-append">
									<span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
								</div>
								<textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
								<div class="input-group-append">
									<span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			 
		</div>
    </Row>
        
    </>
    )
}
export default NegotiationChat;

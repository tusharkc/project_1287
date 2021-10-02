import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button,Row,Col,CardHeader,Input, FormGroup
  } from 'reactstrap';
export default function Mapping(){
    return <>
    You can now map loading locations to the unloading locations
    <h5 className="my-3">Loading Locations</h5>
    <Row>
    {[1,2,3].map(v => <LoadingLocationCard key={v}/>)}
    </Row>
    <h5 className="my-3">Unloading locations</h5>
    <Row>

    {[1,2,3].map(v =><UnloadingLocationCard id={v} key={v}/>)}
    </Row>

    </>
}

 function LoadingLocationCard(){
     return <Col><Card>
     <CardBody>
       <CardText>Seller: Krishna Trader, Delhi<br/>Consignor: Radha Trader, Delhi<br/>Date: 18-08-2020<br/>Time: 10AM</CardText>
     </CardBody>
   </Card></Col>
 }

 function UnloadingLocationCard({id}){
     return <Col>
      <Card>
        <CardHeader>UL{id} <Input type="checkbox"/></CardHeader>
        <CardBody>
        <CardText>Buyer: Krishna Trader, Delhi<br/>Consignee: Radha Trader, Delhi<br/>Date: 18-08-2020<br/>Time: 10AM</CardText>
        </CardBody>
      </Card>
     </Col>
 }
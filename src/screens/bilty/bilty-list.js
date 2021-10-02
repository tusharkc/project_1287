import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
  } from 'reactstrap';

  export default function BuiltyList(){
    return <div className="my-3 mx-3">
        <h3 className="mb-3">Bilty List</h3>
    {[1,2,3,4].map(v => <BiltyCard key={v}/>)}
    </div>
  }
  
export function BiltyCard(){
    return <Card className="mb-3">
    <CardBody>
      <CardText>Builty ID:<b> GJHG8766</b><br/>
      
      Client Name:<b> GHG</b> <br/>
      Vehicle Number:<b> 798JK</b><br/>
      Goods:<b> GHJ79879</b><br/>
      Date:<b> 08-09-2021</b>
      </CardText>
    </CardBody>
  </Card>
}
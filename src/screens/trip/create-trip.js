import React, { useState } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button,Row,Col
  } from 'reactstrap';
  import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { LoadingLocationForm, UnloadingLocationForm } from '../enquiry';
import Mapping from './mapping';

export default function CreateTrip(){
    const [activeTab, setActiveTab] = React.useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  const [mapping,setMapping] = useState(false);
  const toggleMapping = () => setMapping(!mapping)
    return <div className="mx-3">
       {!mapping? <div>

    <h4>ID - CNE7874749</h4>
    <p className="text-muted">This is your reference contact/enquiry id</p>
    <p className="text-muted">you can now proceed to create your booking</p>
    <h4>Trip 1  <span style={{fontSize:"0.7em",marginLeft:"1em"}}>+ Add more trip</span></h4>
    <p>Map your loading and unloading locations in the selection</p>
    <Row className="mb-3">
        
    {[1,2,3].map(v => <Box key={v}/>)}
    </Row>

    <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Trader
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Transporter
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <Tab1/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
       <Tab2/>
       </TabPane>
      </TabContent>

      </div>:<Mapping/>}


      <button type="button" class="btn btn-primary btn-lg btn-block my-3">CREATE TRIP</button>
      <button type="button" class="btn btn-secondary btn-lg btn-block my-3" onClick={toggleMapping}>MAPPING</button>

    
    </div>
}


export function Box(){
    return <Col><Card>
    <CardBody>
      <CardText>Vehicle: <br/>Driver: <br/>City:</CardText>
    </CardBody>
  </Card></Col>
}


function Tab1(){
    const [activeTab, setActiveTab] = React.useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
    return <div className="my-3 mx-3">
        <Row>
            <Col>
    <h5  className="my-3">Loading Location (LL)</h5>
<Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            LL1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            LL2
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
                <LoadingLocationForm/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <LoadingLocationForm/>

       </TabPane>
      </TabContent>
      </Col>
    <Col>


      <h5 className="my-3">Unloading Location (UL)</h5>
<Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            UL1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            UL2
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
                <UnloadingLocationForm/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <UnloadingLocationForm/>

       </TabPane>
      </TabContent>

      </Col>
      </Row>
    </div>
}

function Tab2(){
    const [activeTab, setActiveTab] = React.useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
    return <div className="my-3 mx-3 w-50">
hi
    


    </div>
}

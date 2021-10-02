import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Header = (props) => {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <Container>

      <Row style={{ maxWidth: 500, margin: "auto", marginTop: 20 }}>
        <Col style={{ marginLeft: 30 }}><img src="Assets/jetway.png" alt="Logo" /></Col>
        <Col><img src="images/logo_bilty.png" alt="Logo" /></Col>
        <Col><img src="Assets/search.png" alt="Logo" /><div style={{ borderLeft: "6 sold green", height: "500px", position: "absolute", left: "50%", marginLeft: "-3px", top: 0 }}></div></Col>
        <Col><img src="Assets/bar.png" alt="Logo" /></Col>
      </Row>

    </Container>
  );
}

export default Header
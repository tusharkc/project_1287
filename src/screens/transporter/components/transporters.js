import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import StarRatings from 'react-star-ratings';
import { useHistory } from "react-router-dom";

export default function Transporters() {
  const transporters = [
    {
      transporter_name: "Jetways Transporter",
      from_location: "Lucknow",
      to_location: "Punjab",
      rating: 5,
      id:'1'
    },
    {
      transporter_name: "Jaipur Golden",
      from_location: "Lucknow",
      to_location: "Punjab",
      rating: 5,
      id:'2'

    },
    {
      transporter_name: "Ambay Transporter",
      from_location: "Lucknow",
      to_location: "Punjab",
      rating: 5,
      id:'3'

    },
    {
      transporter_name: "Arora Transporter",
      from_location: "Lucknow",
      to_location: "Punjab",
      rating: 5,
      id:'4'

    },
  ];
  const history = useHistory()
  return (
    <Row className="d-flex justify-content-center">
      <Col sm="6">
          <h5 className="text-secondary muted">You can select multiple transporters to get a quote</h5>
        {transporters.map((v, index) => {
          return (
            <Card body key={index} className="mt-2">
              <CardText>
                <ListGroup flush>
                  <ListGroupItem>
                    Transporter Name: <b>{v.transporter_name}</b>
                  </ListGroupItem>
                  <ListGroupItem>
                    From Location:<b> {v.from_location}</b>
                  </ListGroupItem>
                  <ListGroupItem>
                    To Location:<b> {v.to_location}</b>
                  </ListGroupItem>
                  <ListGroupItem>
                    Rating: <StarRatings
          rating={v.rating}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
          starDimension="20px"
        />
                  </ListGroupItem>
                </ListGroup>
              </CardText>
              <Button onClick={() => history.push('/transporter/'+v.id)}>View Profile</Button>
            </Card>
          );
        })}
      </Col>
    </Row>
  );
}

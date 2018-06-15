import React from "react"
import { ListGroup, ListGroupItem, Row, Col, Container } from "reactstrap"
import Card from "./Card"

const ListCards = ({ targets, killingAction }) => {
  return (
    <ListGroup className="list-unstyled">
      <Container>
        <Row>
          {targets.map(target => {
            return (
              <Col md="4" xs="4" key={target.name}>
                <ListGroupItem>
                  <Card target={target} killingAction={killingAction} />
                </ListGroupItem>
              </Col>
            )
          })}
        </Row>
      </Container>
    </ListGroup>
  )
}

export default ListCards

import React from "react"
import { ListGroup, ListGroupItem } from "reactstrap"
import Card from "./Card"

const ListCards = props => {
  return (
    <ListGroup>
      {props.targets.map(target => {
        return <Card target={target} />
      })}
    </ListGroup>
  )
}

export default ListCards

import React from "react"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap"

const SingleCard = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src={props.target.picture}
          alt={props.target.name}
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Have fun, just clic below</CardText>
          <Button>Kill</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default SingleCard

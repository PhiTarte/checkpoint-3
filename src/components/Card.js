import React from "react"
import {
  Card,
  CardImg,
  CardText,
  CardImgOverlay,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap"

const SingleCard = ({ target, killingAction }) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="40%" src={target.picture} alt={target.name} />
        <CardImgOverlay>
          <CardTitle>{target.name}</CardTitle>
          <CardSubtitle>{target.status}</CardSubtitle>
          {target.status === "alive" ? (
            <div>
              <CardText>Have fun, just clic below</CardText>
              <Button
                type="button"
                onClick={() => killingAction(this.state.targets, target)}
              >
                Kill
              </Button>
            </div>
          ) : (
            ""
          )}
        </CardImgOverlay>
      </Card>
    </div>
  )
}

export default SingleCard

import React from "react";
import Aux from "../../../HOCs/Auxilliary";
import Button from "../../UI/Button/Button";
class OrderSummary extends React.Component {
  componentWillUpdate() {
    console.log("ORDERSUMMARY will UPDATE");
  }
  render() {
    this.ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order </h3>
        <p>Ingredients</p>
        <ul>{this.ingredientSummary}</ul>
        <p>
          <strong>Total price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>

        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;

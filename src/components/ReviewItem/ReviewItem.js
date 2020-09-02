import React from "react";

const ReviewItem = (props) => {
  //   console.log(props.product);
  const { name, quantity } = props.product;
  return (
    <div>
      <h4>{name}</h4>
      <p>Quantity: {quantity} </p>
    </div>
  );
};

export default ReviewItem;

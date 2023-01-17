import React, {useContext} from "react";
import { generalContext } from "../../../generalContext";

export default function CartItem({ name, quantity }) {

  return (
    <div>
      <span>{name}</span>
      <p>{quantity}</p>
    </div>
  );
}

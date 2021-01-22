import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import React from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./context/Reducer";

function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Ckeck out</button>
    </div>
  );
}

export default Subtotal;

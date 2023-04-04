import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../../../Redux/slices/shoppingSlice";
import { toast } from "react-toastify";
// import { checkout } from '../../../../Redux/countSlice'
export default function TotalPayment() {
  const subTotal = useSelector((state) => state?.ShoppingStore?.totalPrice);
  const dispatch = useDispatch();
  const taxes = (subTotal / 100) * 10;
  const total = subTotal + taxes;
  const handleCheckout = () => {
    if (subTotal > 0) {
      dispatch(checkout());
      toast("Your order Sucessfull");
    } else {
      toast("Please order something");
    }
  };
  return (
    <>
      <h1>Your Total Payment</h1>
      <hr />
      <div className="row">
        <p className="col-md">Price</p>
        <p className="col-md">{subTotal}</p>
      </div>
      <hr />
      <div className="row">
        <p className="col-md">Taxes</p>
        <p className="col-md">{Math.round(taxes)}</p>
      </div>
      <hr />
      <div className="row">
        <p className="col-md">Total Price</p>
        <p className="col-md">{Math.round(total)}</p>
      </div>
      <button
        className="btn btn-lg btn-success"
        style={{ marginLeft: "100px", marginTop: "20px" }}
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </>
  );
}

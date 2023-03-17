import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  removeCart,
  decrementQuantity,
} from "../../../Redux/slices/shoppingSlice";
import Loader from "../../common/Loader";
import TotalPayment from "./TotalPayment";

function AddItem() {
  const cartItem = useSelector((state) => state?.ShoppingStore?.data);
  const dispatch = useDispatch();
  const handleDelete = (element) => {
    dispatch(removeCart(element));
  };
  const handleIncrement = (element) => {
    dispatch(incrementQuantity(element));
  };
  const handleDecrement = (element) => {
    dispatch(decrementQuantity(element));
  };
  return (
    <>
      <div></div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 position-relative">
            <h1>You Have Add these Items</h1>
            <div className="row">
              {cartItem?.length > 0 ? (
                cartItem?.map((element, index) => (
                  <div className="col-md-6 my-3" key={index}>
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={element?.image}
                        className="card-img-top"
                        alt="..."
                        style={{ height: "15rem", width: "18rem" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{element?.category}</h5>
                        <p className="card-text">Price {element?.price}</p>
                        <div className="row">
                          <div className="col-md-4">
                            <button
                              className="btn btn-primary"
                              onClick={() => handleDelete(element)}
                            >
                              Delete
                            </button>
                          </div>
                          <div className="col-md-8">
                            <button
                              disabled={element?.quantity < 1}
                              className="btn btn-secondary rounded-circle mx-2"
                              onClick={() => handleDecrement(index)}
                            >
                              -
                            </button>
                            <span>{element?.quantity}</span>
                            <button
                              className="btn btn-secondary rounded-circle mx-2"
                              onClick={() => handleIncrement(index)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <Loader/>
              )}
            </div>
          </div>
          <div className="col-md-4">
            <TotalPayment />
          </div>
        </div>
      </div>
    </>
  );
}
export default AddItem;

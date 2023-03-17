import React from "react";
import { useEffect} from "react";
import { addToCart, getCollection } from "../../../Redux/slices/shoppingSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import NavbarShopping from "./NavbarShopping";
import Loader from "../../common/Loader";

function ShoppingCart() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollection());
  }, []);

  const count = useSelector((state) => state?.ShoppingStore?.data);
  const collection = useSelector((state) => state?.ShoppingStore?.collection);
  return (
    <>
      <NavbarShopping count={count?.length} />

      <div className="container">
        <h1 className="my-5"> Shopping Cart Items</h1>

        <div className="row">
          {collection?.length > 0 ? (
            collection?.map((element, index) => (
              <div className="col-md-4 my-3" key={index}>
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
                    <button
                      className="btn btn-primary"
                      onClick={() => dispatch(addToCart(element))}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
}
export default ShoppingCart;

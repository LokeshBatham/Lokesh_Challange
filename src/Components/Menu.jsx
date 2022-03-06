import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
// import feeds from "../data/feeds.json";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "600px",
    marginRight: "-50%",
    border: "1px solid",
    transform: "translate(-50%, -50%)",
  },
};

const Menu = () => {
  const [quantity, setQuantity] = useState(0);
  const [food, setFood] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const getData = () => {
    fetch("./data/feeds.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setFood(myJson);
      });
  };

  const handleAddition = (data) => {
    setQuantity(quantity + 1);
    setPrice(data * quantity);
  };

  const handledelete = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "30px",
        }}
        onClick={openModal}
      >
        <img
          style={{ height: "40px", width: "40px" }}
          src="/assets/cardimages.png"
          alt=""
        />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>Order Summary</h1>
        <div className="card-item">
          <p>Coke: </p>
          <p>{quantity}</p>
          <div>
            <button className="card-btn add" onClick={handleAddition}>
              +
            </button>
            <button className="card-btn delete" onClick={handledelete}>
              -
            </button>
          </div>
        </div>
        <div className="card-item">
          <p>Fries: </p>
          <p>{quantity}</p>
          <div>
            <button className="card-btn add" onClick={handleAddition}>
              +
            </button>
            <button className="card-btn delete" onClick={handledelete}>
              -
            </button>
          </div>
        </div>
        <p>Total (INR) : {quantity * price}</p>
        <div style={{ textAlign: "right" }}>
          <Link to="/checkout" className="cart-btn add">
            SAVE AND CHECKOUT
          </Link>
          <Link to="/" className="cart-btn delete">
            CANCEL
          </Link>
        </div>
      </Modal>

      <div className="food-items">
        {food.map((data) => (
          <div className="menu-card">
            <img src={`/assets/${data.image}`} alt="Food Img" />
            <div className="card-info">
              <h1>{data.name}</h1>
              <p>price: {data.price}</p>
              {quantity > 0 && (
                <>
                  <p>Total: {quantity}</p>
                  <p>Cost(INR): {quantity * data.price}</p>
                </>
              )}

              <div>
                <button
                  className="card-btn add"
                  onClick={() => {
                    handleAddition(data.price);
                  }}
                >
                  +
                </button>
                <button className="card-btn delete" onClick={handledelete}>
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

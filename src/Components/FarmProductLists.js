import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/farmProductLists.css";
import Rate from "./Rate";

const products = [
  {
    name: "Beans",
    image: "/assets/beans.jpg",
    price: "1,999",
    measurement: "per bag",
    id: 1,
  },
  {
    name: "Beans",
    image: "/assets/beans.jpg",
    price: "1,999",
    measurement: "per bag",
    id: 2,
  },
  {
    name: "Beans",
    image: "/assets/beans.jpg",
    price: "1,999",
    measurement: "per bag",
    id: 3,
  },
  {
    name: "Egg",
    image: "/assets/egg.jpg",
    price: "1,999",
    measurement: "per crate",
    id: 4,
  },
  {
    name: "Egg",
    image: "/assets/egg.jpg",
    price: "1,999",
    measurement: "per crate",
    id: 5,
  },
  {
    name: "Egg",
    image: "/assets/egg.jpg",
    price: "1,999",
    measurement: "per crate",
    id: 6,
  },
  {
    name: "Yam",
    image: "/assets/yam.jpg",
    price: "1,999",
    measurement: "per tuber",
    id: 7,
  },
  {
    name: "Yam",
    image: "/assets/yam.jpg",
    price: "1,999",
    measurement: "per tuber",
    id: 8,
  },
  {
    name: "Yam",
    image: "/assets/yam.jpg",
    price: "1,999",
    measurement: "per tuber",
    id: 9,
  },
];

const FarmProductLists = () => {
  //const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:3000/api/v1/farmproducts")
  //     .then((data) => {
  //       setData(data.products);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  return (
    <div>
      {/* I had to comment this out because of the error from the backend */}
      {/* {data.map((product) => {
        return (
        <div className="card-list">
          <div className="card">
            <img
              src={product.images[0]}
              alt="product"
              className="card-image"
            />
            <div className="card-content">
              <p className="card-farmer">Obasanjo Farms</p>
              <h1 className="card-name">{product.productName}</h1>
              <Rate />
              <h3>
                <span className="card-naira">₦</span>
                <span className="card-amount">{product.perUnitPrice}</span>
                <span className="card-qty">per bag</span>
              </h3>
            </div>
          </div>
        </div>)
      })} */}

      <div className="card-list">
        {products.map((product) => {
          return (
            <div className="card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="card-image"
              />
              <div className="card-content">
                <p className="card-farmer">Obasanjo Farms</p>
                <h1 className="card-name">{product.name}</h1>
                <Rate />
                <h3>
                  <span className="card-naira">₦</span>
                  <span className="card-amount">{product.price}</span>
                  <span className="card-qty">{product.measurement}</span>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FarmProductLists;

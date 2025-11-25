import React, { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useFetch from "./custom-Hook/useFetch";
import { LifeLine } from "react-loading-indicators";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

const Product = () => {
  let navigate = useNavigate()
  const { product, error, isLoading } = useFetch(
    "http://localhost:4000/product"
  );

  if (isLoading) {
    return (
      <>
        <LifeLine
          color="#32cd32"
          size="medium"
          text="loading..."
          textColor=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      </>
    );
  }

  return (
    <>
      <h1>Product</h1>
      <section className="products">
        {product.map((items) => (
          <Card key={items.id} style={{ width: "18rem" }}>
            <center>
              <Card.Img
                variant="top"
                src={items.image}
                style={{ width: "9rem", height: "12rem" }}
              />
            </center>
            <Card.Body>
              <Card.Title>{items.title}</Card.Title>
              {/*  new button */}
              <Card.Text style={{textAlign : "center"}}>${items.price}</Card.Text>
              {/* <Card.Text style={{ overflow: "scroll", height: "150px" }}>
                {items.description}
              </Card.Text> */}
            </Card.Body>
            <Card.Footer
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              {/* <Card.Text>${items.price}</Card.Text> */}
              <Button variant="primary">
                <MdShoppingCartCheckout />
              </Button>
              <Button variant="secondary" onClick={()=>{navigate(`/update/${items.id}`);}}>
                <FaEdit />
              </Button>
              <Button variant="danger">
                <MdDeleteSweep />
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </section>
      {error && <p>{error}</p>}
    </>
  );
};

export default Product;

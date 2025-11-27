import React, { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useFetch from "./custom-Hook/useFetch";
import { LifeLine } from "react-loading-indicators";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
const Product = () => {
  let navigate = useNavigate();
  const { product, error, isLoading, setProduct } = useFetch(
    "http://localhost:4000/product"
  );

  // const [product, setProduct] = useState([]);
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:4000/products", { method: "GET" })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setProduct(data);
  //     }).catch((error)=>setError(error))
  //     .finally(()=>setIsLoading(false))
  // }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/product/${id}`).then(() => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
        let newproduct = product.filter((items) => {
          return items.id !== id;
        });
        setProduct(newproduct);
      });
    });
  };

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
      <article>
        <span>
          <h3>To Create a new product</h3>{" "}
        </span>

        <Button variant="primary" onClick={()=>{navigate("/newproduct");}}>
          Click me
        </Button>
      </article>
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
              <Card.Text style={{ textAlign: "center" }}>
                ${items.price}
              </Card.Text>
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
              <Button
                variant="secondary"
                onClick={() => {
                  navigate(`/update/${items.id}`);
                }}
              >
                <FaEdit />
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  handleDelete(items.id);
                }}
              >
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

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Typography, Grid, TextField, Button } from "@mui/material";

const NewProduct = () => {
  let paperStyle = {
    width: 400,
    margin: " 20px auto",
    padding: "20px ",
  };

 
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    let fieldname = name.split("rating.")[1];

    if (name.includes("rating.")) {
      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          [fieldname]: value,
        },
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    }
    // console.log(newProduct);
  };

  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:4000/product", {
  //     method: "POST",
  //     headers: {
  //       "content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newProduct),
  //   }).then(() => {
  //     alert("Data Added successfully🥳");
  //   });
  // };

  const handleAdd=(e)=>{
    e.preventDefault();
    fetch("http://localhost:4000/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then(() => {
      alert("Data Added successfully");
    });
    setNewProduct({
      title: "",
      price: 500,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      rating: {
        rate: 0,
        count: 0,
      },
    });
  }


  return (
    <>
      <Paper elevation={20} style={paperStyle}>
        <Typography variant="h5" textAlign={"center"} paddingBottom={"10px"}>
          Create a New Product
        </Typography>
        <Grid
          component="form"
          style={{ display: "grid", gap: "20px" }}
          onSubmit={handleAdd}
        >
          <TextField
            value={newProduct.title}
            name="title"
            id="outlined-basic"
            label="Title"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            value={newProduct.category}
            name="category"
            id="outlined-basic"
            label="Category"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <Grid container spacing={6}>
            <Grid size={6}>
              <TextField
                value={newProduct.rating.rate}
                name="rating.rate"
                id="outlined-basic"
                label="Rate"
                variant="outlined"
                type="number"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                value={newProduct.rating.count}
                name="rating.count"
                id="outlined-basic"
                label="Count"
                variant="outlined"
                type="number"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" fullWidth>
            ADD
          </Button>
        </Grid>
      </Paper>
    </>
  );
};

export default NewProduct;

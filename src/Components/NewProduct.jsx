import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Typography, Grid, TextField, Button } from "@mui/material";

const NewProduct = () => {
  let paperStyle = {
    width: 400,
    margin: " 20px auto",
    padding: "20px ",
  };
  /*
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  */
  //new

  const [newProduct, setnewProduct] = useState({
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
    console.log(e.target.value);
    console.log(e.target.name);
  };

  return (
    <>
      <Paper elevation={20} style={paperStyle}>
        <Typography variant="h5" textAlign={"center"} paddingBottom={"10px"}>
          Create a New Product
        </Typography>
        <Grid component="form" style={{ display: "grid", gap: "20px" }}>
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
          <Button variant="contained" fullWidth>
            ADD
          </Button>
        </Grid>
      </Paper>
    </>
  );
};

export default NewProduct;

import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { Typography, Grid, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  let paperStyle = {
    width: 400,
    margin: " 20px auto",
    padding: "20px ",
  };

  const [updateProduct, setUpdateProduct] = useState(null);
  let { id } = useParams();
  let navigate = useNavigate();
  //  console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:4000/product/${id}`).then((res) => {
      setUpdateProduct(res.data);
    });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldname = name.split("rating.")[1];

    if (name.includes("rating.")) {
      setUpdateProduct({
        ...updateProduct,
        rating: {
          ...updateProduct.rating,
          [fieldname]: value,
        },
      });
    } else {
      setUpdateProduct({
        ...updateProduct,
        [name]: value,
      });
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    }).then(() => {
      alert("Saved successfully");
    });
    navigate("/product");
  };
  if (updateProduct !== null) {
    return (
      <>
        <Paper elevation={20} style={paperStyle}>
          <Typography variant="h5" textAlign={"center"} paddingBottom={"10px"}>
            Update Product
          </Typography>
          <Grid
            component="form"
            style={{ display: "grid", gap: "20px" }}
            onSubmit={handleUpdate}
          >
            <TextField
              value={updateProduct.title}
              name="title"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              value={updateProduct.category}
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
                  value={updateProduct.rating.rate}
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
                  value={updateProduct.rating.count}
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
            <Button type="submit" variant="contained" color="success" fullWidth>
              ADD
            </Button>
          </Grid>
        </Paper>
      </>
    );
  } else {
    return <div>Loading....</div>;
  }
};

export default UpdateProduct;

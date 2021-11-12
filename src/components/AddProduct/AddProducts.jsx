import React, { useRef } from "react";
import "./admin.css";

const AddProducts = () => {
  const productName = useRef();
  const productDetail = useRef();
  const productPrice = useRef();
  const productRating = useRef();
  const productImage = useRef();
  //   const handleSubmit = (e) => {
  //     const country = countryRef.current.value;
  //     const place = placeRef.current.value;
  //     const description = descriptionRef.current.value;
  //     const image = imageRef.current.value;
  //     const newUser = { country, place, description, image };
  //   }
  const handleSubmit = (e) => {
    const name = productName.current.value;
    const price = productPrice.current.value;
    const rating = productRating.current.value;
    const details = productDetail.current.value;
    const image = productImage.current.value;

    const newProduct = { name, price, rating, details, image };
    fetch("http://localhost:5000/products",{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data =>{
        if (data.insertedId){
            alert("Successfully Added")
        }
    })

    
    e.preventDefault();
  };
  return (
    <div className="formSection" fluid="sm">
      <div className="addFormSection mx-auto">
        <h1 className="text-center">Add Products</h1>
        <div className="destinationSection ">
          <form onSubmit={handleSubmit}>

              
            <label htmlFor="name">Product Name</label> <br />
            <input ref={productName} type="text" name="" id="" />
            <br />
            <label htmlFor="name">Product Description</label>
            <br />
            <textarea ref={productDetail} name="" id=""></textarea>
            <br />
            <label htmlFor="number">Product Price</label> <br />
            <input ref={productPrice} type="number" name="" id="" />
            <br />
            <label htmlFor="number">Product Rating</label> <br />
            <input ref={productRating} placeholder="please type (1-5)" type="number" name="" id="" />
            <br />
            <label htmlFor="name">Image Url</label>
            <br />
            <input ref={productImage} type="text" name="" id="" />
            <br />
            <input
              className="submit btn btn-warning"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;

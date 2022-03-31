import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

function AddProduct({ addNewProduct }) {
  let history = useHistory();

  const [formData, setFormData] = useState({
    brand: "",
    name: "",
    price: "",
    concerns: "",
    ingredients: ""
  });

  // const initialFormState = {
  //   brand: "",
  //   name: "",
  //   price: "",
  //   concerns: "",
  //   ingredients: ""
  // };

  const brandInputRef = useRef(null);

  useEffect(() => {
    brandInputRef.current.focus();
  }, []);


  function handleChange (e){
    setFormData(formData => ({
      ...formData, [e.target.name]: e.target.value
    })
    )
  }

  function handleSubmit(e){
    e.preventDefault();

    const newProd = {
      brand: formData.brand,
      name: formData.name,
      price: formData.price,
      concerns: formData.concerns,
      ingredients: formData.ingredients
    }


    fetch ('http://localhost:9292/products', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(newProd)
    })
      .then(response => response.json())
      .then(addNewProduct)
      .then(console.log(newProd))
      .then(setFormData(formData))
      history.push("/products")

  // function handleSubmit (e){
  //   e.preventDefault();
  //   addNewProduct(formData)
  //   console.log(formData)
  //   setFormData({
  //     brand: "",
  //     name: "",
  //     price: "",
  //     concerns: "",
  //     ingredients: ""
  // })

  //   const newProduct = {
  //     brand: formData.brand,
  //     name: formData.name,
  //     price: formData.price,
  //     concerns: formData.concerns,
  //     ingredients: formData.ingredients
  // }

    
  
  // fetch ('http://localhost:9292/products', { 
  //   method: 'POST',
  //   header: {
  //     'content-type': 'application/json'
  //   }, 
  //   body: JSON.stringify(newProduct)
  // })
  //   .then(response => response.json())
  //   .then(addNewProduct)
  //   .then(setFormData(initialFormState))
  //   history.push("/products")
  }






  return (
    <>
    <h3 className="ui header"><i className="pencil alternate icon"></i>Add New Skincare Product</h3>
    <h2 className="ui sub header">Share your latest finds!</h2>
    <div></div>
    <form 
    className="ui form"
    onSubmit={e => handleSubmit(e)}
    >
      <div className="field">
      <div className="field">
        <label>Brand</label>
        <input 
        ref={brandInputRef}
        type="text"
        name="brand"
        value={formData.brand}
        onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="field">
        <label>Product Name</label>
        <input 
        type="text"
        name="name"
        value={formData.name}
        onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="field">
        <label>Price</label>
        <input 
        type="text"
        name="price"
        value={formData.price}
        onChange={(e) => handleChange(e)}
        />
      </div>
    </div>

    <div className="field">
        <label>Concerns</label>
        <input 
        type="text"
        name="concerns"
        value={formData.concerns}
        onChange={(e) => handleChange(e)}
        />
      </div>



{/* testing checkbox */}
      {/* <div className="grouped fields">
        <label>Concerns: </label>
        <div className="ui checkbox">
          <input 
          type="checkbox" 
          name="concerns"
          value="checked"
          onChange={(e) => handleChange(e)}
          />
          <label>Fine Lines </label>
        </div>
        <div className="ui checkbox">
          <input 
          type="checkbox" 
          name="concerns"
          value={formData.concerns}
          onChange={(e) => handleChange(e)}
          />
          <label>Damaged Barrier </label>
        </div>
      <div className="ui checkbox">
          <input 
          type="checkbox" 
          name="concerns"
          value={formData.concerns}
          onChange={(e) => handleChange(e)}
          />
          <label>Acne </label>
      </div>
      <div className="ui checkbox">
          <input 
          type="checkbox" 
          name="concerns"
          value={formData.concerns}
          onChange={(e) => handleChange(e)}
          />
          <label>Dry Skin </label>
      </div>
      <div className="ui checkbox">
          <input 
          type="checkbox" 
          name="concerns"
          value={formData.concerns}
          onChange={(e) => handleChange(e)}
          />
          <label>Wrinkles </label>
      </div>
      <div className="ui checkbox">
          <input 
          type="checkbox" 
          name="concerns"
          value={formData.concerns}
          onChange={(e) => handleChange(e)}
          />
          <label>Redness </label>
      </div>
      <div className="ui checkbox">
          <input 
          type="checkbox" 
          name="concerns"
          value={formData.concerns}
          onChange={(e) => handleChange(e)}
          />
          <label>Dark Spots </label>
      </div>
    </div> */}



      
      {/* <div className="field">
        <label>Ingredients</label>
        <textarea type="text" ></textarea> */}
      {/* </div> */}
      {/* <div className="ui success message">
      <div className="header">Form Completed</div>
        <p>You have successfully added a new product!</p>
      </div> */}
      <div className="field">
        <label>Ingredients</label>
        <textarea 
        type="text"
        name="ingredients"
        value={formData.ingredients}
        onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
      <button
      className="ui submit button"
      type="submit"
      value="Add Product"
      >Submit</button>
    </form>
    </>
  )
}

export default AddProduct
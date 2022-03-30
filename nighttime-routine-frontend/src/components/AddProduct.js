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

  // const brandInputRef = useRef(null);

  // useEffect(() => {
  //   brandInputRef.current.focus();
  // }, []);


  function handleChange (e){
    setFormData(formData => ({
      ...formData, [e.target.name]: e.target.value
    })
      // ...formData
      // [e.target.name]: e.target.value
    )
  }

  function fetchTest(e){
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
    <form 
    className="ui form"
    onSubmit={e => fetchTest(e)}
    >
      <div className="three fields">
      <div className="four wide field">
        <label>Brand</label>
        <input 
        type="text"
        name="brand"
        value={formData.brand}
        onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="four wide field">
        <label>Product Name</label>
        <input 
        type="text"
        name="name"
        value={formData.name}
        onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="two wide field">
        <label>Price</label>
        <input 
        type="text"
        name="price"
        value={formData.price}
        onChange={(e) => handleChange(e)}
        />
      </div>
    </div>



      {/* <div className="grouped fields">
          <label>Concerns: </label>
          <div className="ui checkbox">
            <input type="checkbox" name="fine lines"/>
            <label>Fine Lines </label>
          </div>
          <div className="ui checkbox">
            <input type="checkbox" name="damaged barrier"/>
            <label>Damaged Barrier </label>
          </div>
        <div className="ui checkbox">
            <input type="checkbox" name="acne"/>
            <label>Acne </label>
        </div>
        <div className="ui checkbox">
            <input type="checkbox" name="dry skin"/>
            <label>Dry Skin </label>
        </div>
        <div className="ui checkbox">
            <input type="checkbox" name="wrinkles"/>
            <label>Wrinkles </label>
        </div>
        <div className="ui checkbox">
            <input type="checkbox" name="redness"/>
            <label>Redness </label>
        </div>
        <div className="ui checkbox">
            <input type="checkbox" name="dark spots"/>
            <label>Dark Spots </label>
        </div>
      </div>



      
      <div className="field">
        <label>Ingredients</label>
        <textarea type="text" ></textarea> */}
      {/* </div> */}
      {/* <div className="ui success message">
      <div className="header">Form Completed</div>
        <p>You have successfully added a new product!</p>
      </div> */}
      <button
      className="ui submit button"
      type="submit"
      value="Add Product"
      >Submit</button>
    </form>
  )
}

export default AddProduct
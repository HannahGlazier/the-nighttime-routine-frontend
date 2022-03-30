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

  const initialFormState = {
    brand: "",
    name: "",
    price: "",
    concerns: "",
    ingredients: ""
  };

  // const brandInputRef = useRef(null);

  // useEffect(() => {
  //   brandInputRef.current.focus();
  // }, []);

  function handleChange (e){
    setFormData({
      ...formData,
      [e.target.brand]: e.target.value
    })
  }

  function handleAdd (e){
    e.preventDefault();
    const newProduct = {
      brand: formData.brand,
      name: formData.name,
      price: formData.price,
      concerns: formData.concerns,
      ingredients: formData.ingredients
  }
  
  fetch ('http://localhost:9292/products', { 
    method: 'POST',
    header: {
      'content-type': 'application/json'
    }, 
    body: JSON.stringify(newProduct)
  })
    .then(response => response.json())
    .then(addNewProduct)
    .then(setFormData(initialFormState))
    history.push("/products")
  }







  return (
    <form 
    className="ui form"
    onSubmit={(e) => handleAdd(e)}
    >
      <div className="three fields">
      <div className="four wide field">
        <label>Brand</label>
        <input 
        type="text"
        value={FormData.brand}
        onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="four wide field">
        <label>Product Name</label>
        <input 
        type="text"
        value={formData.name}
        onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="two wide field">
        <label>Price</label>
        <input 
        type="text"
        value={FormData.price}
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
      <div className="ui submit button">Submit</div>
    </form>
  )
}

export default AddProduct
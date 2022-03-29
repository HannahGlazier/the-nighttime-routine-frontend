import React from 'react'

function addProduct({ addNewProduct }) {
  return (
    <div className="ui form success">
      <div className="three fields">
      <div className="four wide field">
        <label>Brand</label>
        <input type="text"/>
      </div>
      <div className="four wide field">
        <label>Product Name</label>
        <input type="text"/>
      </div>
      <div className="two wide field">
        <label>Price</label>
        <input type="text"/>
      </div>
    </div>



      <div className="grouped fields">
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
        <textarea type="text" ></textarea>
      </div>
      {/* <div className="ui success message">
      <div className="header">Form Completed</div>
        <p>You have successfully added a new product!</p>
      </div> */}
      <div className="ui submit button">Submit</div>
    </div>
  )
}

export default addProduct
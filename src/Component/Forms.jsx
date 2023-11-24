import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import InputComponent from "./InputComponent";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionSubmit } from "../state/state";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const Forms = () => {
  const SubmitData = useSelector((state) => state.submit);
  const dispatch = useDispatch();
  const { submitForm } = bindActionCreators(ActionSubmit, dispatch);

  const [Date,setDate]=useState('')
  const handelSubmit = (e) => {
    e.preventDefault();
    const FormData={
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      sale: e.target.sale.value,
      calendar: e.target.date.value,
      time: e.target.time.value,
      option: e.target.option.value,
      product: e.target.product.value,
      note: e.target.note.value,
    }
    submitForm(FormData)
  };
  
  const handleCancel=()=>{
    alert("cancel")
    
  }
  
  useEffect(()=>{
    console.log(JSON.stringify(SubmitData))

  })
  return (
    <div className="formContainer">
      
      <div className="formText">
        <h2>Add new lead form</h2>
        <Button
          color="error"
          variant="outlined"
          style={{ width: "10%", height: "7vh" }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
      
      <form method="Post" style={{ marginTop: "50px" }} onSubmit={handelSubmit}>
        <InputComponent
          label={"Lead name"}
          icon={<i className="fa-solid fa-user"></i>}
          isImportant={true}
          type={"text"}
          name={"name"}
          placeholder={"Enter lead name"}
        />
        <InputComponent
          label={"Email ID"}
          icon={<i className="fa-solid fa-envelope"></i>}
          isImportant={true}
          type={"email"}
          name={"email"}
          placeholder={"Example@anyemail.com"}
        />
        <InputComponent
          label={"Phone number"}
          icon={<i className="fa-solid fa-phone"></i>}
          isImportant={true}
          type={"text"}
          name={"phone"}
          placeholder={"+91 8800688763"}
        />
        <InputComponent
          label={"Address"}
          icon={<i className="fa-solid fa-globe"></i>}
          isImportant={false}
          type={"text"}
          name={"address"}
          placeholder={"Gurugram ,India"}
        />
        <img src="/map.png" alt="map" />

        <InputComponent
          label={"Sale value"}
          icon={<i className="fa-solid fa-indian-rupee-sign"></i>}
          isImportant={false}
          type={"text"}
          name={"sale"}
          placeholder={"50,00,000"}
        />
        <div className="inputBox">
          <i className="fa-regular fa-calendar-days"></i>
            <DatePicker
              selected={Date}
              onChange={(date) => setDate(date)}
              dateFormat="dd MMMM yyyy"
              placeholderText="29 August 2023"
            />
          </div>
        <InputComponent
          label={"Time"}
          icon={<i className="fa-regular fa-clock"></i>}
          isImportant={false}
          type={"time"}
          name={"time"}
          placeholder={"20:21 pm"}
        />
        <div className="dropdown">
          <label>Options</label>
          <div className="dropdown-list">
            <i className="fa-solid fa-list"></i>
            <select name="option" id="" className="custom-arrow">
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c">c</option>
            </select>
          </div>
        </div>
        <div className="dropdown">
          <label>Products</label>
          <div className="dropdown-list">
            <i className="fa-solid fa-list"></i>
            <select name="product" id="" className="custom-arrow">
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c">c</option>
            </select>
          </div>
        </div>
        <div className="textarea">
          <label>Note</label>
          <textarea
            name="note"
            id="note"
            cols="135"
            rows="10"
            className="dropdown-list fixed-textarea"
          ></textarea>
        </div>
        <div className="submitBtn">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
          >
            Add lead
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Forms;

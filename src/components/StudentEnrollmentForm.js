import React from "react";

import Label from "./Label";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addStudent } from "../actions/formActions";

const StudentEnrollmentForm = ({ formReducer, addStudent }) => {
  const students = formReducer.students;
  const onFormSubmit = (event) => {
    event.preventDefault();
    const length = students.length;

    // if (!namefield.value) {
    //   alert("Name is missing");
    //   return;
    // } else {
    //   if (namefield.value.length > 20) {
    //     alert("Enter a name less than 20 characters");
    //     return;
    //   }
    // }

    // if (!phonenumberfield.value) {
    //   alert("Phone Number is missing");
    //   return;
    // } else {
    //   if (
    //     !phonenumberfield.value.match(/[1-9]*/g) ||
    //     phonenumberfield.value.length != 10
    //   ) {
    //     alert("Enter a valid phone number");
    //     return;
    //   }
    // }

    const id = length + 1;
    const avatar = `https://i.pravatar.cc/50?img=${id}`;

    const newstudent = {
      id,
      name: namefield.value || "Willian Smith",
      phone: phonenumberfield.value || "+1 (746) 983 0934",
      address: addressfield.value || "Brampton, CA",
      avatar
    };

    addStudent(newstudent);
  };

  let namefield;
  let phonenumberfield;
  let addressfield;

  return (
    <form className="form-container" onSubmit={onFormSubmit}>
      <div className="field-container">
        <Label labelName="Enter Student Information" />
      </div>
      <div className="field-container">
        <Label labelName="Name" />
        <div className="input-field-container">
          <input
            className="input-field"
            placeholder="Enter your name"
            type="text"
            ref={(n) => (namefield = n)}
          ></input>
        </div>
      </div>

      <div className="field-container">
        <Label labelName="Phone Number" />
        <div className="input-field-container">
          <input
            className="input-field"
            placeholder="Enter your phone number"
            type="text"
            ref={(p) => (phonenumberfield = p)}
          ></input>
        </div>
      </div>

      <div className="field-container">
        <Label labelName="Address" />
        <div className="input-field-container">
          <textarea
            className="input-field"
            placeholder="Enter your address"
            ref={(a) => (addressfield = a)}
          />
        </div>
      </div>

      <div className="button-container">
        <button className="submit-button"> SUBMIT </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    formReducer: state.formReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addStudent,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentEnrollmentForm);

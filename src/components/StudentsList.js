import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeStudent } from "../actions/formActions";

const StudentsList = ({ students, removeStudent }) => {

  const onRemove = (id, event) => {
    event.preventDefault();
    removeStudent(id);
  };

  const studentsarray = students.map((student, key) => {
    const id = student.id;
    return (
      <li type="none" key={key} className="list-item">
        <div className="list-item-container">
          <div>
            <img className="list-item-avatar" src={student.avatar} alt="photo"></img>
          </div>
          <div>
            <div className="list-item-name">{student.name}</div>
            <div className="list-item-phone">{student.phone}</div>
            <div className="list-item-address">{student.address}</div>
          </div>
          <div>
            <button className="remove-button" onClick={(e) => {onRemove(id, e)}}>x</button>
          </div>
        </div>
      </li>
    );
  });

  const length = students.length;

  return (
    <div>
      <p className="heading">There are {length} students </p>
      {studentsarray}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.formReducer.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      removeStudent,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);

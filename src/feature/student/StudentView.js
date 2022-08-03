import { addAgeAction, changeNameAction } from "./state/StudentAction";

import React, { Component } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppFormInput from "../../component/AppFormInput";
import { LABEL } from "../../app/constants";
import AppButton from "../../component/AppButton";

const StudentView = (props) => {
  const {
    handleSubmit,
    handleAgeClick,
    handleNameChange,
    newNameValue,
    student,
    books,
  } = props;
  return (
    <div>
      <AppFormInput
        id="student"
        label={LABEL["Student.label"].value}
        value={newNameValue}
        onValueChange={handleNameChange}
      />

      {/* <label>
        Name:
        <input type="text" value={newNameValue} onChange={handleNameChange} />
      </label> */}

      <div>
        {student.name} {student.age}{" "}
      </div>

      <AppButton
        handleClick={handleSubmit}
        label={LABEL["Student.change"].value}
      />

      {/* <button onClick={handleSubmit}> Change Name </button> */}

      <AppButton
        handleClick={handleAgeClick}
        label={LABEL["Age.click"].value}
      />

      {/* <div>
        <button onClick={handleAgeClick}> Add Age </button>
      </div> */}

      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </div>
  );
};

// class StudentView extends Component {

//   render() {
//     const { student } = this.props;
//     console.log(student);
//     return (
//       <div>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={this.state.nameValue}
//             onChange={this.handleNameChange}
//           />
//         </label>

//         <div>
//           {student.name} {student.age}{" "}
//         </div>

//         <button onClick={this.handdleSubmit}> Change Name </button>

//         <div>
//           <button onClick={this.handleAddAgeClick}> Add Age </button>
//         </div>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   addAgeAction,
//   changeNameAction,
// };

// const mapStateToProps = (state) => {
//   return { student: state.studentReducer };
// };

// const mapStateToProps = (state) => {
//   return { student: state.student };
// };

// di rooterReducer, bisa kita rename

// return combineReducers({
//   student: studentReducer,
// });

// StudentView.propTypes = {
//   student: PropTypes.shape({
//     name: PropTypes.string,
//     age: PropTypes.number,
//   }).isRequired,
//   addAgeAction: PropTypes.func,
//   changeNameAction: PropTypes.func,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(StudentView);

export default StudentView;

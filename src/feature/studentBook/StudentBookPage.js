import React, { Component } from "react";
import { connect } from "react-redux";

import { addStudentBookAction } from "./state/StudentBookAction";

class StudentBookPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBookValue: "",
    };
  }

  onNewBookChange = (event) => {
    this.setState({
      newBookValue: event.target.value,
    });
  };

  onSubmitStudentBook = () => {
    this.props.addBookAction({
      student: this.props.student.name,
      book: this.state.newBookValue,
    });
  };

  render() {
    return this.props.view({
      newBookValue: this.state.newBookValue,
      handleSubmit: this.onSubmitStudentBook,
      handleNewBookChange: this.onNewBookChange,
      student: this.props.student,
      books: this.props.studentBook.books,
    });
  }
}

const mapDispatchToProps = {
  addBookAction: addStudentBookAction,
};

const mapStateToProps = (state) => {
  return {
    studentBook: state.bookReducer,
    student: state.studentReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentBookPages);

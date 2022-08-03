import React, { Component } from "react";
import { connect } from "react-redux";
import BookService from "../../services/BookServices";

import { addStudentBookAction } from "./state/StudentBookAction";

class StudentBookPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBookValue: "",
    };
    // add api disini

    this.service = BookService();
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

  onPostStudentBook = async () => {
    try {
      const response = await this.service.postBook(this.props.studentBook);
      console.log(response);
    } catch (e) {
      alert("oops... something when wrong");
    }
  };

  render() {
    return this.props.view({
      newBookValue: this.state.newBookValue,
      handleSubmit: this.onSubmitStudentBook,
      handleNewBookChange: this.onNewBookChange,
      student: this.props.student,
      books: this.props.studentBook.books,

      handlePostBook: this.onPostStudentBook,
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

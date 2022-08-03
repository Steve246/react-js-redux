import React, { Component } from "react";

import { connect } from "react-redux";

import { addAgeAction, changeNameAction } from "./state/StudentAction";

class StudentPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({
      nameValue: event.target.value,
    });
  };

  handdleSubmit = () => {
    this.props.changeNameAction(this.state.nameValue);
  };

  handleAddAgeClick = () => {
    this.props.addAgeAction();
  };

  render() {
    return this.props.view({
      handleSubmit: this.handdleSubmit,
      handleAgeClick: this.handleAddAgeClick,
      handleNameChange: this.handleNameChange,
      newNameValue: this.state.nameValue,
      student: this.props.student,
      books: this.props.studentBook.books,
    });
  }
}

const mapDispatchToProps = {
  addAgeAction,
  changeNameAction,
};

const mapStateToProps = (state) => {
  return {
    student: state.studentReducer,
    studentBook: state.bookReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentPages);

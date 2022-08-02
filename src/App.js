import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import ActionType from "./redux/reducer/GlobalActionType";
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <p> Test </p>
        <h1> {this.props.numb} </h1>
        <button onClick={this.props.handlePlus}> + </button>
        <button onClick={this.props.handleMinus}> - </button>
        <button onClick={this.props.handleTime2}> X 2 </button>
      </div>
    );
  }
}
//  cara mengirim status menggunakan mapStateToProps
const MapStateToProps = (state) => {
  return {
    numb: state.globalNumber,
  };
};

// cara mengirim action menggunakan mapDispatchToProps

const MapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: ActionType.PLUS }),
    handleMinus: () => dispatch({ type: ActionType.MINUS }),
    handleTime2: () => dispatch({ type: ActionType.TIME }),
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(App);

// connect akan nyambungin react dan redux, dia mengikat redux dan reactnya

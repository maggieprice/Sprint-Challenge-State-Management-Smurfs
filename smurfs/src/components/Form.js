import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewSmurf, fetchSmurf } from "../actions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  handleChanges = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    })
  }

  theNewSmurf = e => {
    // e.preventDefault();
    this.props.addNewSmurf(this.state.smurf);
    return (this.fetchSmurf)
  };
 

  render() {
   
   return (
      <form onSubmit={this.theNewSmurf}>

                <input
                type="text"
                name="name"
                value={this.state.smurf.name}
                onChange={this.handleChanges}
                placeholder="name"
                />
                <input
                type="text"
                name="age"
                value={this.state.smurf.age}
                onChange={this.handleChanges}
                placeholder="age"
                />
                <input
                type="text"
                name="height"
                value={this.state.smurf.height}
                onChange={this.handleChanges}
                placeholder="height"
                />
                 <button type="submit">
              Add Smurf
            </button>
                </form> 
    
    );
  }
}

// This code takes the state in 'store' and sets it to the prop
const mapStateToProps = state => {
  return {
    isloadingProps: state.isLoading,
    theSmurfsProps: state.smurfs,
    errorProps: state.error
  };
};

// This code connects this component to the 'store'
export default connect(mapStateToProps, { addNewSmurf })(Form);
// import {smurfReducer, initialState} from '../reducers/reducer';
import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurf, addNewSmurf } from '../actions';
import Smurf from './Smurf';
import Form from './Form'


const SmurfList = props => {
    
    return (
    <div className="smurf-list">
        <div>
            
            {!props.theSmurfProps && !props.isisloadingProps && (
                <h2>Click to See the Smurfs!</h2>
            )}
            <button onClick={props.fetchSmurf}>See the Smurfs!</button>
            {/* <Form/> */}
            {props.theSmurfProps &&
                !props.isloadingProps &&
                props.theSmurfProps.map(item => <Smurf key={item.id} smurf={item} />) }
        </div>
        
        </div>  
    )
};

const mapStateToProps = state => {
    return {
      isloadingProps: state.isLoading,
      theSmurfProps: state.smurfs,
      errorProps: state.error,
      newSmurf: state.newSmurf,
      smurfs: state.smurfs
    };
  };
  
  // This code connects this component to the 'store'
  export default connect(mapStateToProps, { fetchSmurf, addNewSmurf })(SmurfList);
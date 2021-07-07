import axios from 'axios';
import React, {useEffect} from 'react';
// import Form from '../components/Form';

export const fetchSmurf = ()  => {
 
 return dispatch => {
   dispatch({ type: 'FETCHING_SMURF' });
    axios
  .get("http://localhost:3333/smurfs")
  .then(res => {
    dispatch({ type: 'FETCHING_SMURF_SUCCESS', payload: res.data });
  })
  .catch(err => console.log(err));

};
}
export const addNewSmurf = smurf => {
  return dispatch => {
    dispatch({ type: "ADD_SMURF" });
    
    axios
      .post("http://localhost:3333/smurfs/", smurf)
      .then(res => {
        dispatch({ type: "ADD_SMURFING_SUCCESS", payload: res.data });
      })
      .catch(err => console.log(err));
    }
  };


 
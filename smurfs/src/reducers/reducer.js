
export const initialState =   { 
 isLoading: false,
 smurfs: null,
 error: ''
};

export const smurfReducer = (state=initialState, action) => {
switch(action.type) {

    // case 'ADD_SMURF':
    //       const smurfs = [
    //           ...state.smurfs,
    //           { name: action.payload, age: action.payload, height: action.payload, id: Date.now() }
    //         ]
    //         return {
    //             ...state,
    //             smurfs
    //           };
    
    case 'FETCHING_SMURF':
        return {
            ...state,
            isLoading: true
        };
    case 'FETCHING_SMURF_SUCCESS':
        return {
            ...state,
            isLoading: false,
            smurfs: action.payload 
        };
        case 'ADD_SMURFING':
            return {...state,
                isLoading:true 
                }
    case 'ADD_SMURFING_SUCCESS':
    return {
        ...state,
        isLoading: false,
        smurfs: [...state.smurfs, action.payload] 
    };
    default:
      return state;  
} 

};
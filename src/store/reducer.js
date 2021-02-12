const initialState = {
    password: '1234',
    inputted:'',
    granted:null,
    denied:null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT1':
            return {...state, inputted: state.inputted + action.value};
        case 'INPUT2':
            return {...state, inputted: state.inputted + action.value};
        case 'INPUT3':
            return {...state, inputted: state.inputted + action.value};
        case 'INPUT4':
            return {...state, inputted: state.inputted + action.value};
        case 'INPUT5':
            return {...state, inputted: state.inputted + action.value};
        case 'INPUT6':
            return {...state, inputted: state.inputted + action.value};
        case 'INPUT7':
            return {...state, inputted: state.inputted + action.value};
        case 'INPUT8':
            return {...state, inputted: state.inputted + action.value};
        case 'INPUT9':
            return {...state, inputted: state.inputted + action.value};
        case 'INPUT0':
            return {...state, inputted: state.inputted + action.value};
        case 'REFRESH': 
            return {...state, inputted:action.value};
        case 'MATCH':
            if (state.inputted === state.password) {
                return {...state, granted:true, inputted:action.value};
            } else {
                return {...state, denied:true, inputted:action.value};
            }
        case 'REMOVE':
            return {...state, granted:false, denied:false, inputted:action.value};
        case 'DELETE':
            return {...state, inputted: state.inputted.substring(0, state.inputted.length - 1)};
    }
    return state
};

export default reducer;
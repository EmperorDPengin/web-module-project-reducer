import { ADD_ONE,
        APPLY_NUMBER,
        CHANGE_OPERATION,
        CLEAR_DISPLAY,
        SET_MEMORY } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const modifyMemory = (stateValues, memoryOperation) => {
    switch(memoryOperation) {
        case("M+"):
            return({
                ...stateValues,
                memory: stateValues.total
            })
        case("MR"):
            return({
                ...stateValues,
                total: stateValues.total + stateValues.memory
            })
        case("MC"):
            return({
                ...stateValues,
                memory: 0
            })
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        case(CLEAR_DISPLAY):
            return({
                ...state,
                total: 0
            });
        case(SET_MEMORY):
            return modifyMemory(state, action.payload)
            
        default:
            return state;
    }
}

export default reducer;
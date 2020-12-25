//Reducer a function that takes in the old state  and an action which returns new state
let transactions;
const contextReducer = (state,action) =>{
    switch (action.type) {
        case 'DELETE_TRANSACTION':
             transactions = state.filter((t)=> t.id !== action.payload);
            return transactions;
        case 'ADD_TRANSACTION':
             transactions = [action.payload,...state];
            return transactions;
        default:
            return state;
    }
}

export default contextReducer;
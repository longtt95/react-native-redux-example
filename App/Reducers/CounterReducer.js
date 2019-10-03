import * as Actions from '../Actions/ActionTypes';

const CounterReducer = (state ={count:0},action) => {
    console.log('2. switch counter reducers');
    switch (action.type){
        case Actions.COUNTER_INCREMENT:
            console.log('3. +++++++++++++');
            return {
                count: state.count + 1
            };
        case Actions.COUNTER_DECREMENT:
            console.log('4. -------------');
            return {
                count: state.count - 1
            };
        default:
            console.log('5. 0000000000000000000');
            return state;
    }
}
export default CounterReducer;

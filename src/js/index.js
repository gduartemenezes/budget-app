/*jshint esversion: 8 */
import Input from './models/Input';
import Budget from './models/Budget';
import * as inputView from './views/inputView';
import {elements} from './views/base';


const state = {};
const controlInput = () => {
    // get user's Input
    const data = inputView.getInput();
    if(data){
        state.input = new Input(data);
    }
    console.log(state.input);
};

const controlBudget = () => {
    if(!state.budget) state.budget = new Budget();
    const el = state.input;
    state.budget.addItem(el.type, el.desc, el.value);
    state.budget.calcBudget();
    console.log('my budget:'  + state.budget.budget);
   
};


elements.addBtn.addEventListener('click', () => {
    controlInput();
    controlBudget();
    
});
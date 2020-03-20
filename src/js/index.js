/*jshint esversion: 8 */
import Input from './models/Input';
import Budget from './models/Budget';
import * as inputView from './views/inputView';
import {elements} from './views/base';



const state = {};
const controlInput = () => {
    const data = inputView.getInput();
    if(data){
        state.input = new Input(data);
    }

};

const controlBudget = () => {
    if(!state.budget) state.budget = new Budget();
    const el = state.input.data;

    state.budget.addItem(el.type, el.desc, el.value);
    console.log(state.budget);
   
};


elements.addBtn.addEventListener('click', () => {
    controlInput();
    controlBudget();
    
});
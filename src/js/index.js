/*jshint esversion: 8 */
import Input from './models/Input';
import * as inputView from './views/inputView';
import {elements} from './views/base';


const state = {};

const controlBudget = () => {
    const data = inputView.getInput();
    if(data){
        state.input = new Input(data);
    }
    console.log(state.input);
};

elements.addBtn.addEventListener('click', e => controlBudget());
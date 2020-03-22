/*jshint esversion: 8 */
import Input from './models/Input';
import Budget from './models/Budget';
import * as inputView from './views/inputView';
import * as budgetView from './views/budgetView';
import {elements, month} from './views/base';



const initial = () => {
    elements.budgetValue.textContent = 0;
    elements.incTotal.textContent =  0;
    elements.expTotal.textContent = 0;
    elements.percentageTotal.textContent = '-- %';
    elements.inputType.value = '';
    elements.inputDesc.value = '';
    elements.inputValue.value = '';
    elements.monthLabel.textContent = `${month[new Date().getMonth()]}`;
};
const state = {};
initial();


const controlInput = () => {
    // get user's Input
    const data = inputView.getInput();
    if(data){
        state.input = new Input(data);
    }
    console.log(state.input);
    //render input to UI
    inputView.renderItem(state.input);
};

const controlBudget = () => {
    //creates a new budget
    if(!state.budget) state.budget = new Budget();
    const el = state.input;
    // add new item 
    state.budget.addItem(el.id, el.type, el.desc, el.value);
    // calculate the current budget
    state.budget.calcBudget();
    console.log('my budget:'  + state.budget.budget);
    // calc each exp percentage
    console.log(state.budget); 
    //inputView.renderItem(state.budget.allData);
    
    //calc all exp percentage


    budgetView.renderBudget(state.budget);
};


/////////////////// UI HANDLERS
// ADD ITEM HANDLER
elements.addBtn.addEventListener('click', () => {
    
    controlInput();
    controlBudget();
    
});


// DELETE ITEM HANDLER
elements.listContainer.addEventListener('click', e =>{
    // gets item id  
    let itemID;
      if(e.target.closest('.item')){
            itemID = e.target.closest('.item').id;
      }
      
    // delete item UI and Data Structure
    inputView.deleteItem(itemID);
    state.budget.deleteItem(itemID);

    // Update the Budget UI and Data Structure
    state.budget.calcBudget();
    budgetView.renderBudget(state.budget);

    
});

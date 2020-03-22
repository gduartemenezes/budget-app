/* jshint esversion: 8*/ 
import {elements} from './base';

export const renderBudget = item => {
    console.log('hi im trying to show up' + item.budget);
    elements.budgetValue.textContent = item.budget;
    elements.incTotal.textContent =  item.incTotal;
    elements.expTotal.textContent = item.expTotal;
    elements.percentageTotal.textContent = `${item.percentageTotal} %`;

};




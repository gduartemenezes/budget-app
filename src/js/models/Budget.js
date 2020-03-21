/* jshint esversion: 8 */
import uniqid from 'uniqid';
export default class Budget {
    constructor(){
        this.allData = [];
    }

    addItem(type, desc, value){
      
        const item = {
                    id : uniqid(),
                    type,
                    desc,
                    value
                };
        this.allData.push(item);
        return item;

    }

    calcBudget() {
        let inc = 0;
        let exp = 0;
        this.allData.forEach(item =>{
            if(item.type === 'inc') {
            // sum all incomes
            inc += item.value; 
            } else if(item.type === 'exp'){
            // sum all expenses
            exp += item.value; 
            } else {
                return -1;
            }
        });
        // calculate the current budget
        this.budget = inc - exp;
    }
}
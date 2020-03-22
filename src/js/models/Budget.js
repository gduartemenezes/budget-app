/* jshint esversion: 8 */
export default class Budget {
    constructor(){
        this.allData = [];
    }

    addItem(id, type, desc, value){
      
        const item = {
                    id,
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
            inc += parseInt(item.value); 
            } else if(item.type === 'exp'){
            // sum all expenses
            exp += parseInt(item.value); 
            } else {
                return -1;
            }
        });
        // calculate the current budget
        this.budget = inc - exp;
        this.incTotal = inc;
        this.expTotal = exp;
    }
    deleteItem (id) {
        const index = this.allData.findIndex(el => el.id === id);
        this.allData.splice(index, 1);
    }
}
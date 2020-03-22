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
            inc += parseFloat(item.value); 
            } else if(item.type === 'exp'){
            // sum all expenses
            exp += parseFloat(item.value); 
            } else {
                return -1;
            }
        });
        // calculate the current budget
        this.budget = (inc - exp).toFixed(2);
        this.incTotal = inc;
        this.expTotal = exp;
        if(inc > 0) {
            this.percentageTotal = ((exp / inc) * 100).toFixed(1);
        }
    }
    deleteItem (id) {
        const index = this.allData.findIndex(el => el.id === id);
        this.allData.splice(index, 1);
    }

    calcPercentage (item) {
        if(item.type === 'exp'){
            this.item.percentage = parseFloat(this.item.value / this.incTotal); 
        }
        
    }
    
}
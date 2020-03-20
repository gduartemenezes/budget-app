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

    

}
/* jshint esversion:8 */
import uniqid from 'uniqid';
import Budget from './Budget';

export default class Input{
    constructor(data){
        this.id = uniqid();
        this.type = data.type;
        this.desc = data.desc;
        this.value = data.value;
               
    }

    
}
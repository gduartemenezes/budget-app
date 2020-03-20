/* jshint esversion: 8*/ 
import {elements} from './base';

export const getInput = () => {
    const item = {
    type : elements.inputType.value,
    desc : elements.inputDesc.value,
    value : elements.inputValue.value
    };
    
};
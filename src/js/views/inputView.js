/* jshint esversion: 8*/ 
import {elements} from './base';

export const getInput = () => {
    const data = {
    type : elements.inputType.value,
    desc : elements.inputDesc.value,
    value : elements.inputValue.value
    };
    return data;  
};

export const renderItem = item => {
   console.log(item);
    const markupInc = `
        <div class="item clearfix" id="${item.type}-${item.id}">
            <div class="item__description">${item.desc}</div>
            <div class="right clearfix">
                <div class="item__value">${item.value}</div>
                <div class="item__delete">
                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
            </div>
        </div>

    `;
    const markupExp = `
        <div class="item clearfix" id="${item.type}-${item.id}">
            <div class="item__description">${item.desc}</div>
            <div class="right clearfix">
                <div class="item__value">- ${item.value}</div>
                <div class="item__percentage">${item.percentage} %</div>
                <div class="item__delete">
                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                </div>
            </div>
        </div>
    `;

    if(item.type === 'inc'){
        elements.incList.insertAdjacentHTML('beforeend', markupInc);
    }else if(item.type === 'exp') {
        elements.expList.insertAdjacentHTML('beforebegin', markupExp);
    } else {
        console.log('not rendering');
    }

};

export const deleteItem = id => {
    const el = document.getElementById(id);
    el.parentNode.removeChild(el);
}

                       
const _ = require('lodash');
var order = [
    { id: '1', amount: 48, rebateAmount: 20.17 },
    { id: '2', amount: 48, rebateAmount: 0 },
    { id: '3', amount: 48, rebateAmount: 0 },
    { id: '4', amount: 48, rebateAmount: 0 },
    { id: '5', amount: 48, rebateAmount: 0 },
    { id: '6', amount: 48, rebateAmount: 0 }
];

async function schedule(total, order) {
    let list = [];
        for(let i = 0 ; i < order.length; i++){
            const instance = calculating(total, order[i]);
            list.push(instance.object);
            total = Number(instance.result);
            console.log(instance)
            if (total == 0) break;
        }
    return list;
}

function calculating(result, object) {
    if (result > object.amount - object.rebateAmount) {
        result = Number(result) - Number(object.amount - object.rebateAmount);
        object.rebateAmount = Number(object.amount);
        // console.log(object,result);
        return { object, result };
    }else {
        object.rebateAmount = Number(object.rebateAmount + result);
        result = 0;
        // console.log(object,result);
        return { object, result };
    }
}

async function init1() {
    const result = await schedule(40,[{amount:50,rebateAmount:20}, {amount:50,rebateAmount:0}]);
    console.log(result);
}

async function init2() {
    const result = await schedule(200,order);
    console.log(result);
}

// init1();
// init2();
// order[0].rebateAmount = 48;
// console.log(order[0]);

const clone = order
const temp = [...order];
// console.log(temp);
// console.log(clone)

// console.log(temp === order)
// console.log(clone === order)
// const profitId = order.map(element => {return element.id});
// console.log(profitId);
const sum = _.sumBy(order, (element)=> { return element.amount - element.rebateAmount });
console.log(sum)
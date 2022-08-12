const chai= 'chai';
const spy = chai.spy();
function receivesAFunction(spy) {
    spy();
}


function returnsANamedFunction() {
    function named() {return " "}
    return named;
}

function returnsAnAnonymousFunction() {
    return function(){}
}
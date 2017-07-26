//Also i've written the function below. But i've rewrited it as the lecturer told me.
//
//function compose(...fns) {
//    return function (...args) {
//        return fns.reduceRight(function (PrevFunction, currentFunction) {
//            return currentFunction(PrevFunction.apply(null, args));
//        });
//    }
//}

function compose() {
        return Array.prototype.reduceRight.call(arguments, function (prevFunc, currecntFunction) {
            return function(){
                return currecntFunction(prevFunc.apply(null, arguments));
            };
        })
}

module.exports = compose;

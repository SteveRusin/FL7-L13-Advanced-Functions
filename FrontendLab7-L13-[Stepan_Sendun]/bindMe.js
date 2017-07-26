Function.prototype.bindMe = function (ThisObj) {
    var fThis = this,
        toBind = function () {
            return fThis.apply(ThisObj, arguments);
        };
    return toBind;
}
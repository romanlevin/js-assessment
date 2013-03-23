if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function (a, b) { return a + b;});
    },

    remove : function(arr, item) {
        return arr.filter(function (a) {return a !== item;});
    },
    
    removeWithoutCopy : function(arr, item) {
        var newArr = arr.filter(function (a) {return a !== item;});
        while(arr.length > 0) arr.pop();
        while(newArr.length > 0) arr.push(newArr.shift());
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        return arr.filter(function (a) {return item === a;}).length;
    },

    duplicates : function(arr) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            var current = arr[i];
            if(this.count(arr, current)) {
                this.removeWithoutCopy(arr, current);
                result.push(current);
            }
        }
        return result;
    },

    square : function(arr) {
        return arr.map(function (a) {return a*a;});
    },

    findAllOccurrences : function(arr, target) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) result.push(i);
        }
        return result;
    }
  };
});

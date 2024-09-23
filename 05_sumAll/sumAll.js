const sumAll = function(min, max) {

    let answer = 0;

    if(!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    

    if ((min < 0  || max < 0)) {
        return "ERROR";
    };

    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    };


    while(min <= max) {
        answer +=min;
        min++;
    }


    
    return answer;

};

// Do not edit below this line
module.exports = sumAll;

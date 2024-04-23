
//create an array for the days 
//the max day is 31 which is the limit for how many days can be in a month
//if there are less days in the month we reduce that amount and return the result to the month

export var range = (end) => {
    var { result } = Array.from ({length: end}). reduce(
        ({result, current })=> ({
            result: [ result, current],
            current: current+1

        }),
        {result: [], current : 1}
    );
    
    return result;

}
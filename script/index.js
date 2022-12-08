// Constant Time: O(1)
const constantTime = (array) => {
    console.log(`The first element in our list is: ${array[0]}`);
};


// Linear Time: O(n)
const linearTime = (array) => {
    for (var i = 0; i < array.length, i++;) {
        console.assert.log(`Element ${i} is ${array[i]}`);
    };
};


// Logarithm Time: O(log n)
const binarySearch = (array, x) => {
    let start = 0, end = array.length-1;
         
    while (start<=end){
 
        let mid=Math.floor((start + end)/2);
  
        if (array[mid] === x) {
            return `found it! -> ${array[mid]}`;
        } else if (array[mid] < x) {
             start = mid + 1;
        } else {
             end = mid - 1;
        };
    };
  
    return 'element is not in the array';
};


// Quadratic Time: O(n^2)
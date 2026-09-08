// Task 1
// function countdowntoZero(n) {
//     if (n < 0 ) {
//         console.log("done!")
//         return
//     }
//     console.log(n)
//     countdowntoZero(n-1)
// }
// countdowntoZero(3)


// Task 2
// function factorial(n) {
//     if (n <= 1) return 1

//     return n * factorial(n-1)
// }

// const output = factorial(4)
// console.log(output)


// Task 3
// function sumRange(n) {
//     if (n <= 1) return 1

//     return n + sumRange(n -1)
// }

// const output = sumRange(5)
// console.log(output)


// Task 4
// function sumArray(arr) {
//     if (arr.length < 1) return 0

//     return arr[0] + sumArray(arr.slice(1))
// }

// const output = sumArray([10, 20, 30, 40, 50])
// console.log(output)


// Task 5
// function reverseString(str) {
//     if (str.length === 1) return str

//     return str[str.length - 1] + reverseString(str.slice(0, -1))
// }

// const output = reverseString("hello")
// console.log(output)


// Task 6.1
// function countOccurrences(arr, target) {
//     if (arr.length < 1) return 0 

//     if (arr[0] === target) {
//         return 1 + countOccurrences(arr.slice(1), target)
//     } else {
//         return 0 + countOccurrences(arr.slice(1), target)
//     }
// }

// const output = countOccurrences([1, 2, 1, 3, 5], 1)
// console.log(output)

// Task 6.2
// function countOccurrences(arr, target) {

//     const length = arr.length
//     let i = length -1
    
//     function count2(i) {
//         if (i < 0 ) return 0 

//         if (arr[i] === target) {
//             i--
//             return 1 + count2(i)
//         } else {
//               i--
//             return 0 + count2(i)
//         }
//     }

//     const answer = count2(i)
//     return answer 
// }

// const output = countOccurrences([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 5], 1)
// console.log(output)

// Task 6.3
// function countOccurrences(arr, target, i = arr.length) {

//     if (i < 0 ) return 0

//     if (arr[i] === target) {
//             i--
//             return 1 + countOccurrences(arr, target, i)
//         } else {
//               i--
//             return 0 + countOccurrences(arr, target, i)
//         }
// }

// const output = countOccurrences([ 1, 1, 1, 1, 1, 4, 6, 5], 6)
// console.log(output)


// Task 7
// function fibonacci(n) {
//     if (n === 0) return 0 
//     if (n === 1) return 1 

//     return fibonacci(n - 1) + fibonacci(n - 2)
// } 

// const output = fibonacci(6)
// console.log(output)



// Task 8.
// function flatten(arr) {
//     const answer = []

//     for (let i = 0; i < arr.length; i++) {
//         if(typeof arr[i] != 'object') {
//             answer.push(arr[i])
//         } else {
//             answer.push( ...flatten(arr[i]))
//         }
//     }

//     return answer
// } 

// const test = [1, [2, [3]], 4]

// const output = flatten(test)
// console.log({output})



// const output = flatten([3, [2], 10])
// console.log(output)


// Task 9.1 binarySearch(arr, target, left, right)
// function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    
//     if (right === left && arr[right] != target) return -1

//     const middleIndex = Math.floor((left + right + 1) / 2)
    
//     if (arr[middleIndex] === target) {
//         return middleIndex
//     } else if (arr[middleIndex] < target) {
//        return binarySearch(arr, target, middleIndex, right)
//     } else {
//        return binarySearch(arr, target, left, middleIndex - 1)
//     }
// }

// const output = binarySearch([1, 5, 7, 9], 9)
// console.log(output)

// Task 9.2 binarySearch(arr, target, left, right)
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    const middle = Math.floor((left + right) / 2)
    
    if (arr[middle] === target) return middle
    if (left > right) return -1

    if (arr[middle] > target) {
        return binarySearch(arr, target, left, right = middle - 1)
    } else {
        return binarySearch(arr, target, left = middle + 1, right)
    }
}





const break1 = binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 60);
console.log("Break 1:", break1); // Expected: 5

const break2 = binarySearch([], 5);
console.log("Break 2:", break2); // Expected: -1

const break3 = binarySearch([1, 2, 3, 20, 30, 40, 50], 25);
console.log("Break 3:", break3); // Expected: -1


// Test 1 (Expected output: 3)
const test1 = binarySearch([1, 3, 5, 7, 9], 7);
console.log("Test 1:", test1);


// Test 2 (Expected output: -1)
const test2 = binarySearch([1, 3, 5, 7, 9], 4);
console.log("Test 2:", test2);

// Test 3 (Expected output: 0)
const test3 = binarySearch([2, 4, 6, 8, 10, 12], 2);
console.log("Test 3:", test3);

// Test 4 (Expected output: -1)
const test4 = binarySearch([1, 2, 3], 10);
console.log("Test 4:", test4);




// Task 10.1 Merge Sort - Naive
// function merge(leftArr, rightArr) {
//     if (leftArr.length === 0) return rightArr
//     if (rightArr.length === 0) return leftArr
    
    
//     const lengthSum = leftArr.length + rightArr.length
    
//     let i = 0
//     let j = 0

//     const answer = []


//     for (let k = 0; k <= lengthSum - 1; k++) {
//         if (i == leftArr.length) {
//             answer.push(...rightArr.slice(j))
//             return
//         }
//         if (j == rightArr.length) {
//             answer.push(...leftArr.slice(i))
//             return
//         }

//         if (leftArr[i] >= rightArr[j]) {
//             j ++
//             answer.push(rightArr[j-1]) 
//         } else if (leftArr[i] < rightArr[j]) {
//             i++
//             answer.push(leftArr[i-1]) 
//         }
//     }
//     return answer
// }

// const output = merge([3], [])
// console.log(output)



// // Task 10.1 Merge Sort - Naive #2
// function merge(leftArr, rightArr) {
//     let i = 0
//     let j = 0

//     const answer = []

//     while (i < leftArr.length && j < rightArr.length) {
//         if (leftArr[i] >= rightArr[j]) {
//             answer.push(rightArr[j])
//             j++
//         } else {
//             answer.push(leftArr[i])
//             i++
//         }
//     }
//     answer.push(...leftArr.slice(i))
//     answer.push(...rightArr.slice(j))

//     return answer
// }

// const output = merge([1, 4, 7, 9, 10], [3])
// console.log(output)


// Task 10.2 Merge Sort.  ------------- TODO ---------------
// function merge(arr) {
//     if (arr.length === 1) return arr
    
//     const middle = Math.floor(arr.length / 2)

//     console.log("arr.length", arr.length)
//     console.log({middle})


//     const left = arr.slice(0, middle)
//     const right = arr.slice(middle)

//     console.log({left, right})


//     let i = 0
//     let j = 0

//     // const answer = []

//     while (i < left.length && j < right.length) {
//         if (merge(left)[i] >= merge(right)[j]) {
//             console.log("entered here 1")
//             // answer.push(right[j])
//             j++
//             return right[j - 1]
//         } else {
//             console.log("entered here 1")
//             // answer.push(left[i])
//             i++
//             return left[i - 1]

//         }
//     }
    
//     // answer.push(...left.slice(i))
//     // answer.push(...right.slice(j))


// }

// const output = merge([1, 4, 7, 3, 5])
// console.log(output)
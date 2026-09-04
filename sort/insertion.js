export function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) { 
        const currentValue = arr[i]; 
        let j = i - 1

        while (arr[j] > currentValue) { 
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = currentValue
    }
    return arr
}


// Time: 
// Big O(N^2)
// Omega(N)

// Space: 
// Theta(1)



// V1 of the algorithm
// export function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let currentIndex = i
//         for (let j = i - 1; j >= 0; j--) {
//             if (arr[currentIndex] < arr[j]) {
//                 const temp = arr[currentIndex]
//                 arr[currentIndex] = arr[j]
//                 arr[j] = temp

//                 currentIndex -= 1
//             }
//         }
//     }
//     return arr
// }

// Time: 
// Big O(N^2) 
// Omega(N^2)

// Space: 
// Theta(1)
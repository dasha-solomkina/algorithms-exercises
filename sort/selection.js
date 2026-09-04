export function selectionSort(arr){
    for (let i = 0; i < arr.length - 1; i++){
        let currentMinIndex = i
        for (let j = i + 1; j < arr.length; j ++) {
            if (arr[currentMinIndex] > arr[j]) {
                currentMinIndex = j
            }
        }
        if (currentMinIndex != i) {
            const temp = arr[i]
            arr[i] = arr[currentMinIndex]
            arr[currentMinIndex] = temp
        }
    
    }


    return arr
}


// Time:
// Big O(N^2)
// Theta O(N^2)

// Space:
// Theta O(1)

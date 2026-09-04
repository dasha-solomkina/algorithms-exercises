export function bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++ ) {
        let wasSubMade = false // to improve Omega time notation
        for (let i = 0; i < arr.length - 1 - j; i++ ) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                wasSubMade = true // to improve Omega time notation
            }
            
        }
        if (!wasSubMade) return arr // to improve Omega time notation
    }

    return arr
}


// Time:
// Big O (N^2)
// Omega (N^2) -> after the improvement O(N)

// Space: 
// Theta O(1)

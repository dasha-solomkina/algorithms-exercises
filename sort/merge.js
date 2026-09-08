export function mergeSort(arr) {

    if (arr.length <= 1) return arr

    const left = arr.slice(0, Math.floor(arr.length / 2))
    const right = arr.slice(Math.floor(arr.length / 2))

    console.log({left})
    console.log({right})

    if (mergeSort(left) > mergeSort(right)) {
        console.log("return", [right, left])
        return right, left  
    } 
    else {
        console.log("return else", [left, right])

        return left, right
    }

    console.log({arr})
}

const testArray = [4, 5, 3,2, 1]
// const testArray = [5, 4]

mergeSort(testArray)
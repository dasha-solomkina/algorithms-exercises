export function mergeSort(arr) {

    if (arr.length <= 1) return arr

    const middle = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, middle))
    const right = mergeSort(arr.slice(middle))

    let i = 0
    let j = 0

    const answer = []

    while(i < left.length && j < right.length) {
        if(left[i] > right[j]) {
            answer.push(right[j])
            j++
        } else {
            answer.push(left[i])
            i++
        }
    }

    answer.push(...right.slice(j))
    answer.push(...left.slice(i))

    return answer
}

// Time
// Big O(N log N)
// Theta (N log N)

// Space
// Big O(N)

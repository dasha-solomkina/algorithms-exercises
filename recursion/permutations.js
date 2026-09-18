function getPermutations(array) {
  if (array.length === 0) return array
  if (array.length === 1) return [array]
  if (array.length === 2) return [array,[...array].reverse()]
  const answer = []


  for (let i = 0; i < array.length; i ++) {
    const temp = array[0]
    array[0] = array[i]
    array[i] = temp

    console.log({array})

    const variations = getPermutations(array.slice(1))
    for (let j = 0; j < variations.length; j++) {
        answer.push([array[0], ...variations[j]])
    }
  }

  return answer 
}

const test = [1, 2, 3, 4]

const output = getPermutations(test)

console.log({output})

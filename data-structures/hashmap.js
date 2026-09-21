const createNode = (key = null, value = null, nextNode = null) => ({
    key, value, nextNode
})

const createHashMap = () => {

    const loadFactor = 0.75
    let capacity = 16

    const table = new Array(capacity).fill(null);

    return {
        hash(key) {
            let hashCode = 0
            const primaryNumber = 31


            for (let i = 0; i < key.length; i++) {
                hashCode = primaryNumber * hashCode + key.charCodeAt(i)
            }

            hashCode = hashCode % capacity

            return hashCode
        },

        set(key, value) {
            const hashCode = this.hash(key)

            if (hashCode < 0 || hashCode >= capacity) {
                throw new Error("Trying to access index out of bounds");
            }

            if (table[hashCode] === null) {
                const newNode = createNode(key, value)
                table[hashCode] = newNode
            } else {
                let currentNode = table[hashCode]

                if (currentNode.key === key) {
                    currentNode.value = value
                    return
                }

                while (currentNode.nextNode != null) {
                    const nextNode = currentNode.nextNode

                    if (nextNode.key === key) {
                        nextNode.value = value
                        return
                    }

                    currentNode = currentNode.nextNode
                }

                const newNode = createNode(key, value) 
                currentNode.nextNode = newNode
            }
        },

        // todo: takes a key as an argument and returns the value that is associated with it. If the key is not found, return undefined.
        get(key) {
            const hashCode = this.hash(key)

            if (hashCode < 0 || hashCode >= capacity) {
                throw new Error("Trying to access index out of bounds");
            }

            if (table[hashCode] === null) return undefined

            let currentNode = table[hashCode]

            while (currentNode != null) {
                if (currentNode.key === key) {
                    return currentNode.value 
                } else {
                    currentNode = currentNode.nextNode
                }
            }
            return undefined
        },

        // takes a key as an argument and returns a boolean based on whether or not the key is in the hash map.
        has(key) {
            const hashCode = this.hash(key)
            if (hashCode < 0 || hashCode >= capacity) {
                throw new Error("Trying to access index out of bounds");
            }

            if (table[hashCode] === null) return false

            let currentNode = table[hashCode]

            while (currentNode != null) {
                if (currentNode.key === key) return true
                currentNode = currentNode.nextNode
            }

            return false
        },

        // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key then return true. 
        // If the key isn’t in the hash map, it should return false.
        remove(key) {
            const hashCode = this.hash(key)
            if (hashCode < 0 || hashCode >= capacity) {
                throw new Error("Trying to access index out of bounds");
            }

            if (table[hashCode] === null) return false
            
            let currentNode = table[hashCode]

            if (currentNode.key === key) {
                const nextNodes = currentNode.nextNode
                table[hashCode] = nextNodes
                return true
            }

            while (currentNode.nextNode != null) {
                const childNode = currentNode.nextNode

                if (childNode.key === key) {
                    const nextNodes =  childNode.nextNode
                    currentNode.nextNode = nextNodes
                    return true
                }
                currentNode = currentNode.nextNode
            }

            return false

        },

        // returns the number of stored keys in the hash map.
        length() {
            let keysCount = 0

            for (let i = 0; i < table.length; i++) {
                if (table[i] != null) {
                    let currentNode = table[i]
                    while (currentNode != null) {
                    keysCount++
                    currentNode = currentNode.nextNode
                    }
                }
            }

            return keysCount
        },

        // removes all entries in the hash map.
        clear() {
            return table.fill(null)
        },

        // returns an array containing all the keys (not values) inside the hash map.
        keys() {
            const answer = []

            for (let i = 0; i < table.length; i++) {
                if (table[i] != null) {
                    let currentNode = table[i]
                    while (currentNode != null) {
                        answer.push(currentNode.key)
                        currentNode = currentNode.nextNode
                    }
                }
            }

            return answer
        },

        // returns an array containing all the values (not keys) inside the hash map.
        values() {
            const answer = []

            for (let i = 0; i < table.length; i++) {
                if (table[i] != null) {
                    let currentNode = table[i]
                    while (currentNode != null) {
                        answer.push(currentNode.value)
                        currentNode = currentNode.nextNode
                    }
                }
            }

            return answer
        },

        // returns an array that contains each key-value pair in their own arrays, for example: [[firstKey, firstValue], [secondKey, secondValue]].
        entries() {
            const answer = []

            for (let i = 0; i < table.length; i++) {
                if (table[i] != null) {
                    let currentNode = table[i]
                    while (currentNode != null) {
                        answer.push([currentNode.key, currentNode.value])
                        currentNode = currentNode.nextNode
                    }
                }
            }

            return answer
        }
    }
}

const test = createHashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

const output = test.length()
console.log({output})






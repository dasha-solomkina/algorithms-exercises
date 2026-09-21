const createNode = (key = null, value = null, nextNode = null) => ({
    key, value, nextNode
})

const createHashMap = () => {

    const loadFactor = 0.75
    let capacity = 16
    let size = 0

    let table = new Array(capacity).fill(null);

    return {
        hash(key) {
            let hashCode = 0
            const primaryNumber = 31

            for (let i = 0; i < key.length; i++) {
                hashCode = (primaryNumber * hashCode + key.charCodeAt(i)) % capacity
            }

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
                size++
            } else {

                const dummy = createNode(null, null, table[hashCode])
                
                let currentNode = dummy
                while (currentNode.nextNode != null) {
                    const nextNode = currentNode.nextNode

                    if (nextNode.key === key) {
                        nextNode.value = value
                        table[hashCode] = dummy.nextNode
                        return
                    }

                    currentNode = currentNode.nextNode
                }

                const newNode = createNode(key, value) 
                currentNode.nextNode = newNode

                table[hashCode] = dummy.nextNode
                size++
            }

            const currentLoadFactor = size / capacity

            if (currentLoadFactor > loadFactor) {
                capacity = capacity * 2
                const oldValues = this.entries()
                table = new Array(capacity).fill(null);
                size = 0

                for (const [k, v] of oldValues) {
                    this.set(k, v)
                }
            }
        },

        // todo: takes a key as an argument and returns the value that is associated with it. If the key is not found, return undefined.
        get(key) {
            const hashCode = this.hash(key)

            if (hashCode < 0 || hashCode >= capacity) {
                throw new Error("Trying to access index out of bounds");
            }

            if (table[hashCode] === null) return null

            let currentNode = table[hashCode]

            while (currentNode != null) {
                if (currentNode.key === key) {
                    return currentNode.value 
                } else {
                    currentNode = currentNode.nextNode
                }
            }
            return null
        },

        // takes a key as an argument and returns a boolean based on whether or not the key is in the hash map.
        has(key) {

            // Could have written: return this.get(key) !== null;

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

            const dummy = createNode(null, null, table[hashCode])
            
            let currentNode = dummy

            while (currentNode.nextNode != null) {
                const childNode = currentNode.nextNode

                if (childNode.key === key) {
                    const nextNodes = childNode.nextNode
                    currentNode.nextNode = nextNodes
                    table[hashCode] = dummy.nextNode
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
            table.fill(null)
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
test.set('lion', 'golden') // 12
test.set('moon', 'silver') // 13

const output = test.length()
console.log({output})




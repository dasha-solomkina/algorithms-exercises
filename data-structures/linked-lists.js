const createNode = (value = null, nextNode = null) => ({
    value,
    nextNode
});

const createLinkedList = () => {
    let firstNode = null;
    let countOfNodes = 0;

    return {
        // append(value) adds a new node containing value to the end of the list.
        append(value) {
            const newNode = createNode(value)
            if (firstNode === null) {
                firstNode = newNode
            } else {
                let currentNode = firstNode
                while (currentNode.nextNode != null) {
                    currentNode = currentNode.nextNode
                }
                currentNode.nextNode = newNode
            }
            countOfNodes ++
            return firstNode;
        },

        // prepend(value) adds a new node containing value to the start of the list.
        prepend(value) {
            const newNode = createNode(value)
            if (firstNode === null) {
                firstNode = newNode
            } else {
                newNode.nextNode = firstNode;
            }
            countOfNodes ++
            return newNode;
        },

        // size() returns the total number of nodes in the list.
        size() {
            return countOfNodes
        },

        // head() should return the value of the first node in the list. If the list is empty, it should return undefined.
        head() {
            return firstNode == null ? undefined : firstNode.value
        },

         // tail() should return the value of the final node in the list. If the list is empty, it should return undefined.
        tail() {
            if (firstNode == null) return undefined
            
            let currentNode = firstNode
            while (currentNode.nextNode != null) {
                currentNode = currentNode.nextNode
            }
            return currentNode.value
        },

        // at(index) should return the value of the node at the given index. If there’s no node at the given index, it should return undefined.
        at(index) {
            if (index > countOfNodes - 1) return undefined
            
            let currentIndex = 0
            let currentNode = firstNode
            while (currentIndex != index) {
                currentNode = currentNode.nextNode
                currentIndex ++
            }
            return currentNode.value
        },


        // pop() should remove the head node from the list and return its value. If it’s used on an empty list, it should just return undefined.
        pop() {
            if (countOfNodes === 0) return undefined

            const secondNode = firstNode.nextNode
            const removedValue = firstNode.value
            firstNode = secondNode

            countOfNodes--

            return removedValue
        },

        // contains(value) returns true if the passed in value is in the list and otherwise returns false.
        contains(value) {
            let currentNode = firstNode
            while (currentNode != null) {
                if (currentNode.value === value) return true
                currentNode = currentNode.nextNode
            }
            return false
        },

        // findIndex(value) returns the index of the node containing the given value. If the value can’t be found in the list, it should return -1. If more than one node has a value matching the given value, it should return the index of the first node with the matching value.
        findIndex(value) {
            let currentNode = firstNode
            let index = 0
            while (currentNode != null) {
                if (currentNode.value === value) return index
                index ++
                currentNode = currentNode.nextNode
            }
            return -1
        },

        // toString() represents your LinkedList objects as strings, so you can print them out and preview them in the console. If the list is empty, it should return an empty string. The format should be: ( value ) -> ( value ) -> ( value ) -> null.
        toString() {
            if (countOfNodes === 0) return  ''
            
            let output = ''
            let currentNode = firstNode
            while (currentNode.nextNode != null) {
                output += `( ${currentNode.value} ) -> `
                currentNode = currentNode.nextNode
            }

            output += `( ${currentNode.value} )`

            return output
        },

        // insertAt(index, ...values) should insert new nodes with the given values at the given index.
        insertAt(index, ...values) {

        if (index < 0 || index > countOfNodes) {
            throw new RangeError("Index out of bounds");
        }

        if (values.length === 0) return 

        const dummy = createNode(null, firstNode)

        let currentNode = dummy 

        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode
        }

        const restNodes = currentNode.nextNode

        for (const val of values) {
            const newNode = createNode(val)
            currentNode.nextNode = newNode
            currentNode = newNode
            countOfNodes ++
        }

        currentNode.nextNode = restNodes

        firstNode = dummy.nextNode
        
        },

         // removeAt(index) that removes the node at the given index. If the given index is out of bounds (below 0 or greater than or equal to the list’s size), throw a RangeError
        removeAt(index) {
            if (index < 0 || index > countOfNodes) throw new RangeError("Index out of bounds");

            const dummy = createNode(null, firstNode)
            let currentNode = dummy

            for (let i = 0; i < index; i++) {
                currentNode = currentNode.nextNode
            }

            const toRemove = currentNode.nextNode
            const restNodes = toRemove.nextNode

            currentNode.nextNode = restNodes
            firstNode = dummy.nextNode
        },

    }
}

const list = createLinkedList()

list.append("1. apple")
list.append("2. orange")
list.append("3. banana")
list.insertAt(2, 12, 13, 14)
const before  = list.toString()
list.removeAt(6)
const output  = list.toString()

console.log({ before })
console.log({ output })

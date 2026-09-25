function sortArrayMerge(arr) {
    
    if (arr.length <= 1) return arr

    const middle = Math.floor((arr.length) / 2)

    const left = sortArrayMerge(arr.slice(0, middle))
    const right = sortArrayMerge(arr.slice(middle))

    const sortedArray = []
    let i = 0 
    let j = 0
    
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            sortedArray.push(right[j])
            j++
        } else {
            sortedArray.push(left[i])
            i++
        }
    }

    sortedArray.push(...left.slice(i))
    sortedArray.push(...right.slice(j))

    return sortedArray
}

function createRandomArrayOf(n) {
    const array = []

    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * (100)))
    }

    return array
}

function randomArray(n) {
    const arr = createRandomArrayOf(n)
    const sortedArr = sortArrayMerge(arr)
    const removeDupl = Array.from(new Set(sortedArr))

    return removeDupl
}


const createNode = (data = null, right = null, left = null) => ({
    data, right, left
})

const createTree = (array) => {

    // let root = null
    const prettyPrint = (node, prefix = '', isLeft = true) => {
        if (node === null || node === undefined) {
            return;
        }

        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }

    const buildTree = (array, left = 0, right = array.length - 1) => {
        if (right < left) return null

        const middle = Math.floor((left + right) / 2)
        const root = createNode(array[middle])
        root.left = buildTree(array, left, middle - 1)
        root.right = buildTree(array, middle + 1, right)

        return root
    }

    let root = buildTree(array)


    prettyPrint(root)
    return {
        // Write an includes(value) function that accepts a value and returns true if the given value is in the tree. If the value isn’t in the tree, it should return false.
        includes(value) {
            let currentNode = root
            while (currentNode != null) {
                if (currentNode.data === value) return true
                if (currentNode.data > value) {
                    currentNode = currentNode.left
                } else {
                    currentNode = currentNode.right
                }
            }
            return false
        },

        // Write an insert(value) function that accepts a value and inserts a new node with that value into the tree. 
        insert(value) {
            const newNode = createNode(value)
            
            if (root === null) {
                root = newNode
                return
            }

            let currentNode = root

            while (currentNode != null) {
                if (currentNode.data === value) return

                if (currentNode.data > value) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode
                        return
                    }
                    currentNode = currentNode.left
                } else {
                    if (currentNode.right === null) {
                        currentNode.right = newNode
                    prettyPrint(root)
                        return
                    }
                    currentNode = currentNode.right
                }
            }

            // Recursive Alternative

            // insert(value, node = root) {
            //     if (node === null) return createNode(value);

            //     if (value < node.data) {
            //         node.left = this.insert(value, node.left);
            //     } else if (value > node.data) {
            //         node.right = this.insert(value, node.right);
            //     }

            // return node;
            // }

        },

        // Write a deleteItem(value) function that accepts a value and removes it from the tree.
        deleteItem(value) {

            function getSuccessor(current) {
                current = current.right
                while (current !== null && current.left !== null) {
                    current = current.left
                }
                return current
            }

            function delRecursive(root, value) {
                if (root === null) return null

                if (root.data > value) {
                    root.left = delRecursive(root.left, value)
                } else if (root.data < value) {
                    root.right = delRecursive(root.right, value)
                } else {
                    if (root.left === null) {
                        return root.right
                    } 
                    if (root.right === null) {
                        return root.left
                    }

                    const succ = getSuccessor(root)
                    root.data = succ.data
                    root.right = delRecursive(root.right, succ.data)
                }
                return root // ?

            }

            delRecursive(root, value)
            prettyPrint(root)


            // Non recursive impolementation attempt #1 - didnt go well, obviously ((
            // while (currentNode != null) {
            //     if (currentNode.data > value) {
            //         const childNode = currentNode.left 
            //         if (childNode != null && childNode.data === value) { // found the code to be deleted
            //             // Case 3 and then start from the root? 

            //             // case 1:
            //             if (childNode.left === null && childNode.right === null) {
            //                 currentNode.left = null
            //                 prettyPrint(root)
            //                 return
            //             }

            //             // case 2: 
            //             if ((childNode.left === null && childNode.right != null) || (childNode.left != null && childNode.right === null)) {
            //                 currentNode.left = childNode.right === null ? childNode.left : childNode.right
            //                 prettyPrint(root)
            //                 return
            //             }

            //         }
            //         currentNode = childNode
            //     } else {
            //         const childNode = currentNode.right
            //         if (childNode != null && childNode.data === value) { // found the code to be deleted

            //             // case 1:
            //             if (childNode.left === null && childNode.right === null) {
            //                 currentNode.right = null
            //                 prettyPrint(root)
            //                 return
            //             }

            //              // case 2: 
            //             if ((childNode.left === null && childNode.right != null) || (childNode.left != null && childNode.right === null)) {
            //                 currentNode.right = childNode.right === null ? childNode.left : childNode.right
            //                 prettyPrint(root)
            //                 return
            //             }
            //         }
            //         currentNode = childNode
            //     }
            // }
        },

        // Write a levelOrderForEach(callback) function that accepts a callback function as its parameter. 
        levelOrderForEach(callback){

            if (!callback) throw new Error("Callback is required")

            // iteration implementation
            // if (root === null) return
            // const queue = [root]

            // while (queue.length !== 0) {
            //     callback(queue[0].data)

            //     if (queue[0].left !== null) {
            //         queue.push(queue[0].left)
            //     }
            //     if (queue[0].right !== null) {
            //         queue.push(queue[0].right)
            //     }
            //     queue.shift()
            // }


            // recursive implementation 
            function levelOrderRecur(queue, callback) {
                if (queue.length === 0) return 
                callback(queue[0].data)

                if (queue[0].left) {
                    queue.push(queue[0].left)
                }
                if (queue[0].right) {
                    queue.push(queue[0].right)
                }
                queue.shift()
                levelOrderRecur(queue, callback)
           
            }

            levelOrderRecur([root],  callback)
        },

         // Write preOrderForEach(callback) functions that also accept a callback as a parameter.
        preOrderForEach(callback) {
            if (!callback) throw new Error("Callback function needed")
            
            function helper(root) {
                if (root === null) return 

                callback(root.data)
                helper(root.left)
                helper(root.right)
            }

            helper(root)
        },
       
        // Write inOrderForEach(callback) functions that also accept a callback as a parameter.
        inOrderForEach(callback){
          function helper(root) {
                if (root === null) return 
                
                helper(root.left)
                callback(root.data)
                helper(root.right)
            }

            helper(root)
        },

        // Write postOrderForEach(callback) functions that also accept a callback as a parameter.
        postOrderForEach(callback){
            function helper(root) {
                if (root === null) return 
                
                helper(root.left)
                helper(root.right)
                callback(root.data)
            }

            helper(root)
        },

        height(value) {
            let lookupNode = null
            let currentNode = root

            function helper(node) {
                if (node === null) return 0
                const height = 1 + Math.max(helper(node.right), helper(node.left))
                return height
            }
          
            while (currentNode !== null) {
                if (currentNode.data === value) {
                    lookupNode = currentNode
                    return helper(lookupNode)
                } else if (currentNode.data < value) {
                    currentNode = currentNode.right
                } else {
                    currentNode = currentNode.left
                }
            }
            
            return undefined
        },

        // Write a depth(value) function that returns the depth of the node containing the given value. Depth is defined as the number of edges in the path 
        // from that node to the root node. If the value is not found in the tree, the function should return undefined.
        depth(value) {
            let currentNode = root
            let depth = 0

            while (currentNode !== null) {
                if (currentNode.data === value) {
                    return depth
                } else if (currentNode.data < value) {
                    currentNode = currentNode.right
                    depth++
                } else {
                    currentNode = currentNode.left
                    depth++

                }   
            }
            
            return undefined
        },

        // isBalanced() {

        //     function getHeight(node) {
        //         if (node === null) return 0
        //         const height = 1 + Math.max(getHeight(node.right), getHeight(node.left))
        //         return height
        //     }

        //     function checkBalance(node) {
        //         if (node === null) return null
               
        //         const leftHeight = getHeight(node.left)
        //         const rightHeight = getHeight(node.right)


        //         if (((leftHeight - rightHeight) <= 1) &&  ((leftHeight - rightHeight) >= - 1)) {
        //             return true
        //         }
                
        //         return false
        //     }

        //     function levelOrderRecur(queue, callback, result = true) {
        //         if (queue.length === 0) return 
        //         result = result * callback(queue[0])
        //         callback(queue[0])

        //         if (queue[0].left) {
        //             queue.push(queue[0].left)
        //         }
        //         if (queue[0].right) {
        //             queue.push(queue[0].right)
        //         }
        //         queue.shift()
        //         levelOrderRecur(queue, callback, result)
        //         return result
        //     }

        //     return levelOrderRecur([root], checkBalance)
        // },

        // recuresive
        isBalanced() {
            function check(curr) {
                if (curr === null) return 0 

                const left = check(curr.left) 
                if (left === -1) return -1

                const right = check(curr.right) 
                if (right === -1) return -1

                if (Math.abs(left - right) > 1) return -1

                return 1 + Math.max(right, left)
            }
            return check(root) !== -1
        },

        // rebalance() {
        //     if (!this.isBalanced()) {

        //         const array = []

        //         function extractArray(node) {
        //             if (node === null) return null
                    
        //             extractArray(node.left)
        //             array.push(node.data)
        //             extractArray(node.right)
        //         } 

        //         function buildTree(arr, left = 0, right = arr.length - 1) {
        //             if (left > right) return null 

        //             const middle =  Math.floor((left + right) / 2)
        //             const root = createNode(arr[middle])

        //             root.left = buildTree(arr, left, middle - 1)
        //             root.right = buildTree(arr, middle + 1, right)

        //             return root
        //         }

        //        extractArray(root)
        //        console.log({array})

        //        const newRoot = buildTree(array)
        //        prettyPrint(newRoot)
        //     } 
        // },

        // reusing the other funtions
        rebalance() {
            if (this.isBalanced()) return

            const sortedArray = [];
            this.inOrderForEach(val => sortedArray.push(val));

            root = buildTree(sortedArray);
            console.log({root})
            prettyPrint(root)
        }



    }
}

const testUnsorted = [4, 5, 6, 7, 10, 12, 24, 32]

const test = createTree(testUnsorted)

// test.rebalance()
test.insert(200)
// test.insert(400)
test.rebalance()




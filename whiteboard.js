function whiteboard() {

    const a = {age: 20}
    const b = a
    b.age = 50

    console.log({a, b})
}

whiteboard() 
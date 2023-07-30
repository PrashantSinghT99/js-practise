class Stack {
    constructor() {
        this.stack = [];
    }
    //push
    push(element) {
        this.stack.push(element)
    }
    //pop
    pop() {
        if (this.isEmpty()) return "Stack is empty"
        return this.stack.pop()
    }
    //isEmpty
    isEmpty() {
        return this.size() === 0
    }
    //peek
    peek() {
        if (this.isEmpty()) return "Stack is empty"
        return this.stack[this.size() - 1];
    }
    //size
    size() {
        return this.stack.length;
    }

    printStack() {
        for (let i = this.size() - 1; i >= 0; i--) {
            console.log(`stack element ${i}`,this.stack[i]);
        }
    }
}


var obj = new Stack();
obj.push(1)
obj.push(2)
obj.push(3)


obj.printStack()
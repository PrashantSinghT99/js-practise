class Queue {
    constructor() {
        this.queue = [];
    }
    //enqueue
    enqueue(element) {
        this.queue.push(element)
    }
    //dequeue
    dequeue() {
        if (this.isEmpty()) return "Queue is empty"
        this.queue.shift()
    }
    //peek
    peek() {
        if (this.isEmpty()) return "Queue is empty"
        return this.queue[0];
    }
    //isEmpty
    isEmpty() {
        return this.size() === 0
    }
    //size    
    size() {
        return this.queue.length;
    }
    printQueue() {
        for (let i = 0; i < this.size(); i++) {
            console.log(`queue element ${i}`, this.queue[i]);
        }
    }
}

const obj = new Queue();
obj.enqueue(1)
obj.enqueue(2)
obj.enqueue(3)
obj.dequeue();
console.log(obj.peek());
//obj.printQueue();
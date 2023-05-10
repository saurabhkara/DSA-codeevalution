//Queue implementation using array
class Queue{
    items;
    constructor(){
        this.items=[];
    }

    enqueue(elem){
        this.items.push(elem);
    }

    dequeue(){
        this.items.shift();
    }

    peek(){
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length ===0;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items);
    }
}

// const queue = new Queue();
// console.log(queue.isEmpty())
// queue.enqueue(10);
// console.log(queue.size())
// queue.dequeue();
// queue.enqueue(25)
// queue.print()



class Queue1{
    constructor(){
        this.items={};
        this.front=0;
        this.rear=0;
    }

    enqueue(elem){
        this.items[this.rear]=elem;
        this.rear++;
    }

    dequeue(){
        const item =this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    peek(){
        return this.items[this.front];
    }

    size(){
        return this.rear - this.front;
    }

    isEmpty(){
        return this.rear-this.front ===0;
    }
}

const enqueue1 = new Queue1();
console.log(enqueue1.isEmpty())
enqueue1.enqueue(10);
console.log(enqueue1.size());
console.log(enqueue1.dequeue());

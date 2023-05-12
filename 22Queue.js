//Queue implementation using array
class Queue {
  items;
  constructor() {
    this.items = [];
  }

  enqueue(elem) {
    this.items.push(elem);
  }

  dequeue() {
    this.items.shift();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
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

//OPtimed Queue with object.
class Queue1 {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(elem) {
    this.items[this.rear] = elem;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }
}

// const enqueue1 = new Queue1();
// console.log(enqueue1.isEmpty())
// enqueue1.enqueue(10);
// console.log(enqueue1.size());
// console.log(enqueue1.dequeue());

class Queue2 {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isEmpty(){
    return this.currentLength===0;
  }

  isFull(){
    return this.currentLength===this.capacity;
  }

  enqueue(elem){
    if(this.isFull()){
        console.log('Queue is full');
        return ;
    }

    this.rear= (this.rear+1)%this.capacity;
    this.items[this.rear]=elem;
    this.currentLength=this.currentLength+1;
    if(this.front===-1){
        this.front= this.rear;
    }
  }

  dequeue(){
    if(this.isEmpty()){
        console.log('Queue is empty');
        return null;
    }
    const item = this.items[this.front];
    this.items[this.front]=null;
    this.front= (this.front+1)%this.capacity;
    this.currentLength= this.currentLength-1;
    if(this.isFull()){
        this.front=-1;
        this.rear=this.front;
    }
    return item; 
  }
   
  peek(){
    if(this.isEmpty()){
        return null;
    }
    return this.items[this.front];
  }

  size(){
    return this.currentLength;
  }
  
  print(){
    if(this.isEmpty()){
        return null;
    }
    let str="";
    for(let i = this.front; i!==this.rear+1; i=(i+1)%this.capacity){
        str= str + this.items[i] + " ";
    }
    console.log(str);
  }
}

const queue2 = new Queue2(5);
console.log(queue2.isEmpty());
// queue2.enqueue(5);
// queue2.enqueue(4);
console.log(queue2.size())
queue2.print()
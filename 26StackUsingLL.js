class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList {
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head= node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            console.log('Stack is empty');
            return null;
        }else{
            let temp = this.head;
            this.head = this.head.next;
            this.size--;
            temp.next=null;
            return temp;
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('Stack is empty');
            return null;
        }else{
            let temp= this.head;
            let items= "";
            while(temp){
               items = items  + temp.value + " ";
               temp=temp.next; 
            }
            console.log(items);
        }
       
    }
}

// const LL = new LinkedList();
// console.log(LL.isEmpty());
// LL.prepend(10);
// LL.prepend(15);
// LL.prepend(25);
// LL.prepend(30);
// console.log(LL.getSize());
// console.log(LL.removeFromFront())
// LL.print();


class Stack{
    constructor(){
        this.stack = new LinkedList();
    }

    push(value){
        this.stack.prepend(value);
    }
    pop(){
        return this.stack.removeFromFront();
    }

    getSize(){
        return this.stack.getSize();
    }

    print(){
      return this.stack.print();
    }

}

const st= new Stack();
console.log(st.getSize());
st.push(2);
st.push(3);
st.print();
st.pop();
st.print();
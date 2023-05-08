class Stack{
    constructor(){
        this.list = [];
    }

    push(elem){
        this.list.push(elem);
    }

    pop(){
      return this.list.pop();  
    }

    peek(){
        return this.list[this.list.length -1];
    }

    isEmpty(){
        return this.list.length ===0;
    }

    print(){
        console.log(this.list.toString());
    }

    size(){
        return this.list.length;
    }
}

const stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
stack.print();
stack.pop();
stack.isEmpty();
stack.print();

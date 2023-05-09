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


class Stack1{
    size;
    arr;
    top;
    constructor(){
        this.size= 5;
        this.arr =[];
        this.top=-1
    }
    push(elem){
        if(this.arr.length ===this.size){
            console.log('Stack is overflow');
            return
        }else{
            this.top=this.top+1;
            this.arr[this.top]=elem;
        }
    }

    pop(){
        if(this.top===-1){
            console.log('Stack is underflow');
            return 
        }else{
            return this.arr[this.top--];
        }
    }

    peek(){
        if(this.top>-1){
            console.log('Top element of Stack is ',this.arr[this.top])
        return this.arr[this.top];
        }else{
            console.log('Nothing is isnide stack');
        }
    }
    
    stackSize(){
        console.log('Size of stack is',this.top+1);
    }

    print(){
        if(this.top>-1){
            console.log('Stack ', this.arr.toString())
        }else{
            console.log('Nothing is isnide stack');
        }
    }

}

const stack1 = new Stack1();
stack1.push(4)
stack1.push(5)
stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.print();
stack1.push(6);
stack1.pop();
stack1.pop()
stack1.pop()
stack1.pop()
stack1.pop()
stack1.pop()
stack1.pop()
stack1.peek();
stack1.print();
stack1.stackSize();
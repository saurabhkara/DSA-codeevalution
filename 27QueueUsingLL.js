class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
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

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let temp = this.head;
            while(temp.next){
                temp=temp.next;
            }
            temp.next=node;

        }
        this.size++;
    }

    print(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return null;
        }else{
            let temp=this.head;
            let items="";
            while(temp){
                items = items + temp.value + " ";
                temp=temp.next;
            }
            console.log(items);
        }
    }

    removeFromFront(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return null;
        }else{
            let temp = thiss.head;
            this.head = this.head.next;
            this.size--;
            temp.next=null;
            return temp;
        }
    }
}


class Queue{
    constructor(){
        this.queue= new LinkedList();
    }

    enqueue(value){
        this.queue.append(value);
    }

    dequeue(){
        return this.queue.removeFromFront();
    }
    
    print(){
        this.queue.print();
    }
}

const qu= new Queue();
qu.dequeue();
qu.enqueue(2);
qu.enqueue(5);
qu.print();
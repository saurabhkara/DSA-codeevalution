class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedListWithTail{
    constructor(){
        this.head=null;
        this.size=0;
        this.tail= null;
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
            this.head =node;
            this.tail=node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head= node;
            this.tail= node;
        }else{
            this.tail.next=node;
            this.tail= node;
        }
        this.size++;
    }

    insert(value, position){
        if(this.isEmpty()){
            this.append(value);
        }else{
            const node = new Node(value);
            let temp = this.head;
            let tempPos = position-2;
            while(tempPos){
                temp = temp.next;
                tempPos--;
            }

            node.next = temp.next;
            temp.next =node;
            this.size++;
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('LinkedList is empty');
            return null;
        }else{
            let items = "";
            let temp=this.head;
            while(temp){
                items = items +" "+temp.value + " ";
                temp = temp.next;
            }
            console.log(items);
        }
    }

    removeFromFront(){
         if(this.isEmpty()){
            console.log('List is empty');
            return null;
         }else{
            let temp = this.head;
            this.head = this.head.next;
            this.size--;
            return temp;

         }
    }

    removeFromEnd(){
        if(this.isEmpty()){
            console.log('List is empty');
            return null;
        }else{
            let temp = this.head;
            while(temp.next.next){
                temp= temp.next;
            }
            let tempNode = temp;
            this.tail=tempNode;
            tempNode.next=null;
            this.size--;
            return tempNode;
        }
    }

    reverse(){
        if(this.isEmpty()){
            console.log('Cannot reverse linked list is empty');
            return null;
        }else{
            let prev = null;
            let curr = this.head;
            this.tail=this.head;
            while(curr){
              let temp = curr;
              curr=curr.next;
              temp.next=prev;
              prev=temp;  
            }
            this.head=prev;

        }


    }
}

const LL = new LinkedListWithTail();
console.log(LL.isEmpty());
LL.append(10)
LL.append(20)
LL.prepend(21);
LL.insert(23,2);
LL.removeFromFront();
console.log(LL.removeFromEnd())
LL.print();
LL.reverse();
LL.print();
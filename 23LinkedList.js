
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
    
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }

    print(){
        if(this.isEmpty()){
            console.log('Linked List is empty');
            return null;
        }else{
            let listValue="";
            let temp= this.head;
            while(temp){
                listValue=listValue + " " + temp.value + " ";
                temp= temp.next;
            }
            return listValue;
        }
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            let temp= this.head;
            while(temp.next){
                temp= temp.next;
            }
            temp.next=node;
        }
        this.size++;
    }

    insert(value,position){
        console.log(value, position);
        if(this.isEmpty() && position ===1){
            this.prepend(value);
        }else if(position === this.size+1){
            this.append(value);
        }else{
            const node= new Node(value);
            let temp= this.head;
            let tempPos=position-1;
            while(tempPos){
                temp= temp.next;
                tempPos--;
            }
            node.next=temp.next;
            temp.mext=node;
        }
        this.size++;
    }
}


const LL = new LinkedList();
console.log(LL.isEmpty())
console.log(LL.getSize())
// LL.prepend(10);
// LL.prepend(20);
// LL.prepend(30);
// LL.append(40);
LL.insert(15,1)
LL.insert(25,2)
console.log(LL.print());
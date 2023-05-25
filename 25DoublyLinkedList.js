class Node{
    constructor(value){
        this.left=null;
        this.value=value;
        this.right=null;
    }
}

class DoublyLinkedList{
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
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.left=this.head;
            this.head = node;
        }
        this.size++
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head= node;
        }else{
            const temp = this.head;
            while(temp.right){
                temp= temp.right;
            }
            node.left=temp;
            temp.right=node;
        }
        this.size++;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
            return null;
        }else{
            let items = "";
            let temp= this.head;
            while(temp){
                items = items + temp.value + " ";
                temp= temp.right;
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
            this.head= this.head.right;
            this.size--;
            return temp;
        }
    }

    removeFromLast(){
        if(this.isEmpty()){
            console.log('List is empty');
            return null;
        }else if(this.size===1){
            let temp = this.head;
            this.head =null;
            this.size--;
            return temp;
        }else{
            let temp = this.head;
            while(temp.right.right){
                temp=temp.right;
            }
            let tempNode = temp.right;
            tempNode.left=null;
            tempNode.right=null;
            temp.right=null;
            this.size--;
            return tempNode;
        }
    }

    insertAt(){

    }

    search(){

    }
    removeFromPosition(){

    }
}


const LL= new DoublyLinkedList();
LL.append(10)
LL.append(11)
// LL.removeFromFront();
// LL.removeFromFront();
console.log(LL.removeFromLast());
LL.print()

// console.log(LL);
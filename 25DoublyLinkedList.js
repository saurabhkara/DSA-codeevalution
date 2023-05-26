class Node {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.right = this.head;
      node.left=null;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.right) {
        temp = temp.right;
      }
      node.left = temp;
      temp.right = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return null;
    } else {
      let items = "";
      let temp = this.head;
      while (temp) {
        items = items + temp.value + " ";
        temp = temp.right;
      }
      console.log(items);
    }
  }

  removeFromFront() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return null;
    } else {
      let temp = this.head;
      this.head = this.head.right;
      this.size--;
      return temp;
    }
  }

  removeFromLast() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return null;
    } else if (this.size === 1) {
      let temp = this.head;
      this.head = null;
      this.size--;
      return temp;
    } else {
      let temp = this.head;
      while (temp.right.right) {
        temp = temp.right;
      }
      let tempNode = temp.right;
      tempNode.left = null;
      tempNode.right = null;
      temp.right = null;
      this.size--;
      return tempNode;
    }
  }

  insertAt(position, value) {
    if (position <= 0 || position > this.size) {
      console.log("Invalid position");
      return null;
    } else {

      if (position === 1) {
        this.prepend(value);
      } else if (position === this.size) {
        this.append(value);
      } else {
        const node = new Node(value);
        let temp = this.head;
        let tempPos = position;
        while (tempPos > 2) {
          temp = temp.right;
          tempPos--;
        }
        node.right = temp.right;
        node.left = temp;
        temp.right = node;
        this.size++;
      }
    }
  }

  search(value) {
    if(this.isEmpty()){
        console.log('List is empty');
        return null;
    }else{
        let temp=this.head;
        let position=1;
        while(temp){
            if(temp.value===value){
             return {position:position, value:temp.value}
            }
            temp=temp.right;
            position++;
        }
        console.log('Value not found');
        return -1;
    }
  }
  removeFromPosition(position) {
    if(this.isEmpty()){
        console.log('List is empty');
        return null;
    }else{
       let temp =this.head;
       if(position ===1){
         this.removeFromFront();
       }else if(position===this.size){
            this.removeFromLast()
       }else{
        let curr = this.head;
        let tempPos= position; 
            while(tempPos>2){
                curr=curr.right;
                tempPos--;
        }
        let temp = curr.right;
        curr.right = temp.right;
        temp.right.left=curr;
        temp.right=null;
        temp.left=null;
        return temp;
       }
    }
  }
}

const LL = new DoublyLinkedList();
LL.append(10);
console.log(LL.getSize())
LL.prepend(5);
console.log(LL.getSize());
LL.append(11);
console.log(LL.getSize());
// LL.removeFromFront();
// LL.removeFromFront();
// console.log(LL.removeFromLast());
LL.insertAt(2, 9);
console.log(LL.getSize());
LL.insertAt(3, 4);
console.log(LL.getSize());
LL.insertAt(1, 1);
console.log(LL.getSize());
LL.print();
// console.log(LL.search(5))
// console.log(LL.search(4))
// console.log(LL.search(15))
console.log(LL.removeFromPosition(3));
LL.print();
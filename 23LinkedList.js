class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Linked List is empty");
      return null;
    } else {
      let listValue = "";
      let temp = this.head;
      while (temp) {
        listValue = listValue + " " + temp.value + " ";
        temp = temp.next;
      }
      return listValue;
    }
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = node;
    }
    this.size++;
  }

  insert(value, position) {
    if (position < 0 || position > this.size) {
      console.log("Invalid position");
      return null;
    }
    if (position === 1) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let temp = this.head;
      for (let i = 0; i < position-2; i++) {
        temp = temp.next;
      }
      node.next = temp.next;
      temp.next = node;
      this.size++;
    }
  }

  remove(position){
    if(this.isEmpty()){
        console.log('Linked list is empty');
        return null;
    }else if(position===1){
        let temp= this.head;
        this.head= this.head.next;
        return temp;
    }else{
        let prev=null;
        let temp = this.head;
        let i=position-1;
        while(i){
            prev=temp;
            temp=temp.next;
            i--;
        }
        prev.next=temp.next;
        return temp
    }
  }

  reverse(){
    if(this.isEmpty()){
        console.log('Linked list is empty');
    }else{

    }
  }
}

const LL = new LinkedList();
console.log(LL.isEmpty());
console.log(LL.getSize());
LL.prepend(10);
LL.prepend(20);
LL.prepend(30);
LL.append(40); 
LL.insert(15, 1);
console.log(LL.print());
LL.insert(25, 2);
LL.insert(35, 3);
console.log(LL.print());
console.log(LL.remove(1));
console.log(LL.print());
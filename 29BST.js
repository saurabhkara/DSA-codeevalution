class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(){
        this.root=null;
    }

    isEmpty(){
        return this.root===null;
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root= newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(root,newNode){

        if(root.value>newNode.value && root.left===null){
            root.left=newNode;
            return 
        }
        if(root.value<=newNode.value && root.right===null){
            root.right=newNode;
            return
        }
        if(root.value>newNode.value && root.left !==null){
            this.insertNode(root.left, newNode);
        }else{
            this.insertNode(root.right, newNode);
        }
    }

    preOrder(root){
        if(!root){
            return
        }
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
    inOrder(root){
        if(!root){
            return
        }
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right);
    }

    postOrder(root){
        if(!root){
            return 
        }
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value);
    }
}


const bst = new BST();
bst.isEmpty();
bst.insert(5);
bst.insert(8);
bst.insert(3);
bst.insert(4);
bst.insert(1);
bst.insert(7);
bst.insert(9);
// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
bst.postOrder(bst.root);
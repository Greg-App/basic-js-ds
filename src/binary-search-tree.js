const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor (value) {
    this.rootT=value?value:null;
  }

  root() {
   return this.rootT?this.rootT:null;
   
  }

  add(data) {
    const addedNode =new Node(data);
    if(this.rootT===null) {
      this.rootT=addedNode;
    } else {this.addNode(this.rootT,addedNode);
    }
  }
  
  addNode(curNode,newNode) {
    if (newNode.data>curNode.data) {
      if(curNode.right===null) {
       curNode.right=newNode;
      } else {
        this.addNode(curNode.right,newNode); 
      }
  }
  else {
    if(curNode.left===null) {
      curNode.left=newNode;
     } else {
       this.addNode(curNode.left,newNode); 
     }
  }
}


  has(data) {
    
    if(!this.rootT) {
      return false;
    } else{
      let current = this.rootT;
      
      while(current.data!==data) {
        if(data>current.data) {
          if(current.right===null) {
            return false;
          }
          current=current.right;
        } else {
          if(current.left===null) {
            return false;
          }
          current=current.left;
        }
      } 
      return current.data===data?true:false;
      
    }
  }

  find(data) {
    if(!this.rootT) {
      return null;
    } else{
      let current = this.rootT;
      
      while(current.data!==data) {
        if(data>current.data) {
          if(current.right===null) {
            return null;
          }
          current=current.right;
        } else {
          if(current.left===null) {
            return null;
          }
          current=current.left;
        }
      } 
      return current.data===data?current:null;
      
    }
  }

  remove(data) {
    
  }

  min() {
    let current = this.rootT;
    while(current.left!==null) {
      current=current.left;
    }
    return current.data?current.data:null;
  }

  max() {
    let current = this.rootT;
    while(current.right!==null) {
      current=current.right;
    }
    return current.data?current.data:null;
  }
}

module.exports = {
  BinarySearchTree
};
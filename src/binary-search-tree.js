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
    if (this.rootT !== null) {
      let current = this.find(data);
      if (current === this.rootT) {
        this.prev = current;
        if (!current.left && !current.right) {
          this.rootT = null;
        } else if (current.left && !current.right) {
          this.rootT = current.left;
        } else if (!current.left && current.right) {
          this.rootT = current.right;
        } else { //has both children
          /* this.rootT = current.left;
          let right = current.right ? current.right : null;
          current = current.left;
          while (current.right) {
            current = current.right;
          }
          current.right = right; */
          this.rootT = current.right;
          let left = current.left ? current.left : null;
          current = current.right;
          while (current.left) {
            current = current.left;
          }
          current.left = left;
        }
      } else {
        if (current !== null) {
          if (!current.left && !current.right) {
            if (this.prev&&this.prev.right === current) {
              this.prev.right = null;
            } else {
              if(this.prev) {this.prev.left = null;}
            }
          } else if (current.left && !current.right) {
            if (this.prev&&this.prev.right === current) {
              this.prev.right = current.left;
            } else {
              if(this.prev){this.prev.left = current.left;}
            }
          } else if (!current.left && current.right) {
            if (this.prev&&this.prev.right === current) {
              this.prev.right = current.right;
            } else {
              if(this.prev) {this.prev.left = current.right;}
            }
          } else { //has both children

            if (this.prev&&this.prev.right === current) {
              this.prev.right = current.left;
              let right = current.right ? current.right : null;
              current = current.left;
              while (current.right) {
                current = current.right;
              }
              current.right = right;
            } else {
              if(this.prev){this.prev.left = current.right;}
              let left = current.left;
              current = current.right;
              while (current.left) {
                current = current.left;
              }
              current.left = left;
            }
          }
        }
      }
    }
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
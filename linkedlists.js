export function linkedList(head = null, tail = null){
        
        
    const append = function(value){
        let newNode = node(value);
        if (head == null){
            head = newNode;
            tail = newNode;
        } else {
            let previousNode = head;
            while (previousNode.nextNode != null){
                previousNode = previousNode.nextNode
            }
            previousNode.nextNode = newNode;
            tail = newNode;

        }
    }

    // const showIndex

    const showHead = function(){
        return {head};
    }

    const showTail = function(){
        return {tail};
    }

    const prepend = function(value){
        let newNode = node(value);
        if (head == null){
            head = newNode
        } else {
            const originalObject = head;
            const newObject = newNode;
            shiftIndexesFrom(originalObject.index);
            newObject.nextNode = originalObject;
            originalObject.previousNode = newObject;
            head = newObject;
            head.index = 0;
            head.previousNode = null;
            console.log(head);
            return head;
            
        }
    }

    const size = function(counter = 0){
        if (head == null){
            return counter;
        } else {
             let currentNode = head;
            while(currentNode != null){
                currentNode = currentNode.nextNode
                counter += 1;
                }
        
        return counter;
        }
       
    }

    const at = function(index){
        if (head == null){
            return undefined;
        } else {
              let currentNode = head;
            while(currentNode != null){
                if (currentNode.index == index){
                    return currentNode;
                }
                 currentNode = currentNode.nextNode
                }
                return undefined;
        }
        
    }

       const searchValue = function(value){
        if (head == null){
            return -1;
        } else {
              let currentNode = head;
            while(currentNode != null){
                if (currentNode.value == value){
                    return currentNode.index;
                }
                 currentNode = currentNode.nextNode
                }
                return -1;
        }
        
    }

    const pop = function(){
        if (head == null){
            return undefined;
        } else {
            let popped = head;
            head = head.nextNode;
            shiftIndexes();
            return popped;
        }
    }

    const contains = function(value){
         if (head == null){
            return false;
        } else {
              let currentNode = head;
            while(currentNode != null){
                if (currentNode.value == value){
                    return true;
                }
                 currentNode = currentNode.nextNode
                }
                return false;
        }
        
    }

    const toString = function(){
        if (head == null){
            return '';
        } else {
            let string = '';
            let pointer = head;
              while(pointer != null){
                let value = pointer.value;
                value = value.toString();
                value = `( ${value} ) -> `
                string += value;
                pointer = pointer.nextNode;
                }
                string += 'null';
                return string;

        }

    }

    const insertAt = function(index,...values){
        let getElement = at(index);
        if (getElement == undefined){
            return 'RangeError';
        } else {
                let pointer = head;
                while (pointer != null){
                    if (pointer == getElement){
                        for (let i = 0; i <= values.length -1; i++){
                            if (index == 0){
                            prepend(values[i]);
                            } else {
                              let newNodeIndex = pointer.index;
                              shiftIndexesFrom(pointer.index);
                              console.log(head);    
                              let newNode = node(values[i]);
                              newNode.nextNode = pointer;
                              newNode.previousNode = pointer.previousNode;
                              pointer.previousNode.nextNode = newNode;
                              newNode.index = newNodeIndex;
                              pointer.previousNode = newNode;
                            }
                          
                                       
                        }
                    }
                     pointer = pointer.nextNode;       
                }
           
        }
    }

    const removeAt = function(index){
        let getElement = at(index);
        if (getElement == undefined){
            return 'RangeError';
        } else {
            let pointer = head;
                while (pointer != null){
                    if (pointer == getElement){
                                if (pointer.index == 0){
                                    if (pointer.nextNode != null){
                                         pointer.nextNode.previousNode = null;
                                        head = pointer.nextNode;
                                        shiftIndexes();
                                    } else {
                                         head = pointer.nextNode;
                                        shiftIndexes();
                                    }
                                } else {
                                    pointer.previousNode.nextNode = pointer.nextNode;
                                    if (pointer.nextNode != null){
                                        pointer.nextNode.previousNode = pointer.previousNode;
                                    }
                                     shiftIndexes();
                                }
                             
                            }
                                pointer = pointer.nextNode;       
                    }              
                        }
                    }
    
        
                 
        
    

    const shiftIndexesFrom = function(index){
            let pointer = head;
           while(pointer != null){
                if (pointer.index >= index){
                    pointer.index += 1;
                }
                 pointer = pointer.nextNode;
                }
                
    }


    const shiftIndexes = function(){
        let pointer = head;
           while(pointer != null){
                if (pointer.index != 0){
                    pointer.index -= 1;
                }
                 pointer = pointer.nextNode;
                }
    }

    function node(value = null, nextNode = null, previousNode = null, index = null){
        index = size();
        if (head != null){
            previousNode = at(index-1);
        }
        return {value,nextNode, index, previousNode};
    }
    
   return {append, showHead, prepend, size,
     showTail, at, pop, searchValue, contains, toString, insertAt, removeAt}
   }

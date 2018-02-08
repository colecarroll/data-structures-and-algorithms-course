//A list of elements that are only accessible from one end of the list. Last in First Out

//Top = end of the stack
//Push = adding an element
//Pop = removing an element
//Peek = Show what's on top but don't remove it
//Length = how many elements in stack
//clear = remove all elements

class Stack {
  constructor() {
    this.dataStorage = [];
    this.top = 0;
  }

  push(element) {
    this.dataStorage[this.top++] = element;
  }

  pop() {
    return this.dataStorage[--this.top];
  }

  peek() {
    return this.dataStorage[this.top - 1];
  }

  clear() {
    this.dataStorage = [];
    this.top = 0;
  }

  length() {
    return this.top;
  }
}

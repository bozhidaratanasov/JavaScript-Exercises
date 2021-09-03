class SortedList {
  constructor(){
    this.list = [];
    this.size = 0;
  }

  add(element) {
    this.list.push(element);
    this.list.sort((a, b) => a - b);
    this.size++;
  }

  remove(index) {
    try {
      this.list.splice(index, 1);
      this.size--;
    }
    catch(error){
      console.log("Index is out of range")
    }
  }

  get(index) {
    try {
      return this.list[index];
    }
    catch(error){
      console.log("Index is out of range")
    }
  }
}

let list = new SortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));



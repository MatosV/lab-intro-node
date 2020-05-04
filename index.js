class SortedList {
  constructor() {
    this.items = [];
    this.length = items.length;
  }

  add(item) {
    //adds one or more elements to the end of an array
    this.items.push(item);
    //sorts the elements of an array in place
    this.items.sort();
    // update the length
    this.items.length++;
  }

  load(pos) {
    // ...
    console.log(this.items.indexOf(pos));
  }

  max() {
    // ...
    console.log(Math.max(...this.items));
  }

  min() {
    // ...
    console.log(Math.min(...this.items));
  }

  sum() {
    // ...
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(this.items.reduce(reducer));
  }

  avg() {
    for (let i = 0; i < this.length; i++) {
      total += this.length[i];
    }
    let avg = total / this.length;

    console.log(avg);
  }
}

module.exports = SortedList;

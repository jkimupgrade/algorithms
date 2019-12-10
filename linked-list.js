// data property contains the value the linked list item should store
// next property is a pointer to the next item in the list
// next property starts out as null because you don't yet know the next code
class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// // create the first node
// const head = new LinkedListNode(12);

// // add a second node
// head.next = new LinkedListNode(99);

// // add a third node
// head.next.next = new LinkedListNode(37);

// // traversing linked list (traversal algorithm)
// let current = head;

// while (current !== null) {
//   console.log(current.data)
//   current = current.next
// }


// 1. Define the LinkedList class
// 2. Adding new data to the list
// 3. Retrieving data from the list
// 4. Removing data from a linked list 


const head = Symbol('head');

class LinkedList {
  constructor() {
    this[head] = null;
  }

  add(data) {

    // create a new node
    const newNode = new LinkedListNode(data);
    // special case: no items in the list yet
    if (this[head] === null) {
      // just set the head to the new node
      this[head] = newNode;
    } else {
      // start out by looking at the first node
      let current = this[head];

      // follow `next` links until you reach the end
      while (current.next !== null) {
        current = current.next;
      }

      // assign the node into the `next` pointer
      current.next = newNode;
    }
  }

  get(index) {
    // ensure `index` is a positive value
    if (index > -1) {
      // the pointer to use for traversal
      let current = this[head];
      // used to keep track of where in the list you are
      let i = 0;
      // traverse the list until you reach either the end
      while ((current !== null) && (i < index)) {
        current = current.next;
        i++;
      }
      // return the data if `current` isn't null
      return current !== null ? current.data : undefined;
    } else {
      return undefined;
    }
  }

  remove(index) {
    // special cases: empty list or invalid `index`
    if ((this[head] === null) || (index < 0)) {
      throw new RangeError(`Index ${index} does not exist in the list.`);
    }
    // special case: removing the first node
    if (index === 0) {
      // temporarily store the data from the node
      const data = this[head].data;
      // just replace the head with the next node in the list
      this[head] = this[head].next;
      // return the data at the previous head of the list
      return data;
    }
    // pointer use to traverse the list
    let current = this[head];
    // keep track of the node before current in the loop
    let previous = null;
    // used to track how deep into the list you are
    let i = 0;
    // same loops as in `get()`
    while ((current !== null) && (i < index)) {
      // save the value of current
      previous = current;
      // traverse to the next node
      current = current.next;
      // increment the count
      i++;
    }
    // if node was found, remove it
    if (current !== null) {
      // skip over the node to remove
      previous.next = current.next;
      // return the value that was just removed from the list
      return current.data;
    }
    // if node wasn't found, throw and error
    throw new RangeError(`Index ${index} does not exist in the list.`);
  }

  *values() {
    let current = this[head];

    while (current !== null) {
      yield current.data;
      current = current.next;
    }
  }
  [Symbol.iterator]() {
    return this.values();
  }
}

// using the class
const list = new LinkedList();
list.add('Jim');
list.add('Ben');
list.add('Chris');


// get the second item in the list
console.log(list.get(1));
console.log('');

// // print out all items
for (const color of list) {
  console.log(color);
}
console.log('');

// // remove the second item in the list
list.remove(1);
// get the new second item in the list
console.log(list.get(1));
console.log('');













// convert to an array
const array1 = [...list.values()];
const array2 = [...list];


